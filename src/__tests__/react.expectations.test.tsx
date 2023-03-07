import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

const TestComponent = () => {
  return (
    <div>
      foo!
      <div>bar</div>
      <div>
        <p>baz!</p>
        <p>something else</p>
      </div>
    </div>
  );
};
describe('react expectations', () => {
  let testComponent: RenderResult;
  beforeEach(() => {
    testComponent = render(<TestComponent />);
  });
  describe('toHaveElementsWithText', () => {
    it('has element with text', () => {
      expect(testComponent).toHaveElementsWithText('foo!');
    });
    it('has elements with texts', () => {
      expect(testComponent).toHaveElementsWithText('bar', 'baz!', 'something else');
    });
  });
  describe('toNotHaveElementsWithText', () => {
    it('does not have element with text', () => {
      expect(testComponent).toNotHaveElementsWithText('nonsense');
    });
    it('does not have elements with any texts', () => {
      expect(testComponent).toNotHaveElementsWithText('nonsense', 'baz', 'bar!');
    });
  });
});
