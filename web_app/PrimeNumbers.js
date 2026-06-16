import { getPrimesUsingDivisors } from "./PrimesUsingDivisors.js";
import { getPrimesUsingSieve } from "./PrimesUsingSieve.js";

const numberInput = document.getElementById("number-input");
const methodSelect = document.getElementById("method-select");
const runButton = document.getElementById("run-button");
const output = document.getElementById("output");

function updateOutput() {
    // Remove all children (nodes) of output element.
    output.replaceChildren();

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
    let text_n = `n = ${n}`;
    addParagraphToOutput(text_n);

    let text_method = `Method: ${method}`;
    addParagraphToOutput(text_method);

    let text_runtime = `Runtime: ${runtime_sec.toFixed(6)} seconds`;
    addParagraphToOutput(text_runtime);
    
    let num_primes = primes.length;
    let text_num_primes = `Number of primes: ${num_primes}`;
    addParagraphToOutput(text_num_primes);
    
    if (num_primes > 0) {
        let text_primes = `Primes: ${primes.join(", ")}`;
        addParagraphToOutput(text_primes);
    }
}

function addParagraphToOutput(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

runButton.addEventListener("click", updateOutput);
