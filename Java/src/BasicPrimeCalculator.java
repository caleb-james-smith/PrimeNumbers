import java.util.ArrayList;

public class BasicPrimeCalculator {
	private ArrayList<Long> primes;
	
	public BasicPrimeCalculator() {
		this.primes = new ArrayList<Long>();
	}

	public ArrayList<Long> getPrimes() {
		return primes;
	}
	
	public void setPrimes(ArrayList<Long> newPrimes) {
		this.primes = newPrimes;
	}
	
	public void calculatePrimesToLimit(long limit) {
		ArrayList<Long> result = new ArrayList<Long>();
		for (long number = 1; number <= limit; number++) {
			if (isPrime(number)) {
				result.add(number);
			}
		}
		setPrimes(result);
	}

	public boolean isPrime(long number) {
		long numDivisors = getNumDivisors(number);
		if (numDivisors == 2) {
			return true;
		} else {
			return false;
		}
	}
	
	public long getNumDivisors(long number) {
		long result = 0;
		for (long candidate = 1; candidate <= number; candidate++) {
			if (cadidateIsDivisorOfNumber(candidate, number)) {
				result += 1;
			}
		}
		return result;
	}
	
	public boolean cadidateIsDivisorOfNumber(long candidate, long number) {
		if (number % candidate == 0) {
			return true;
		} else {
			return false;
		}
	}

}
