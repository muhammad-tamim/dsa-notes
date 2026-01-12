const cache = new Map();

function expensiveCalculation(arr) {
    console.log("----------")
    const key = arr;

    if (cache.has(key)) {
        console.time("timeForCache")

        console.timeEnd("timeForCache")

        return cache.get(key);
    }

    console.time("timeForLoop")

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.timeEnd("timeForLoop")

    cache.set(key, sum);
    return sum;
}


const inputArr = []
const inputArr2 = []

for (let i = 0; i < 10000000; i++) {
    inputArr.push(i)
}
for (let i = 1; i < 10000000; i++) {
    inputArr2.push(i)
}

console.log(expensiveCalculation(inputArr))
console.log(expensiveCalculation(inputArr))

console.log(expensiveCalculation(inputArr2))

/*
----------
timeForLoop: 16.331ms
49999995000000
----------
timeForCache: 0.007ms
49999995000000
----------
timeForLoop: 12.169ms
49999995000000
*/