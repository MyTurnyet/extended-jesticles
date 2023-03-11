import CustomMatcherResult = jest.CustomMatcherResult;
import { RenderResult } from '@testing-library/react';

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

export function toHaveElementsWithText(screen: RenderResult, ...expectedText: string[]): CustomMatcherResult {
  try {
    expectedText.forEach((text) => screen.getByText(text));
  } catch (e) {
    return createFailingResult('element was found with a given text');
  }
  return createPassingResult();
}
