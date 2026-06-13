const prompt = require('prompt-sync')();

function main () {
    console.log("It's time to generate some prime numbers!");
    let n = -1;
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Please enter a positive integer (n > 0): "));
    }
    console.log(`n = ${n}`);
}

if (require.main == module) {
    main();
}
