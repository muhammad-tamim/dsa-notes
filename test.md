### Selection Sort: 
The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

![image](./assets/gifs/part-2-algorithms/sorting/selection-sort/selection-sort-1.gif)

**How it works:**
- Go through the array to find the lowest value.
- Move the lowest value to the front of the unsorted part of the array.
- Go through the array again as many times as there are values in the array.

**Implementation:**

```js
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
```

- Time complexity: O(n^2)
- Space complexity: O(1)

![image](./assets/gifs/part-2-algorithms/sorting/selection-sort/selection-sort-2.gif)

![image](./assets/images/part-2-algorithms/sorting/selection-sort/selection-sort-1.png)
![image](./assets/images/part-2-algorithms/sorting/selection-sort/selection-sort-2.png)
![image](./assets/images/part-2-algorithms/sorting/selection-sort/selection-sort-3.png)
![image](./assets/images/part-2-algorithms/sorting/selection-sort/selection-sort-4.png)