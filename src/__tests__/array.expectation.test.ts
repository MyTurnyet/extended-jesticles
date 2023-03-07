describe('Array expectations', () => {
  describe('matches', () => {
    it('if empty', () => {
      const actualList: number[] = [];
      const expectedList: number[] = [];
      expect(actualList).toMatchInAnyOrder(expectedList);
    });
    it('in same order', () => {
      const actualList: number[] = [1, 2, 3, 4];
      const expectedList: number[] = [1, 2, 3, 4];
      expect(actualList).toMatchInAnyOrder(expectedList);
    });
    it('in mixed order', () => {
      const actualList: number[] = [1, 2, 3, 4];
      const expectedList: number[] = [4, 2, 3, 1];
      expect(actualList).toMatchInAnyOrder(expectedList);
    });
  });
  describe('does not match', () => {
    it('if lists arent the same', () => {
      const actualList: number[] = [1, 2, 3, 4];
      const expectedList: number[] = [1,2];
      expect(actualList).not.toMatchInAnyOrder(expectedList);

    });
  });
});
