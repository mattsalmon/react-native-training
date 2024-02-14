
import {add} from "./add";

describe("Add function happy path", () => {
    test("Adding positives is successful", () =>{
        const result = add(1,3);
        expect(result).toBe(4);
    })
    test("Adding negatives is successful", () =>{
        const result = add(-1,-3);
        expect(result).toBe(-4);
    })
})

describe("Add function unhappy path", () => {
    test("Passing non-numbers will throw an error", () =>{
        expect(() => add(true,[])).toThrow();
    })
})