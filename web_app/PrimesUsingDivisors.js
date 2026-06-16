export function getPrimesUsingDivisors(n, verbose) {
    if (verbose) {
        console.log(`Running getPrimesUsingDivisors`);
        console.log(`n = ${n}; typeof n = ${typeof n}`);
    }
    
    const primes = [];
    
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            let num_divisors = getNumDivisors(i);
            if (verbose) {
                console.log(`n = ${n}, i = ${i}, num_divisors = ${num_divisors}`);
            }
            if (num_divisors === 2) {
                if (verbose) {
                    console.log(`Found prime: ${i}`);
                }
                primes.push(i);
            }
        }
    }

    if (verbose) {
        console.log(`primes length: ${primes.length}; primes: ${primes}`);
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
