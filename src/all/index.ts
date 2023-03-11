import { expect } from '@jest/globals';
import * as matchers from '../expectations';

if (expect === undefined) {
  throw new Error(
    "Unable to find Jest's global expect. " +
      'Please check you have added jest-extended correctly to your jest configuration. ' +
      'See https://github.com/jest-community/jest-extended#setup for help.',
  );
} else {
  expect.extend(matchers);
}
