import { calculate } from "../calculator";

describe("calculate", () => {
  describe("example minimum inputs", () => {
    it("passes example 1", () => {
      expect(calculate(["5", "8", "+"])).toEqual(13);
    });

    it("passes example 2", () => {
      expect(calculate(["5", "5", "5", "8", "+", "+", "-", "13", "+"])).toEqual(
        0.0
      );
    });

    it("passes example 3", () => {
      expect(calculate(["-3", "-2", "*", "5", "+"])).toEqual(11.0);
    });

    it("passes example 4", () => {
      expect(calculate(["5", "9", "1", "-", "/"])).toEqual(0.625);
    });
  });

  describe("invalid inputs", () => {
    it("throws an error when given an invalid input", () => {
      expect(() => calculate(["5", "a", "+"])).toThrowError("Invalid input");
    });

    it("throws an error when given an invalid operator", () => {
      expect(() => calculate(["5", "a", "+"])).toThrowError("Invalid input");
    });

    it("throws an error when given unbalanced inputs", () => {
      expect(() => calculate(["5", "*"])).toThrowError("Invalid input");
    });
  });

  describe("integer inputs", () => {
    it("performs addition", () => {
      expect(calculate(["5", "8", "+"])).toEqual(13);
    });

    it("performs subtraction", () => {
      expect(calculate(["3", "5", "-"])).toEqual(-2);
    });

    it("performs multiplication", () => {
      expect(calculate(["3", "5", "*"])).toEqual(15);
    });

    it("performs division", () => {
      expect(calculate(["3", "5", "/"])).toEqual(0.6);
    });
  });

  describe("float inputs", () => {
    it("performs addition", () => {
      expect(calculate(["3.5", "5.5", "+"])).toEqual(9);
    });

    it("performs subtraction", () => {
      expect(calculate(["3.5", "5.5", "-"])).toEqual(-2);
    });

    it("performs multiplication", () => {
      expect(calculate(["3.5", "5.5", "*"])).toEqual(19.25);
    });

    it("performs division", () => {
      expect(calculate(["5.5", "2.5", "/"])).toEqual(2.2);
    });

    it("handles rounding errors", () => {
      expect(calculate(["0.1", "0.2", "+"])).toEqual(0.3);
    });
  });

  describe("rounding", () => {
    it("rounds to 6 decimal places", () => {
      expect(calculate(["2", "3", "/"])).toEqual(0.666667);
    });

    it("does not include trailing zeros", () => {
      expect(calculate(["0.1", "0.2", "+"])).toEqual(0.3);
    });
  });

  describe("combining operations", () => {
    it("performs addition and subtraction", () => {
      expect(calculate(["3", "5", "2", "+", "-"])).toEqual(-4);
    });

    it("performs multiplication and division", () => {
      expect(calculate(["3", "5", "2", "*", "/"])).toEqual(0.3);
    });

    it("performs addition, subtraction, multiplication, and division", () => {
      expect(calculate(["3", "5", "2", "+", "-", "4", "*", "4", "/"])).toEqual(
        -4
      );
    });
  });
});
