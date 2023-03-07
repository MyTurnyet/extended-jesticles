import { expect } from '@jest/globals';

if (expect === undefined) {
  throw new Error(
    "Unable to find Jest's global expect. " +
      'Please check you have added jest-extended correctly to your jest configuration. ' +
      'See https://github.com/jest-community/jest-extended#setup for help.',
  );
}
