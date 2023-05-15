# TypeScript Reverse Polish Notation Calculator

## Description

This TypeScript Reverse Polish Notation (RPN) calculator is a command-line application that evaluates arithmetic expressions in RPN format.
The calculator will prompt for input. Enter a space-separated list of numbers and operators in RPN format, and press enter to see the result.

To exit the calculator, enter `q` or `ctrl-d`.

Currently supported operators are `+ - * /`

e.g.

```
❯ npm start

> rpn-calculator@1.0.0 start
> tsc && node dist/app.js

> 5 5 5 8 + + -
-13
> 13 +
0
>
```

## How to run the code

1. Install dependencies:

   ```
   npm install
   ```

2. Run the calculator:

   ```
   npm start
   ```

3. Run tests:

   ```
   npm test
   ```

### Technical choices

- Computation of a given string expression is handled in [calculator.ts](./calculator.ts) separate from the input processing logic. This should allow for alternative interfaces e.g. WebSocket, file, or TCP socket to reuse the same functionality.

### Trade-offs

- The calculator is fixing the result of each operand to 6 decimal places, in certain expressions this could result in a loss of precision. If the results of the calculator needed to be highly accurate e.g. for handling money calculations it would worth incorporating a library to perform the calculations e.g. [decimal.js](https://www.npmjs.com/package/decimal.js)
