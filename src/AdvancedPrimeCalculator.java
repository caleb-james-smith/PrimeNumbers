import java.util.ArrayList;

public class AdvancedPrimeCalculator {
	private ArrayList<Integer> primes;

	public AdvancedPrimeCalculator() {
		this.primes = new ArrayList<Integer>();
	}

	public ArrayList<Integer> getPrimes() {
		return primes;
	}
	
	public void setPrimes(ArrayList<Integer> newPrimes) {
		this.primes = newPrimes;
	}
	
	public void calculatePrimesToLimit(int limit) {
		ArrayList<Boolean> isPrimeArray = initializeIsPrimeArray(limit);
		isPrimeArray = computeIsPrimeArray(isPrimeArray);
		ArrayList<Integer> result = collectPrimes(isPrimeArray);
		setPrimes(result);
	}
	
	public ArrayList<Boolean> initializeIsPrimeArray(int limit) {
		ArrayList<Boolean> result = new ArrayList<Boolean>();
		for (int i = 0; i <= limit; i++) {
			result.add(true);
		}
		return result;
	}
	
	public ArrayList<Boolean> computeIsPrimeArray(ArrayList<Boolean> isPrimeArray) {
		isPrimeArray.set(0, false);
		isPrimeArray.set(1, false);
		for (int number = 2; number < isPrimeArray.size(); number++) {
			boolean numberIsPrime = isPrimeArray.get(number);
			if (numberIsPrime) {
				for (int multiple = 2 * number; multiple < isPrimeArray.size(); multiple += number) {
					isPrimeArray.set(multiple, false);
				}
			}
		}
		return isPrimeArray;
	}
	
	public ArrayList<Integer> collectPrimes(ArrayList<Boolean> isPrimeArray) {
		ArrayList<Integer> result = new ArrayList<Integer>();
		for (int number = 0; number < isPrimeArray.size(); number++) {
			boolean numberIsPrime = isPrimeArray.get(number);
			if (numberIsPrime) {
				result.add(number);
			}
		}
		return result;
	}
	
}
