import '@jest/globals';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveElementsWithText(...expectedText: string[]): R;

      toNotHaveElementsWithText(...expectedText: string[]): R;
    }
  }
}
