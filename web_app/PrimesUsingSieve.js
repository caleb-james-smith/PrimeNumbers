export function getPrimesUsingSieve(n) {
    let verbose = true;
    
    if (verbose) {
        console.log(`Running getPrimesUsingSieve`);
        console.log(`n = ${n}; typeof n = ${typeof n}`);
    }
    
    const sieve = computeSieve(n, verbose);
    if (verbose) {
        console.log(`Final sieve length: ${sieve.length}; sieve: ${sieve}`);
    }
    
    const primes = collectPrimes(sieve, verbose);
    if (verbose) {
        console.log(`primes length: ${primes.length}; primes: ${primes}`);
    }
    
    return primes;
}

function computeSieve(n, verbose) {
    if (verbose) {
        console.log(`n + 1 = ${n + 1}`);
    }
    
    const sieve = new Array(n + 1).fill(true);
    
    if (verbose) {
        console.log(`Initial sieve length: ${sieve.length}; sieve: ${sieve}`);
    }
    
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

function collectPrimes(sieve, verbose) {
    const primes = [];
    for (let i = 0; i < sieve.length; i++) {
        if (sieve[i]) {
            if (verbose) {
                console.log(`Found prime: ${i}`);
            }
            primes.push(i);
        }
    }
    return primes;
}
