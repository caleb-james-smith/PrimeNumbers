import { getPrimesUsingDivisors } from "./PrimesUsingDivisors.js";
import { getPrimesUsingSieve } from "./PrimesUsingSieve.js";

const numberInput = document.getElementById("number-input");
const methodSelect = document.getElementById("method-select");
const runButton = document.getElementById("run-button");
const results = document.getElementById("results");

function updateResults() {
    // Remove all children (nodes).
    results.replaceChildren();

    // Important: For number, convert string to integer using parseInt().
    const number = parseInt(numberInput.value);
    const method = methodSelect.value;
    let verbose = false;

    if (number > 0) {
        const start_time = performance.now();
        let primes = getPrimes(number, method, verbose);
        const end_time = performance.now();
        
        const runtime_ms = end_time - start_time;
        const runtime_sec = runtime_ms / 1000;
        
        showPrimes(number, method, runtime_sec, primes);
    }
}

function getPrimes(n, method, verbose) {
    let primes = []
    switch(method) {
        case "divisors":
            primes = getPrimesUsingDivisors(n, verbose);
            break;
        case "sieve":
            primes = getPrimesUsingSieve(n, verbose);
            break;
        default:
            primes = [];
            break;
    }
    return primes;
}

function showPrimes(n, method, runtime_sec, primes) {
    let text_number = `Number: ${n}`;
    addParagraph(text_number, results);

    let text_method = `Method: ${method}`;
    addParagraph(text_method, results);

    let text_runtime = `Runtime: ${runtime_sec.toFixed(6)} seconds`;
    addParagraph(text_runtime, results);
    
    let num_primes = primes.length;
    let text_num_primes = `Number of primes: ${num_primes}`;
    addParagraph(text_num_primes, results);
    
    if (num_primes > 0) {
        let text_primes = `Primes numbers: ${primes.join(", ")}`;
        addParagraph(text_primes, results);
    }
}

function addParagraph(message, element) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    element.appendChild(paragraph);
}

runButton.addEventListener("click", updateResults);
