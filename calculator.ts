const ROUNDING = 6;

/**
 * Evaluates a mathematical expression in Reverse Polish Notation (RPN) and returns the result.
 *
 * @param inputs An array of strings representing the RPN expression each element should be a number or a valid operators.
 * @throws {Error} If an invalid input is encountered during evaluation. This includes invalid operators, operands and unbalanced inputs.
 * @returns The numeric result of evaluating the expression.
 */
const calculate = (inputs: string[]) => {
  const stack: number[] = [];
  inputs.forEach((input) => {
    const parsedInput = parse(input);
    if (isOperator(input)) {
      const operandB = stack.pop();
      const operandA = stack.pop();
      const operationResult =
        parsedInput(operandA, operandB).toFixed(ROUNDING) * 1;
      stack.push(operationResult);
    } else if (isNaN(parsedInput)) throw new Error("Invalid input");
    else {
      stack.push(parsedInput);
    }
  });
  const result = stack.pop();
  // the final item in the stack should be a numeric value
  if (isNaN(result)) throw new Error("Invalid input");
  return result;
};

const parse = (input: string) => {
  if (Object.keys(arithmeticOperators).includes(input)) {
    return arithmeticOperators[input];
  } else {
    return parseFloat(input);
  }
};

const isOperator = (input: string) => {
  return !!arithmeticOperators[input];
};

const arithmeticOperators = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
} as const;

export { calculate, isOperator };
