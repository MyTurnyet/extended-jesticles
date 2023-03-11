export * from './expectations';
export interface JesticleMatchers<R> {
  //react
  toHaveElementsWithText(...expectedText: string[]): R;
  //arrays
  toMatchInAnyOrder(expectedArray: any[]): R;
}