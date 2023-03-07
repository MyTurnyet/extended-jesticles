import '@jest/globals';

declare global {
  namespace jest {
    interface Matchers<R> {
      //react
      toHaveElementsWithText(...expectedText: string[]): R;
      //arrays
      toMatchInAnyOrder(expectedArray: any[]):R;
    }
  }
}
