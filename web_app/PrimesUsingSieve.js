export function getPrimesUsingSieve(n) {
    console.log(`Running getPrimesUsingSieve with n = ${n}`);
    const sieve = computeSieve(n);
    console.log(`sieve length: ${sieve.length}; sieve: ${sieve}`);
    const primes = collectPrimes(sieve);
    console.log(`primes length: ${primes.length}; primes: ${primes}`);
    return primes;
}

function computeSieve(n) {
    console.log(`Running computeSieve with n = ${n}`);
    console.log(`n = ${n}`);
    console.log(`typeof n = ${typeof n}`);
    console.log(`n + 1 = ${n + 1}`);
    const sieve = new Array(n + 1).fill(true);
    console.log(`Initial sieve length: ${sieve.length}; sieve: ${sieve}`);
    if (n < 2) {
        console.log(`n = ${n}; (n < 2): true`);
        for (let i = 0; i < sieve.length; i++) {
            sieve[i] = false;
        }
        return sieve;
    }
    else {
        console.log(`n = ${n}; (n < 2): false`);
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
            console.log(`Found prime: ${i}`);
            primes.push(i);
        }
    }
    return primes;
}
