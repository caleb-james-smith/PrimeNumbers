import java.util.ArrayList;

public class Primes {

	public static void main(String[] args) {
		//long limit = 1_000;
		int limit = 1_000_000;
		
		//BasicPrimeCalculator calculator = new BasicPrimeCalculator();
		AdvancedPrimeCalculator calculator = new AdvancedPrimeCalculator();
		
		System.out.println("Calculating prime numbers up to a limit...");
		calculator.calculatePrimesToLimit(limit);
		
		//ArrayList<Long> primes = calculator.getPrimes();
		ArrayList<Integer> primes = calculator.getPrimes();
		long numPrimes = primes.size();
		
		System.out.println(" - limit: " + limit);
		//System.out.println(" - list of primes: " + primes);
		System.out.println(" - number of primes: " + numPrimes);
		System.out.println("Done!");
	}

}
