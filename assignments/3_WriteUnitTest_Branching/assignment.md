# Assignment - Create a Unit Test for the Calculator Application
Let's assume that you are a developer, 
and you have been assigned to write a new unit test for an application that can
find prime numbers or tell if a number is prime or not.

> A prime number is a number that is greater than 1 and divided by 1 or itself only.

> Make teams of 2 people.

> Game developers: See C# Console Application
> Web developers: See Javascript Application

## C# Console Application
1. Open `c_sharp/PrimeApp/PrimeApp.sln` in Visual Studio or IntelliJ Rider.
2. Run the application to understand how it works.
3. Close the application.
4. Open `c_sharp/TestPrimeApp/TestPrimeApp.sln` in Visual Studio or IntelliJ Rider.
5. Have a look at the `Solution Explorer` to see the structure of the project.
6. You will see two projects: `TestPrime` and `TestPrimeApp`. The first project is the application, and the second project is the test project that contains some unit tests.
7. The unit test are written in the file `UnitTest1.cs`.
8. To run the tests, right-click on the project `TestPrimeApp` and select `Run Tests`.
9. The tests will run, and you will see the results in the `Test Explorer`.
10. The tests should pass. If they don't, you need to fix the tests.
11. Create a new branch with the name `newtests`.
12. Work in that new branch.
13. Write a new test in the file `UnitTest2.cs` to test the function `GetPrimesUpTo(int number)` in the class `PrimeUtilities`.
14. Come up with test cases that you think are relevant. 
15. Rerun the tests to see if your new test passes. 
16. If everything works, merge the branch `newtests` into the main branch. 
17. Push the results.

## Javascript Application
1. Open `javascript` project in WebStorm.
2. Run `index.html` to understand how it works.
3. Install vitest testing framework via the Terminal: `npm install -D vitest`. (Why the -D option?)
4. To run the tests, open the Terminal and use this command `npm test`. 
5. Create a new branch with the name `newtests`. 
6. Work in that new branch. 
7. Write unit tests for the isPrime and getPrimes functions in `test_prime.js`. 
8. If everything works, merge the branch `newtests` into the main branch. 
9. Push the results.
