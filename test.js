function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let minIdx = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
    }

    console.log(arr)
}

selectionSort([7, 12, 9, 11, 3]) // [ 3, 7, 9, 11, 12 ]

/*
Time complexity: O(n^2)
Space complexity: O(1)
*/