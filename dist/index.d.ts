import { RenderResult } from '@testing-library/react';

declare function createPassingResult(): jest.CustomMatcherResult;
declare function createFailingResult(message: string): jest.CustomMatcherResult;
declare function toHaveElementsWithText(screen: RenderResult, ...expectedText: string[]): jest.CustomMatcherResult;

declare function toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): jest.CustomMatcherResult;

interface JesticleMatchers<R> {
    toHaveElementsWithText(...expectedText: string[]): R;
    toMatchInAnyOrder(expectedArray: any[]): R;
}

export { type JesticleMatchers, createFailingResult, createPassingResult, toHaveElementsWithText, toMatchInAnyOrder };
