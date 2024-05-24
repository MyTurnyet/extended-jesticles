import { expect } from '@jest/globals';
import { createFailingResult, createPassingResult } from './react.expectations';


export function toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): jest.CustomMatcherResult {
  try {
    expectedArray.forEach((item) => {
      expect(actualArray).toContainEqual(item);
    });
  } catch (e) {
    return createFailingResult('Items in list are not the same');
  }
  try {
    expect(actualArray.length).toEqual(expectedArray.length);
  } catch (e) {
    return createFailingResult('Lengths do not match');
  }
  return createPassingResult();
}
