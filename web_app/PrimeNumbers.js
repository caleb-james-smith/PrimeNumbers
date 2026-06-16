import { getPrimesUsingDivisors } from "./PrimesUsingDivisors.js";
import { getPrimesUsingSieve } from "./PrimesUsingSieve.js";

const numberInput = document.getElementById("number-input");
const methodSelect = document.getElementById("method-select");
const runButton = document.getElementById("run-button");
const output = document.getElementById("output");

function updateOutput() {
    // Remove all children (nodes) of output element.
    output.replaceChildren();

    const number = parseInt(numberInput.value);
    const method = methodSelect.value;
    if (number > 0) {
        let primes = getPrimes(number, method);
        showPrimes(number, method, primes);
    }
}

function getPrimes(n, method) {
    let primes = []
    switch(method) {
        case "divisors":
            primes = getPrimesUsingDivisors(n);
            break;
        case "sieve":
            primes = getPrimesUsingSieve(n);
            break;
        default:
            primes = [];
            break;
    }
    return primes;
}

function showPrimes(n, method, primes) {
    let text_n = `n = ${n}`;
    addParagraphToOutput(text_n);

    let text_method = `Method: ${method}`;
    addParagraphToOutput(text_method);
    
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
