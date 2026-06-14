import { getPrimesUsingDivisors } from "./PrimesUsingDivisors.js";
import { getPrimesUsingSieve } from "./PrimesUsingSieve.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

function main () {
    console.log("It's time to generate some prime numbers!");
    let n = -1;
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Please enter a positive integer (n > 0): "));
    }
    console.log(`n = ${n}`);
    // let primes = getPrimesUsingDivisors(n);
    let primes = getPrimesUsingSieve(n);
    printPrimes(primes);
}

function printPrimes(primes) {
    let num_primes = primes.length;
    console.log(`Number of primes: ${num_primes}`);
    if (num_primes > 0) {
        console.log(`Primes: ${primes.join(", ")}`);
    }
}

main();
