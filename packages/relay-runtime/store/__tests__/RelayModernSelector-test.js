/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall relay
 */

'use strict';

import type {OperationDescriptor} from '../RelayStoreTypes';
import type {Variables} from 'relay-runtime/util/RelayRuntimeTypes';

const {graphql} = require('../../query/GraphQLTag');
const {
  createOperationDescriptor,
  createRequestDescriptor,
} = require('../RelayModernOperationDescriptor');
const {
  areEqualSelectors,
  createNormalizationSelector,
  createReaderSelector,
  getDataIDsFromObject,
  getPluralSelector,
  getSelectorsFromObject,
  getSingularSelector,
  getVariablesFromObject,
} = require('../RelayModernSelector');
const {ROOT_ID} = require('../RelayStoreUtils');
const {createMockEnvironment, matchers} = require('relay-test-utils-internal');
const warning = require('warning');

describe('RelayModernSelector', () => {
  let UserFragment;
  let UserQuery;
  let UsersFragment;
  let environment;
  let zuck;
  let variables: Variables;
  let operationVariables;
  let operationDescriptor: OperationDescriptor;
  let owner;

  beforeEach(() => {
    expect.extend(matchers);
    jest.mock('warning');

    environment = createMockEnvironment();
    UserQuery = graphql`
      query RelayModernSelectorTestUserQuery(
        $id: ID!
        $size: [Int]
        $cond: Boolean!
      ) {
        node(id: $id) {
          ...RelayModernSelectorTestUserFragment
          ...RelayModernSelectorTestUsersFragment
        }
      }
    `;
    UserFragment = graphql`
      fragment RelayModernSelectorTestUserFragment on User {
        id
        name
        profilePicture(size: $size) @include(if: $cond) {
          uri
        }
      }
    `;
    UsersFragment = graphql`
      fragment RelayModernSelectorTestUsersFragment on User
      @relay(plural: true) {
        id
        name
        profilePicture(size: $size) @include(if: $cond) {
          uri
        }
      }
    `;
    const dataID = ROOT_ID;
    variables = {id: '4', size: null, cond: false};
    operationVariables = variables;
    const requestDescriptor = createRequestDescriptor(UserQuery, variables);
    const fragment = createReaderSelector(
      UserQuery.fragment,
      dataID,
      variables,
      requestDescriptor,
    );
    const root = createNormalizationSelector(
      UserQuery.operation,
      dataID,
      variables,
    );
    operationDescriptor = {
      fragment,
      request: requestDescriptor,
      root,
    };

    environment.commitPayload(operationDescriptor, {
      node: {
        id: '4',
        __typename: 'User',
        name: 'Zuck',
      },
    });
    zuck = (environment.lookup(
      createReaderSelector(
        UserQuery.fragment,
        ROOT_ID,
        {id: '4'},
        operationDescriptor.request,
      ),
    ).data: $FlowFixMe).node;
    variables = {
      size: null,
      cond: false,
    };
  });

  describe('getSingularSelector()', () => {
    test('throws for invalid inputs', () => {
      expect(() => getSingularSelector(UserFragment, 'zuck')).toThrowError(
        'RelayModernSelector: Expected value for fragment `RelayModernSelectorTestUserFragment` to ' +
          'be an object, got `"zuck"`.',
      );
      expect(() => getSingularSelector(UserFragment, [zuck])).toThrowError(
        'RelayModernSelector: Expected value for fragment `RelayModernSelectorTestUserFragment` to be an object, got ' +
          '`[{"__fragments":{"RelayModernSelectorTestUserFragment":{},"RelayModernSelectorTestUsersFragment":{}},"__id":"4","__fragmentOwner":' +
          JSON.stringify(operationDescriptor.request) +
          ',"__isWithinUnmatchedTypeRefinement":false}]`.',
      );
    });

    test('returns null and warns for unfetched fragment data', () => {
      const selector = getSingularSelector(UserFragment, {});
      expect(warning).toHaveBeenCalledWith(
        false,
        'RelayModernSelector: Expected object to contain data for fragment ' +
          '`%s`, got `%s`. Make sure that the parent ' +
          'operation/fragment included fragment `...%s` without `@relay(mask: false)`.',
        'RelayModernSelectorTestUserFragment',
        '{}',
        'RelayModernSelectorTestUserFragment',
      );
      expect(selector).toBe(null);
    });

    test('returns a selector', () => {
      const queryNode = UserQuery;
      owner = createOperationDescriptor(queryNode, operationVariables);
      zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;

      const selector = getSingularSelector(UserFragment, zuck);
      expect(selector).toEqual(
        createReaderSelector(UserFragment, '4', variables, owner.request),
      );
      expect(selector?.owner).toBe(owner.request);
    });

    test('uses variables from owner', () => {
      const queryNode = UserQuery;
      // Pass owner with different variables
      owner = createOperationDescriptor(queryNode, {
        id: '4',
        size: 16,
        cond: true,
      });
      zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;

      const selector = getSingularSelector(UserFragment, zuck);
      expect(selector).toEqual(
        createReaderSelector(
          UserFragment,
          '4',
          {
            size: 16,
            cond: true,
          },
          owner.request,
        ),
      );
      expect(selector?.owner).toBe(owner.request);
    });
  });

  describe('getPluralSelector()', () => {
    test('throws for invalid inputs', () => {
      expect(() => getPluralSelector(UserFragment, ['zuck'])).toThrowError(
        'RelayModernSelector: Expected value for fragment `RelayModernSelectorTestUserFragment` to be ' +
          'an object, got `"zuck"`.',
      );
    });

    test('returns null and warns for unfetched fragment data', () => {
      const selectors = getPluralSelector(UserFragment, [{}]);
      expect(warning).toHaveBeenCalledWith(
        false,
        'RelayModernSelector: Expected object to contain data for fragment ' +
          '`%s`, got `%s`. Make sure that the parent ' +
          'operation/fragment included fragment `...%s` without `@relay(mask: false)`.',
        'RelayModernSelectorTestUserFragment',
        '{}',
        'RelayModernSelectorTestUserFragment',
      );
      expect(selectors).toBe(null);
    });

    test('returns selectors', () => {
      const queryNode = UserQuery;
      owner = createOperationDescriptor(queryNode, operationVariables);
      zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;

      const selector = getPluralSelector(UserFragment, [zuck]);
      expect(selector).toEqual({
        kind: 'PluralReaderSelector',
        selectors: [
          createReaderSelector(UserFragment, '4', variables, owner.request),
        ],
      });
    });

    test('uses owner variables', () => {
      const queryNode = UserQuery;
      // Pass owner with different variables
      owner = createOperationDescriptor(queryNode, {
        id: '4',
        size: 16,
        cond: true,
      });
      zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;

      const selector = getPluralSelector(UserFragment, [zuck]);
      expect(selector).toEqual({
        kind: 'PluralReaderSelector',
        selectors: [
          createReaderSelector(
            UserFragment,
            '4',
            {
              size: 16,
              cond: true,
            },
            owner.request,
          ),
        ],
      });
    });
  });

  describe('getSelectorsFromObject()', () => {
    test('throws for invalid inputs', () => {
      expect(() =>
        getSelectorsFromObject({user: UserFragment}, {user: 'zuck'}),
      ).toThrowError(
        'RelayModernSelector: Expected value for fragment `RelayModernSelectorTestUserFragment` to be an ' +
          'object, got `"zuck"`.',
      );
    });

    test('returns null and warns for unfetched fragment data', () => {
      const selectors = getSelectorsFromObject(
        {user: UserFragment},
        {user: {}},
      );
      expect(warning).toHaveBeenCalledWith(
        false,
        'RelayModernSelector: Expected object to contain data for fragment ' +
          '`%s`, got `%s`. Make sure that the parent ' +
          'operation/fragment included fragment `...%s` without `@relay(mask: false)`.',
        'RelayModernSelectorTestUserFragment',
        '{}',
        'RelayModernSelectorTestUserFragment',
      );
      expect(selectors).toEqual({user: null});
    });

    test('ignores keys not present in the fragment map', () => {
      const selectors = getSelectorsFromObject(
        {user: UserFragment},
        {
          user: zuck,
          foo: 'foo',
          bar: 42,
        },
      );
      expect(selectors).toEqual({
        user: createReaderSelector(
          UserFragment,
          '4',
          variables,
          operationDescriptor.request,
        ),
      });
    });

    test('passes through null/undefined values', () => {
      let selectors = getSelectorsFromObject(
        {user: UserFragment},
        {user: null},
      );
      expect(selectors).toEqual({
        user: null,
      });
      selectors = getSelectorsFromObject(
        {user: UserFragment},
        {user: undefined},
      );
      expect(selectors).toEqual({
        user: undefined,
      });
    });

    test('returns singular selectors', () => {
      const selectors = getSelectorsFromObject(
        {user: UserFragment},
        {user: zuck},
      );
      expect(selectors).toEqual({
        user: createReaderSelector(
          UserFragment,
          '4',
          variables,
          operationDescriptor.request,
        ),
      });
    });

    test('returns plural selectors', () => {
      const selectors = getSelectorsFromObject(
        {user: UsersFragment},
        {user: [zuck]},
      );
      expect(selectors).toEqual({
        user: {
          kind: 'PluralReaderSelector',
          selectors: [
            createReaderSelector(
              UsersFragment,
              '4',
              variables,
              operationDescriptor.request,
            ),
          ],
        },
      });
    });

    describe('with fragment owner', () => {
      beforeEach(() => {
        const queryNode = UserQuery;
        owner = createOperationDescriptor(queryNode, operationVariables);
        zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;
      });

      test('returns singular selectors', () => {
        const selectors = getSelectorsFromObject(
          {user: UserFragment},
          {user: zuck},
        );
        expect(selectors).toEqual({
          user: createReaderSelector(
            UserFragment,
            '4',
            variables,
            owner.request,
          ),
        });
      });

      test('returns singular selector and uses variables from owner', () => {
        const queryNode = UserQuery;
        // Pass owner with different variables
        owner = createOperationDescriptor(queryNode, {
          id: '4',
          size: 16,
          cond: true,
        });
        zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;
        const selectors = getSelectorsFromObject(
          {user: UserFragment},
          {user: zuck},
        );
        expect(selectors).toEqual({
          user: createReaderSelector(
            UserFragment,
            '4',
            {
              size: 16,
              cond: true,
            },
            owner.request,
          ),
        });
      });

      test('returns plural selectors', () => {
        const selectors = getSelectorsFromObject(
          {user: UsersFragment},
          {user: [zuck]},
        );
        expect(selectors).toEqual({
          user: {
            kind: 'PluralReaderSelector',
            selectors: [
              createReaderSelector(
                UsersFragment,
                '4',
                variables,
                owner.request,
              ),
            ],
          },
        });
      });

      test('returns plural selectors and uses variables from owner', () => {
        const queryNode = UserQuery;
        // Pass owner with different variables
        owner = createOperationDescriptor(queryNode, {
          id: '4',
          size: 16,
          cond: true,
        });
        zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;
        const selectors = getSelectorsFromObject(
          {user: UsersFragment},
          {user: [zuck]},
        );
        expect(selectors).toEqual({
          user: {
            kind: 'PluralReaderSelector',
            selectors: [
              createReaderSelector(
                UsersFragment,
                '4',
                {
                  size: 16,
                  cond: true,
                },
                owner.request,
              ),
            ],
          },
        });
      });
    });
  });

  describe('getDataIDsFromObject()', () => {
    test('throws for invalid inputs', () => {
      expect(() =>
        getDataIDsFromObject({user: UserFragment}, {user: 'zuck'}),
      ).toThrowError(
        'RelayModernSelector: Expected value for fragment `RelayModernSelectorTestUserFragment` to be an ' +
          'object, got `"zuck"`.',
      );
    });

    test('returns null and warns for unfetched fragment data', () => {
      const ids = getDataIDsFromObject({user: UserFragment}, {user: {}});
      expect(warning).toHaveBeenCalledWith(
        false,
        'RelayModernSelector: Expected object to contain data for fragment ' +
          '`%s`, got `%s`. Make sure that the parent ' +
          'operation/fragment included fragment `...%s` without `@relay(mask: false)`.',
        'RelayModernSelectorTestUserFragment',
        '{}',
        'RelayModernSelectorTestUserFragment',
      );
      expect(ids).toEqual({user: null});
    });

    test('ignores keys not present in the fragment map', () => {
      const dataIDs = getDataIDsFromObject(
        {user: UserFragment},
        {
          user: zuck,
          foo: 'foo',
          bar: 42,
        },
      );
      expect(dataIDs).toEqual({
        user: '4',
      });
    });

    test('passes through null/undefined values', () => {
      let dataIDs = getDataIDsFromObject({user: UserFragment}, {user: null});
      expect(dataIDs).toEqual({
        user: null,
      });
      dataIDs = getDataIDsFromObject({user: UserFragment}, {user: undefined});
      expect(dataIDs).toEqual({
        user: undefined,
      });
    });

    test('returns singular ids', () => {
      const dataIDs = getDataIDsFromObject({user: UserFragment}, {user: zuck});
      expect(dataIDs).toEqual({
        user: '4',
      });
    });

    test('returns plural ids', () => {
      const dataIDs = getDataIDsFromObject(
        {user: UsersFragment},
        {user: [zuck]},
      );
      expect(dataIDs).toEqual({
        user: ['4'],
      });
    });
  });

  describe('getVariablesFromObject()', () => {
    const inputVariables = {
      cond: true,
      id: '4',
      size: 42,
      other: 'whatevs',
    };

    test('throws for invalid inputs', () => {
      expect(() =>
        getVariablesFromObject({user: UserFragment}, {user: 'zuck'}),
      ).toThrowError(
        'RelayModernSelector: Expected value for fragment `RelayModernSelectorTestUserFragment` to be an ' +
          'object, got `"zuck"`.',
      );
    });

    test('returns empty variables and warns for unfetched fragment data', () => {
      const fragmentVariables = getVariablesFromObject(
        {user: UserFragment},
        {user: {}},
      );
      expect(warning).toHaveBeenCalledWith(
        false,
        'RelayModernSelector: Expected object to contain data for fragment ' +
          '`%s`, got `%s`. Make sure that the parent ' +
          'operation/fragment included fragment `...%s` without `@relay(mask: false)`.',
        'RelayModernSelectorTestUserFragment',
        '{}',
        'RelayModernSelectorTestUserFragment',
      );
      expect(fragmentVariables).toEqual({});
    });

    test('ignores keys not present in the fragment map', () => {
      variables = getVariablesFromObject(
        {user: UserFragment},
        {
          foo: 'foo',
          bar: 42,
        },
      );
      expect(variables).toEqual({});
    });

    test('ignores null/undefined values', () => {
      variables = getVariablesFromObject({user: UserFragment}, {user: null});
      expect(variables).toEqual({});
      variables = getVariablesFromObject(
        {user: UserFragment},
        {user: undefined},
      );
      expect(variables).toEqual({});
    });

    test('returns variables for singular props', () => {
      variables = getVariablesFromObject({user: UserFragment}, {user: zuck});
      expect(variables).toEqual({
        cond: false,
        size: null,
      });
    });

    test('returns variables for plural props', () => {
      variables = getVariablesFromObject(
        {user: UsersFragment},
        {user: [null, zuck, null]},
      );
      expect(variables).toEqual({
        cond: false,
        size: null,
      });
    });

    describe('with fragment owner', () => {
      beforeEach(() => {
        const queryNode = UserQuery;
        owner = createOperationDescriptor(queryNode, inputVariables);
        zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;
      });

      test('returns variables for singular props', () => {
        variables = getVariablesFromObject({user: UserFragment}, {user: zuck});
        expect(variables).toEqual({
          cond: true,
          size: 42,
        });
      });
      test('returns variables for singular props and uses variables from owner', () => {
        const queryNode = UserQuery;
        // Pass owner with different variables
        owner = createOperationDescriptor(queryNode, {
          id: '4',
          size: 16,
          cond: false,
        });
        zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;
        variables = getVariablesFromObject({user: UserFragment}, {user: zuck});
        expect(variables).toEqual({
          cond: false,
          size: 16,
        });
      });
      test('returns variables for plural props', () => {
        variables = getVariablesFromObject(
          {user: UsersFragment},
          {user: [zuck]},
        );
        expect(variables).toEqual({
          cond: true,
          size: 42,
        });
      });

      test('returns variables for plural props and uses variables from owner', () => {
        const queryNode = UserQuery;
        // Pass owner with different variables
        owner = createOperationDescriptor(queryNode, {
          id: '4',
          size: 16,
          cond: false,
        });
        zuck = (environment.lookup(owner.fragment).data: $FlowFixMe).node;
        variables = getVariablesFromObject(
          {user: UsersFragment},
          {user: [zuck]},
        );
        expect(variables).toEqual({
          cond: false,
          size: 16,
        });
      });
    });
  });

  describe('areEqualSelectors()', () => {
    test('considers null and undefined equivalent selectors', () => {
      expect(areEqualSelectors(null, null)).toBe(true);
      expect(areEqualSelectors(undefined, undefined)).toBe(true);
      // Not sure if null and undefined should be treated as same, but
      // documenting existing behavior.
      expect(areEqualSelectors(null, undefined)).toBe(true);
      expect(areEqualSelectors(undefined, null)).toBe(true);
    });

    test('returns true for equivalent selectors', () => {
      const selector = createReaderSelector(
        UserFragment,
        '4',
        variables,
        operationDescriptor.request,
      );
      const clone = {
        ...selector,
        variables: {...selector.variables},
      };
      expect(areEqualSelectors(selector, selector)).toBe(true);
      expect(areEqualSelectors(selector, clone)).toBe(true);
    });

    test('returns false for equivalent selectors but with different owners', () => {
      const queryNode = UserQuery;
      owner = createOperationDescriptor(queryNode, operationVariables);
      const selector = createReaderSelector(
        UserFragment,
        '4',
        variables,
        owner.request,
      );
      // When the owner is different, areEqualSelectors should return false
      // even if the 2 selectors represent the same selection
      const differentOwner = {
        ...selector,
        owner: {...owner.request},
      };
      expect(areEqualSelectors(selector, differentOwner)).toBe(false);
    });

    test('returns true for equivalent selectors with same owners', () => {
      const queryNode = UserQuery;
      owner = createOperationDescriptor(queryNode, operationVariables);
      const selector = createReaderSelector(
        UserFragment,
        '4',
        variables,
        owner.request,
      );
      const clone = {
        ...selector,
        variables: {...selector.variables},
      };
      expect(areEqualSelectors(selector, selector)).toBe(true);
      expect(areEqualSelectors(selector, clone)).toBe(true);
    });

    test('returns false for different selectors', () => {
      const selector = createReaderSelector(
        UserFragment,
        '4',
        variables,
        operationDescriptor.request,
      );
      const differentID = {
        ...selector,
        dataID: 'beast',
      };
      const differentNode = {
        ...selector,
        node: {...selector.node},
      };
      const differentVars = {
        ...selector,
        variables: {},
      };
      expect(areEqualSelectors(selector, differentID)).toBe(false);
      expect(areEqualSelectors(selector, differentNode)).toBe(false);
      expect(areEqualSelectors(selector, differentVars)).toBe(false);
      expect(areEqualSelectors(selector, null)).toBe(false);
      expect(areEqualSelectors(selector, undefined)).toBe(false);
      expect(areEqualSelectors(null, selector)).toBe(false);
      expect(areEqualSelectors(undefined, selector)).toBe(false);
    });

    test('returns false for different selectors with owners', () => {
      const queryNode = UserQuery;
      owner = createOperationDescriptor(queryNode, operationVariables);
      const selector = createReaderSelector(
        UserFragment,
        '4',
        variables,
        owner.request,
      );
      const differentID = {
        ...selector,
        dataID: 'beast',
      };
      const differentNode = {
        ...selector,
        node: {...selector.node},
      };
      const differentVars = {
        ...selector,
        variables: {},
      };
      const differentOwner = {
        ...selector,
        owner: {...owner.request},
      };
      expect(areEqualSelectors(selector, differentID)).toBe(false);
      expect(areEqualSelectors(selector, differentNode)).toBe(false);
      expect(areEqualSelectors(selector, differentVars)).toBe(false);
      expect(areEqualSelectors(selector, differentOwner)).toBe(false);
    });
  });
});
