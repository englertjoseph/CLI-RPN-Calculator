import * as readline from "readline";
import { calculate, isOperator } from "./calculator";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");

rl.prompt();

const stack = [];

rl.on("line", (input) => {
  if (input === "q") {
    rl.close();
  } else {
    try {
      const inputs = input.split(/\s+/);
      const shouldComputeResult = inputs.find((input) => isOperator(input));
      if (shouldComputeResult) {
        const result = calculate(stack.concat(inputs));
        console.log(result);
      } else {
        console.log(input);
      }
      stack.push(...inputs);
    } catch (e) {
      console.log(e.message);
    }
    rl.prompt();
  }
});

rl.on("close", () => {
  process.exit(0);
});

rl.on("SIGINT", () => {
  rl.close();
});
