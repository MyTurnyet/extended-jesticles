export * from './expectations';
export interface JesticleMatchers<R> {
  toHaveElementsWithText(...expectedText: string[]): R;
  toMatchInAnyOrder(expectedArray: any[]): R;
}
