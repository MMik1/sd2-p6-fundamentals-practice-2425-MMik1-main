# Test Plan for Calculator Application
This test plan outlines the strategy and resources for testing the Calculator Application. 

## 1. Test Strategy
- (User) Acceptance Test - to ensure the entire application functions as expected.

## 3. Features to be Tested
- Correct calculation for each arithmetic operation (addition, subtraction, multiply and division).
- Handling of edge cases (division by zero).
- Proper error messages for invalid inputs (invalid input handling).

## 4. Test Cases

### Test Case 1: Addition
- **Objective**: Verify the addition functionality.
- **Preconditions**: Calculator is open and ready for input.
- **Steps**:
  1. Enter `5`.
  2. Press the `+` button.
  3. Enter `3`.
  4. Press the `=` button.
- **Expected Result**: The display shows `8`.
- **Actual Result**: .....

### Test Case 2: Subtraction
- **Objective**: Verify the subtraction functionality.
- **Preconditions**: Calculator is open and ready for input.
- **Steps**:
  1. Enter `9`.
  2. Press the `-` button.
  3. Enter `4`.
  4. Press the `=` button.
- **Expected Result**: The display shows `5`.
- **Actual Result**: .....

### Test Case 3: Multiplication
- **Objective**: Verify the multiplication functionality.
- **Preconditions**: Calculator is open and ready for input.
- **Steps**:
  1. Enter `7`.
  2. Press the `*` button.
  3. Enter `6`.
  4. Press the `=` button.
- **Expected Result**: The display shows `42`.
- **Actual Result**: .....

### Test Case 4: Division
- **Objective**: Verify the division functionality.
- **Preconditions**: Calculator is open and ready for input.
- **Steps**:
  1. Enter `8`.
  2. Press the `/` button.
  3. Enter `2`.
  4. Press the `=` button.
- **Expected Result**: The display shows `4`.
- **Actual Result**: .....

### Test Case 5: Division by Zero
- **Objective**: Ensure the calculator handles division by zero gracefully.
- **Preconditions**: Calculator is open and ready for input.
- **Steps**:
  1. Enter `8`.
  2. Press the `/` button.
  3. Enter `0`.
  4. Press the `=` button.
- **Expected Result**: The display shows an error message (e.g., "Cannot divide by zero").
- **Actual Result**: .....

### Test Case 6: Invalid Input Handling
- **Objective**: Verify that the calculator handles invalid inputs appropriately.
- **Preconditions**: Calculator is open and ready for input.
- **Steps**:
  1. Enter `abc`.
  2. Press the `=` button.
- **Expected Result**: The display shows an error message (e.g., "Invalid input").
- **Actual Result**: .....
