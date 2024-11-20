import {getPrimesUpTo, isPrime} from "./prime.js";

window.onload = function() {
    const nr = document.getElementById('nr');
    const result = document.getElementById('result');

    document.getElementById('checkPrime').addEventListener('click', function() {
        const n = parseInt(nr.value);
        if (isNaN(n)) {
            result.textContent = 'Please enter a number.';
        } else {
            result.textContent = isPrime(n) ? 'Prime' : 'Not prime';
        }
    });

    document.getElementById('getPrimes').addEventListener('click', function() {
        const n = parseInt(nr.value);
        if (isNaN(n)) {
            result.textContent = 'Please enter a number.';
        } else {
            const primes = getPrimesUpTo(n);
            result.textContent = primes.join(', ');
        }
    });
}
