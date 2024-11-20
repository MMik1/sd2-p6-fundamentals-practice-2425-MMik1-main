using PrimeApp;

Console.WriteLine("Enter a number to check if it is a prime number");

while (true)
{
    Console.WriteLine("Choose an option:");
    Console.WriteLine("1. Check if a number is a prime");
    Console.WriteLine("2. Get all primes up to a certain number");
    Console.WriteLine("Type 'exit' to quit");

    var choice = Console.ReadLine();

    if (choice == "exit" || choice == null || int.Parse(choice) > 2)
    {
        break;
    }

    // Get the number
    Console.WriteLine("Enter a number");
    var input = Console.ReadLine();
    if (input is "exit" or null)
    {
        break;
    }

    if (int.TryParse(choice, out var result))
    {
        break;
    }
    
    var number = int.Parse(input);
    
    switch (choice)
    {
        case "1":
            bool isPrime = PrimeUtilities.IsPrime(number);
            Console.WriteLine(isPrime ? $"{number} is a prime number" : $"{number} is not a prime number");
            break;
        case "2":
            var primes = PrimeUtilities.GetPrimesUpTo(number);
            Console.WriteLine(String.Join(", ",primes));
            break;
        default:
            Console.WriteLine("Invalid option. Please choose 1 or 2.");
            break;
    }
}