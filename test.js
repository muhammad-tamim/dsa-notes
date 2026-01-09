const fs = require('fs');
// for codeforces
// const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

// for general input/output
const input = fs.readFileSync('input.txt', 'utf8').trim().split(/\s+/);

const N = Number(input[0]);

let A = [];
for (let i = 0; i < N; i++) {
    A.push(Number(input[i + 1]));
}

// Bubble Sort
for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
        if (A[j] > A[j + 1]) {
            let temp = A[j];
            A[j] = A[j + 1];
            A[j + 1] = temp;
        }
    }
}

console.log(A.join(' '));
