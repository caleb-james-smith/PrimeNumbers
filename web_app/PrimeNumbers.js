import { getPrimesUsingDivisors } from "./PrimesUsingDivisors.js";
import { getPrimesUsingSieve } from "./PrimesUsingSieve.js";

const numberInput = document.getElementById("number-input");
const runButton = document.getElementById("run-button");
const output = document.getElementById("output");

function updateOutput() {
    // Remove all children (nodes) of output element.
    output.replaceChildren();

    const number = numberInput.value;
    if (number > 0) {
        let primes = getPrimesUsingDivisors(number);
        showPrimes(primes);
    }
}

function showPrimes(primes) {
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
