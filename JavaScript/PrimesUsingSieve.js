export function getPrimesUsingSieve(n) {
    const sieve = computeSieve(n);
    const primes = collectPrimes(sieve);
    return primes;
}

function computeSieve(n) {
    const sieve = new Array(n + 1).fill(true);
    if (n < 2) {
        for (let i = 0; i < sieve.length; i++) {
            sieve[i] = false;
        }
        return sieve;
    }
    else {
        sieve[0] = false;
        sieve[1] = false;
        for (let i = 2; i < sieve.length; i++) {
            if (sieve[i]) {
                for (let j = 2 * i; j < sieve.length; j += i) {
                    sieve[j] = false;
                }
            }
        }
        return sieve;
    }
}

function collectPrimes(sieve) {
    const primes = [];
    for (let i = 0; i < sieve.length; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    return primes;
}
