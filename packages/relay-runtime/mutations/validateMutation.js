/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 * @oncall relay
 */

'use strict';

import type {
  NormalizationField,
  NormalizationSelection,
} from '../util/NormalizationNode';
import type {ConcreteRequest} from '../util/RelayConcreteNode';
import type {Variables} from '../util/RelayRuntimeTypes';

const {
  ACTOR_CHANGE,
  CLIENT_COMPONENT,
  CLIENT_EDGE_TO_CLIENT_OBJECT,
  CLIENT_EXTENSION,
  CONDITION,
  DEFER,
  FRAGMENT_SPREAD,
  INLINE_FRAGMENT,
  LINKED_FIELD,
  LINKED_HANDLE,
  MODULE_IMPORT,
  RELAY_RESOLVER,
  SCALAR_FIELD,
  SCALAR_HANDLE,
  STREAM,
  TYPE_DISCRIMINATOR,
} = require('../util/RelayConcreteNode');
const warning = require('warning');

type ValidationContext = {
  visitedPaths: Set<string>,
  path: string,
  variables: Variables,
  missingDiff: Object,
  extraDiff: Object,
  moduleImportPaths: Set<string>,
};
// $FlowFixMe[method-unbinding] added when improving typing for this parameters
const hasOwnProperty = Object.prototype.hasOwnProperty;

let validateMutation:
  | (() => void)
  | ((
      optimisticResponse: any,
      mutation: ConcreteRequest,
      variables: ?any,
    ) => void) = () => {};
if (__DEV__) {
  const addFieldToDiff = (
    path: string,
    diff: Object,
    isScalar: void | boolean,
  ) => {
    let deepLoc = diff;
    path.split('.').forEach((key, index, arr) => {
      if (deepLoc[key] == null) {
        deepLoc[key] = {};
      }
      if (isScalar && index === arr.length - 1) {
        deepLoc[key] = '<scalar>';
      }
      deepLoc = deepLoc[key];
    });
  };
  validateMutation = (
    optimisticResponse: Object,
    mutation: ConcreteRequest,
    variables: ?Object,
  ) => {
    const operationName = mutation.operation.name;
    const context: ValidationContext = {
      path: 'ROOT',
      visitedPaths: new Set(),
      variables: variables || {},
      missingDiff: {},
      extraDiff: {},
      moduleImportPaths: new Set(),
    };
    validateSelections(
      optimisticResponse,
      mutation.operation.selections,
      context,
    );
    validateOptimisticResponse(optimisticResponse, context);
    warning(
      context.missingDiff.ROOT == null,
      'Expected `optimisticResponse` to match structure of server response for mutation `%s`, please define fields for all of\n%s',
      operationName,
      JSON.stringify(context.missingDiff.ROOT, null, 2),
    );
    warning(
      context.extraDiff.ROOT == null,
      'Expected `optimisticResponse` to match structure of server response for mutation `%s`, please remove all fields of\n%s',
      operationName,
      JSON.stringify(context.extraDiff.ROOT, null, 2),
    );
  };

  const validateSelections = (
    optimisticResponse: Object,
    selections: $ReadOnlyArray<NormalizationSelection>,
    context: ValidationContext,
  ) => {
    selections.forEach(selection =>
      validateSelection(optimisticResponse, selection, context),
    );
  };

  const validateSelection = (
    optimisticResponse: Object,
    selection: NormalizationSelection,
    context: ValidationContext,
  ): void => {
    switch (selection.kind) {
      case CONDITION:
        validateSelections(optimisticResponse, selection.selections, context);
        return;
      case CLIENT_COMPONENT:
      case FRAGMENT_SPREAD:
        validateSelections(
          optimisticResponse,
          selection.fragment.selections,
          context,
        );
        return;
      case SCALAR_FIELD:
      case LINKED_FIELD:
        return validateField(optimisticResponse, selection, context);
      case ACTOR_CHANGE:
        return validateField(
          optimisticResponse,
          selection.linkedField,
          context,
        );
      case INLINE_FRAGMENT:
        const type = selection.type;
        const isConcreteType = selection.abstractKey == null;
        validateAbstractKey(context, selection.abstractKey);
        selection.selections.forEach(subselection => {
          if (isConcreteType && optimisticResponse.__typename !== type) {
            return;
          }
          validateSelection(optimisticResponse, subselection, context);
        });
        return;
      case CLIENT_EXTENSION:
        selection.selections.forEach(subselection => {
          validateSelection(optimisticResponse, subselection, context);
        });
        return;
      case MODULE_IMPORT:
        return validateModuleImport(context);
      case TYPE_DISCRIMINATOR:
        return validateAbstractKey(context, selection.abstractKey);
      case RELAY_RESOLVER:
      case CLIENT_EDGE_TO_CLIENT_OBJECT:
      case LINKED_HANDLE:
      case SCALAR_HANDLE:
      case DEFER:
      case STREAM: {
        // TODO(T35864292) - Add missing validations for these types
        return;
      }
      default:
        (selection: empty);
        return;
    }
  };

  const validateModuleImport = (context: ValidationContext) => {
    context.moduleImportPaths.add(context.path);
  };

  const validateAbstractKey = (
    context: ValidationContext,
    abstractKey: ?string,
  ) => {
    if (abstractKey != null) {
      const path = `${context.path}.${abstractKey}`;
      context.visitedPaths.add(path);
    }
  };

  const validateField = (
    optimisticResponse: Object,
    field: NormalizationField,
    context: ValidationContext,
  ) => {
    const fieldName = field.alias || field.name;
    const path = `${context.path}.${fieldName}`;
    context.visitedPaths.add(path);
    switch (field.kind) {
      case SCALAR_FIELD:
        if (hasOwnProperty.call(optimisticResponse, fieldName) === false) {
          addFieldToDiff(path, context.missingDiff, true);
        }
        return;
      case LINKED_FIELD:
        const selections = field.selections;
        if (
          optimisticResponse[fieldName] === null ||
          (hasOwnProperty.call(optimisticResponse, fieldName) &&
            optimisticResponse[fieldName] === undefined)
        ) {
          return;
        }
        if (field.plural) {
          if (Array.isArray(optimisticResponse[fieldName])) {
            optimisticResponse[fieldName].forEach(r => {
              if (r !== null) {
                validateSelections(r, selections, {
                  ...context,
                  path,
                });
              }
            });
            return;
          } else {
            addFieldToDiff(path, context.missingDiff);
            return;
          }
        } else {
          if (optimisticResponse[fieldName] instanceof Object) {
            validateSelections(optimisticResponse[fieldName], selections, {
              ...context,
              path,
            });
            return;
          } else {
            addFieldToDiff(path, context.missingDiff);
            return;
          }
        }
    }
  };

  const validateOptimisticResponse = (
    optimisticResponse: Object,
    context: ValidationContext,
  ) => {
    if (Array.isArray(optimisticResponse)) {
      optimisticResponse.forEach(r => {
        if (r instanceof Object) {
          validateOptimisticResponse(r, context);
        }
      });
      return;
    }
    Object.keys(optimisticResponse).forEach((key: string) => {
      const value = optimisticResponse[key];
      const path = `${context.path}.${key}`;
      // if it's a module import path we don't have an ast so we cannot validate it
      if (context.moduleImportPaths.has(path)) {
        return;
      }
      if (!context.visitedPaths.has(path)) {
        addFieldToDiff(path, context.extraDiff);
        return;
      }
      if (value instanceof Object) {
        validateOptimisticResponse(value, {
          ...context,
          path,
        });
      }
    });
  };
}

module.exports = (validateMutation: (Object, ConcreteRequest, ?Object) => void);
