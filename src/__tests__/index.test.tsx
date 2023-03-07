import * as React from 'react';
import {render} from '@testing-library/react';

const TestComponent = () => {
  return <div>foo!</div>;
};
describe('Greeter', () => {
  it('returns hello Paige', () => {
    const testComponent = render(<TestComponent/>);
    expect(testComponent).toHaveElementsWithText('foo!');
    expect(testComponent).toNotHaveElementsWithText('bar');
  });
});
