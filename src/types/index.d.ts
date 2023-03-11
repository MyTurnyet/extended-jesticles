declare module 'extended-jesticles'{
  export interface JesticleMatchers<R> {
    //react
    toHaveElementsWithText(...expectedText: string[]): R;
    //arrays
    toMatchInAnyOrder(expectedArray: any[]): R;
  }
}
