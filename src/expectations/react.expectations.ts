import { RenderResult } from '@testing-library/react';

export function createPassingResult(): jest.CustomMatcherResult {
  return {
    pass: true,
    message: () => '',
  };
}

export function createFailingResult(message: string): jest.CustomMatcherResult {
  return {
    pass: false,
    message: () => message,
  };
}

export function toHaveElementsWithText(screen: RenderResult, ...expectedText: string[]): jest.CustomMatcherResult {
  try {
    expectedText.forEach((text) => screen.getByText(text));
  } catch (e) {
    return createFailingResult('element was found with a given text');
  }
  return createPassingResult();
}
