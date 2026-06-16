export function getPrimesUsingDivisors(n) {
    console.log(`Running getPrimesUsingDivisors with n = ${n}`);
    let verbose = false;
    const primes = [];
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            let num_divisors = getNumDivisors(i);
            if (verbose) {
                console.log(`n = ${n}, i = ${i}, num_divisors = ${num_divisors}`);
            }
            if (num_divisors === 2) {
                primes.push(i);
            }
        }
    }
    return primes;
}

function getNumDivisors(n) {
    let num_divisors = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            num_divisors += 1;
        }
    }
    return num_divisors;
}
