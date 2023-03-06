import {Greeter} from '../index';

describe('Greeter', () => {
    it('returns hello Paige', () => {
        expect(Greeter("Paige")).toEqual("Hello Paige")
    });
});