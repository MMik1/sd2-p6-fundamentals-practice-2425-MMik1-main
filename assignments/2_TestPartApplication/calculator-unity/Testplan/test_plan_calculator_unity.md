# Test Plan for Calculator Application
This test plan outlines the strategy and resources for testing the Unity Calculator Application.

## 1. Test Strategy
- Unit Test - to verify the working of the class `Scripts/Calculator.cs` via Unit Testing.

## 2. Features to be Tested
- Correct calculation for each arithmetic operation (addition, subtraction, multiply and division).
- Handling of edge cases (division by zero).
- Proper error messages for invalid inputs (invalid input handling).

## 3. Test Cases (Unit Testing)
- The file `Tests/CalculatorTestScript.cs` contains the Unit Tests.
- In the README.md more information on how to start the tests.

> **Note:** The frontend of the Calculator App is NOT tested here. Only a part of the application.

> **Note:** The file `Tests/asmdef` is coupled to `Scripts/MyModule.asmdef`. This way the tests can see the scripts in the `Scripts` folder.

