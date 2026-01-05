let arr = [5, 1, 4, 2]

for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Shift elements greater than key to the right
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    // Insert key in correct position
    arr[j + 1] = key;
}

console.log(arr) // 1, 2, 4, 5