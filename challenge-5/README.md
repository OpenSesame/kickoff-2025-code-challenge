# Challenge 5 - Debugging Sprint

## Goal

Find all the bugs in the provided calculator application. You may modify `src/style.css`, `src/main.ts`, and `index.html` to achieve this goal. In addition to solving the known bugs, please refactor the code as you see fit for clarity and readability.

## Known bug list

- Handling Long Inputs: The code sets display.value to "Error" if the length exceeds 10, but doesn't handle clearing or resetting this state for further operations.

- Starting with an Operator: The code allows operators (+, -, \*, /) as the first character in the input, which is invalid for proper calculations.

- Chained Operators: The code does not prevent chaining operators (e.g., ++ or --), leading to invalid expressions.

- Division by Zero: It displays "Error" for division by zero but does not prevent the operation from occurring in the first place.

- Multiple Decimals: There's no check to prevent multiple decimals within the same number (e.g., 1.2.3).

- No Leading Zero Handling: Leading zeros (e.g., 01+2) are not sanitized, leading to potential invalid expressions.

- Unsafe eval: The use of eval without sanitization opens the code to security vulnerabilities.

- Keyboard Input Ignored: The code only supports button clicks but does not handle keyboard input, which limits usability.

- Error State Stuck: If the display shows "Error" or "Invalid", users cannot easily reset or clear the state without pressing the clear button.

- No Negative Numbers: The code does not allow entering negative numbers (e.g., -5).

- Lack of Result Truncation: The calculator does not truncate long results (e.g., 1/3 resulting in 0.333333333333).

- Missing Modulus Operator: There is no support for modulus (%) operations, a common mathematical function.

- No Parentheses Handling: Parentheses for grouping expressions are unsupported, limiting more complex calculations.

- Memory State Missing: There's no support for storing or recalling values in memory (e.g., MC, M+, MR).

- Buttons Active in Error States: All buttons remain active even when the display is in an error state, leading to potential confusing interactions.

## Judging Criteria

- Quality of bug fixes: 60%
- Code refactoring and cleanup: 40%
