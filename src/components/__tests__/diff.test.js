import { diff } from '../diff';

test("The Diff function should calculate the difference of two numbers", ()=> {
    const result = diff(5,2);

    expect(result).toBe(3);
})