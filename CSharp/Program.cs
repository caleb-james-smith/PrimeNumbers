using System;
using System.Collections.Generic;
using System.Globalization;
class Program
{
    static void Main()
    {
        Console.WriteLine("Running prime number calculator...");
        
        Console.Write("Enter a positive integer: ");
        string input = Console.ReadLine();
        int maxNumber = int.Parse(input);

        // Method 1
        List<int> prime_numbers_v1 = GeneratePrimeNumbersBasic(maxNumber);
        Console.WriteLine("Method 1:");
        Console.WriteLine("Prime numbers:");
        PrintNumbers(prime_numbers_v1);
        Console.WriteLine($"Number of primes: {prime_numbers_v1.Count}");

        // Method 2
        List<int> prime_numbers_v2 = GeneratePrimeNumbersAdvanced(maxNumber);
        Console.WriteLine("Method 2:");
        Console.WriteLine("Prime numbers:");
        PrintNumbers(prime_numbers_v2);
        Console.WriteLine($"Number of primes: {prime_numbers_v2.Count}");

        Console.WriteLine("Done!");
    }

    // Generate list of prime numbers by checking if each number is prime
    static List<int> GeneratePrimeNumbersBasic(int maxNumber)
    {
        List<int> result = new List<int>();
        for (int i = 1; i <= maxNumber; i++)
        {
            if (IsPrime(i))
            {
                result.Add(i);
            }
        }
        return result;
    }

    // Determine if number is prime based on number of divisors
    static bool IsPrime(int number)
    {
        List<int> divisors = GetDivisors(number);
        if (divisors.Count == 2)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    static List<int> GetDivisors(int number)
    {
        List<int> result = new List<int>();
        for (int i = 1; i <= number; i++)
        {
            if (number % i == 0)
            {
                result.Add(i);
            }
        }
        return result;
    }

    // Generate list of primes using Sieve of Eratosthenes
    static List<int> GeneratePrimeNumbersAdvanced(int maxNumber)
    {
        List<bool> is_prime = CreateList(maxNumber + 1, true);
        RunSieve(is_prime);
        List<int> result = CollectPrimes(is_prime);
        return result;
    }

    static List<bool> CreateList(int length, bool value)
    {
        List<bool> result = new List<bool>();
        for (int i = 0; i < length; i++)
        {
            result.Add(value);
        }
        return result;
    }

    // Sieve of Eratosthenes
    static void RunSieve(List<bool> is_prime)
    {
        int length = is_prime.Count;
        if (length < 3)
        {
            return;
        }
        is_prime[0] = false;
        is_prime[1] = false;
        for (int i = 2; i < length; i += 1)
        {
            if (is_prime[i])
            {
                for (int j = i * 2; j < length; j += i)
                {
                    is_prime[j] = false;
                }
            }
        }
    }

    static List<int> CollectPrimes(List<bool> is_prime)
    {
        List<int> result = new List<int>();
        for (int i = 0; i < is_prime.Count; i++)
        {
            if (is_prime[i])
            {
                result.Add(i);
            }
        }
        return result;
    }

    static void PrintNumbers(List<int> numbers)
    {
        int i = 0;
        foreach (int n in numbers)
        {
            if (i == 0)
            {
                Console.Write($"{n}");
            }
            else
            {
                Console.Write($", {n}");
            }
            i += 1;
        }
        Console.WriteLine();
    }
}
