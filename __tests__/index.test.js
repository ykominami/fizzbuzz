const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
    it("returns FizzBuzz when value is divisible by 15", () => {
	expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
    });
    
    it("returns Fizz when value is divisible by 3", () => {
	expect(fizzbuzz(9)).toStrictEqual("Fizz");
    });
    
    it("returns Buzz when value is divisible by 5", () => {
	expect(fizzbuzz(10)).toStrictEqual("Buzz");
    });
    
    it("returns Buzz when value is divisible by 3 or 5", () => {
	expect(fizzbuzz(7)).toStrictEqual("7");
    });
});
