import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 2, action: Action.Subtract, expected: 8 },
  { a: 11, b: 4, action: Action.Subtract, expected: 7 },
  { a: 12, b: 8, action: Action.Subtract, expected: 4 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 3, b: 7, action: Action.Multiply, expected: 21 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 17, b: 1, action: Action.Divide, expected: 17 },
  { a: 40, b: 5, action: Action.Divide, expected: 8 },
  { a: 18, b: 3, action: Action.Divide, expected: 6 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 4, action: Action.Exponentiate, expected: 81 },
  { a: 1, b: 2, action: 'doSomething', expected: null },
  { a: 1, b: 2, action: 'never mind', expected: null },
  { a: 1, b: 2, action: 'nothing', expected: null },
  { a: 'Hello', b: true, action: Action.Add, expected: null },
  { a: [], b: {}, action: Action.Add, expected: null },
  { a: 1, b: undefined, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'simpleCalculator($a, $b, $action})',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
