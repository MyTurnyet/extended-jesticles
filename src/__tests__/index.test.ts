import {Greeter} from '../expectations';

describe('Greeter', () => {
    it('returns hello Paige', () => {
        expect(Greeter("Paige")).toEqual("Hello Paige")
    });
});