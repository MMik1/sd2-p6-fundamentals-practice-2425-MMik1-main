namespace PrimeApp;

public static class PrimeUtilities
{
    public static bool IsPrime(int number)
    {
        var isAPrime = true;

        if (number is 1 or 0)
        {
            isAPrime = false;
        }
        else
        {
            for (var i = 2; i <= number / 2; i++)
            {
                if (number % i != 0) continue;
                isAPrime = false;
                break;
            }
        }
        return isAPrime;
    }
    
    public static List<int> GetPrimesUpTo(int max)
    {
        var primes = new List<int>();
        for (int i = 2; i <= max; i++)
        {
            if (IsPrime(i)) primes.Add(i);
        }
        return primes;
    }
}