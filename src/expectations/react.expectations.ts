import CustomMatcherResult = jest.CustomMatcherResult;
import { RenderResult } from '@testing-library/react';
import { expect } from '@jest/globals';

export function createPassingResult(): CustomMatcherResult {
  return {
    pass: true,
    message: () => '',
  };
}

export function createFailingResult(message: string): CustomMatcherResult {
  return {
    pass: false,
    message: () => message,
  };
}

expect.extend({
  toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): CustomMatcherResult {
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
  },
  toHaveElementsWithText(screen: RenderResult, ...expectedText: string[]): CustomMatcherResult {
    try {
      expectedText.forEach((text) => screen.getByText(text));
    } catch (e) {
      return createFailingResult('element was found with a given text');
    }
    return createPassingResult();
  },
});
