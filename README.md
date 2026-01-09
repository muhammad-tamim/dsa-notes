<h1 align="center">Data Structure and Algorithms Notes</h1>

- [Introduction:](#introduction)
  - [Big-O Notation](#big-o-notation)
    - [Rules of Big-O Notation:](#rules-of-big-o-notation)
  - [Time Complexity](#time-complexity)
    - [Time Complexity Growth Comparison:](#time-complexity-growth-comparison)
- [Part 1: Data Structure](#part-1-data-structure)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Linked List](#linked-list)
  - [Graph](#graph)
- [Part 2: Algorithms](#part-2-algorithms)
  - [Time and Space Complexity](#time-and-space-complexity)
  - [Searching](#searching)
  - [Sorting:](#sorting)
    - [Bubble Sort:](#bubble-sort)
      - [How bubble sort works:](#how-bubble-sort-works)
      - [Time \& Space Complexity (Bubble Sort)](#time--space-complexity-bubble-sort)
    - [Selection Sort:](#selection-sort)
      - [How selection sort works:](#how-selection-sort-works)
      - [Time \& Space Complexity (Bubble Sort)](#time--space-complexity-bubble-sort-1)
    - [Insertion Sort:](#insertion-sort)
      - [How insertion sort works:](#how-insertion-sort-works)
      - [Time \& Space Complexity:](#time--space-complexity)
    - [Quick Sort:](#quick-sort)
      - [How insertion sort works:](#how-insertion-sort-works-1)
      - [Time \& Space Complexity](#time--space-complexity-1)
    - [Marge Sort:](#marge-sort)
      - [Time \& Space Complexity:](#time--space-complexity-2)


# Introduction: 
## Big-O Notation
Big-O notation is a mathematical way to describe the worst-case time or space complexity of an algorithm as the input size grows.

Common Notations Complexities(Best --> Worse):

| Big-O      | Name              | Meaning                                                             | Simple Example                                  |
| ---------- | ----------------- | ------------------------------------------------------------------- | ----------------------------------------------- |
| O(1)       | Constant Time     | No loop, no recursion, fixed number of operations.                  | Array element access through  index             |
| O(log n)   | Logarithmic Time  | Each step cuts the input size in half.                              | divide by 2, Binary search / tree traversal     |
| O(n)       | Linear Time       | One loop that goes through the input once.                          | Traversing arrays                               |
| O(n log n) | Linearithmic Time | Divide the problem, then loop through all elements (divide + loop). | Merge sort, Quick sort, Heap sort, builtin sort |
| O(n²)      | Quadratic Time    | A loop inside another loop over the same input.                     | Bubble & Selection sort, or any double loop     |
| O(n3)      | Cubic Time        | Three nested loops over the same input.                             |                                                 |
| O(2ⁿ)      | Exponential Time  | Recursive function where each call makes 2 or more calls.           | find Fibonacci using recursion                  |
| O(n!)      | Factorial Time    | All possible permutations or trying every possible ordering.        |                                                 |

![image](./images/big-o-notation-graph.jpg)

### Rules of Big-O Notation:
- Ignore Constants:

```
O(2n)   → O(n)
O(100)  → O(1)
O(5n²)  → O(n²)
```

- Keep the largest term: 

```
O(n² + n + 1) → O(n²)
O(n log n + n) → O(n log n)
O(n² + 10n + 500) → O(n²)
O(n + n + 500) → O(n)
```

- Always calculate for worse case:

```js
const arr = [10, 5, 3, 6, 4]

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 10){
        console.log(arr[i])
        break
    }
}
```
here, 
  - Best case: O(1), means 10 can found first index
  - Average case: O(n), Element can be anywhere
  - Worse Case: O(n), Element is last or not found

- Sequential Adding: 

```js
for (...) {}   // O(n)
for (...) {}   // O(n)

O(n) + O(n) = O(2n) 
            = O(n)
```

- Nested Statements Multiply: 

```js
for (...) {        // O(n)
  for (...) {      // O(n)
  }
}

O(n × n) = O(n²)
```

## Time Complexity
Time complexity measures how the run time of an algorithm grows as the input size (n) grows.

Steps to Calculate Time Complexity: 
- Identify basic operations
- Look at loops
- Look at loops
- Ignore constants and less dominant terms
- Consider worst-case by default

example 1: 
```js
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```
Single loop over n elements, so Time Complexity: O(n)

example 2: 

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

```
Outer loop: n, 
Inner loop: n, 
Multiply → n × n

so Time Complexity: O(n²)
```

example 3: 

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

```
Recursive call decreases n by 1 each time

Number of calls = n
Time Complexity: O(n)
```

### Time Complexity Growth Comparison:

| Big-O          | n = 10 | n = 100 | n = 1,000 | n = 100,000 | n = 10,000,000 | n = 1,000,000,000 |
| -------------- | ------ | ------- | --------- | ----------- | -------------- | ----------------- |
| **O(1)**       | 😄      | 😄       | 😄         | 😄           | 😄              | 😄                 |
| **O(log n)**   | 😄      | 😄       | 😄         | 😄           | 😄              | 😄                 |
| **O(n)**       | 😄      | 😄       | 🙂         | 🙂           | 😐              | 😵                 |
| **O(n log n)** | 🙂      | 🙂       | 😐         | 😵           | 💀              | ☠️                 |
| **O(n²)**      | 😐      | 😵       | 💀         | ☠️           | ☠️              | ☠️                 |
| **O(2ⁿ)**      | 💀      | 💀       | ☠️         | ☠️           | ☠️              | ☠️                 |
| **O(n!)**      | ☠️      | ☠️       | ☠️         | ☠️           | ☠️              | ☠️                 |



# Part 1: Data Structure
## Stack 

## Queue

## Linked List

## Graph

# Part 2: Algorithms
## Time and Space Complexity
## Searching 
## Sorting:
Sorting means arranging elements in:
- Ascending order → 1 2 3 4
- Descending order → 4 3 2 1

### Bubble Sort:
Bubble sort repeatedly swaps adjacent elements if they are in the wrong order. After each pass, the largest element “bubbles” to the end.

```js 
let arr = [5, 1, 4, 2]

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // swap
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr); // [1, 2, 4, 5]
```

#### How bubble sort works: 

`let arr = [5, 1, 4, 2]`

Pass 1: i = 0; i < 3:

1st largest number 5 will move to the end

| j   | condition    | Compare      | Array State(after swap) |
| --- | ------------ | ------------ | ----------------------- |
| 0   | 0 < 3 = true | 5 > 1 = true | [1, 5, 4, 2]            |
| 1   | 1 < 3 = true | 5 > 4 = true | [1, 4, 5, 2]            |
| 2   | 2 < 3 = true | 5 > 2 = true | [1, 4, 2, 5]            |

Pass 2: i = 1; i < 3:

2nd largest number 4 moved to its position before 5:

| j   | condition    | Compare       | Array State(after swap)               |
| --- | ------------ | ------------- | ------------------------------------- |
| 0   | 0 < 2 = true | 1 > 4 = false |                                       |
| 1   | 1 < 2 = true | 4 > 2 = true  | [1, 2, 4, 5] (Sorted ascending order) |

Pass 3: i = 2; i < 3:

| j   | condition    | Compare       | Array State |
| --- | ------------ | ------------- | ----------- |
| 0   | 0 < 1 = true | 1 > 2 = false |             |



#### Time & Space Complexity (Bubble Sort)

| Case    | Time                       |
| ------- | -------------------------- |
| Best    | O(n) *(optimized version)* |
| Average | O(n²)                      |
| Worst   | O(n²)                      |
| Space   | O(1)                       |

### Selection Sort:
Selection sort finds the smallest element and places it at the correct position.

```js 
let arr = [5, 1, 4, 2]

for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr); // [1, 2, 4, 5]
```

#### How selection sort works: 

`let arr = [5, 1, 4, 2]`

Pass 1: i = 0; 0 < 3; minIndex = 0:

1st smallest number 1 will move to the first index

| j   | condition    | Compare       | minIndex |
| --- | ------------ | ------------- | -------- |
| 1   | 1 < 4 = true | 1 < 5 = true  | 1        |
| 2   | 2 < 4 = true | 4 < 1 = false |          |
| 3   | 3 < 4 = true | 2 < 1 = false |          |

Swap: 
[5, 1, 4, 2] --> 5 swap 1 --> [1, 5, 4, 2]

Pass 2: i = 1; 1 < 3; minIndex = 1:

2nd smallest number 2 will move to second index

| j   | condition    | Compare      | minIndex |
| --- | ------------ | ------------ | -------- |
| 2   | 2 < 4 = true | 4 < 5 = true | 2        |
| 3   | 3 < 4 = true | 2 < 4 = true | 3        |

Swap: 
[1, 5, 4, 2] --> 5 swap 2 --> [1, 2, 4, 5] (Sorted ascending order)

pass 3: i = 2; 2 < 3; minIndex = 2: 


| j   | condition    | Compare       | minIndex |
| --- | ------------ | ------------- | -------- |
| 3   | 3 < 4 = true | 5 < 4 = false |          |

Swap: 
[1, 2, 4, 5] --> 4 swap 4 -->[1, 2, 4, 5] 

#### Time & Space Complexity (Bubble Sort)

| Case    | Time  |
| ------- | ----- |
| Best    | O(n²) |
| Average | O(n²) |
| Worst   | O(n²) |
| Space   | O(1)  |

### Insertion Sort:
Build a sorted part of the array one element at a time. Take the next element and insert it in its correct position in the already sorted part.

```js
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
```
 
#### How insertion sort works: 

`let arr = [5, 1, 4, 2]`

**Pass 1:** i = 1; i < 4: 

```js
key = arr[i] = arr[1] = 1
j = i - 1 = 0
```

| j   | j >= 0 && arr[j] > key  | ar[j + 1] = arr[j] | Array State  | j-- |
| --- | ----------------------- | ------------------ | ------------ | --- |
| 0   | 0 >= 0 && 5 > 1 == true | arr[1] = arr[0]    | [5, 5, 4, 2] | -1  |

```js
arr[j + 1] = key --> arr[0] = 1 -->  `[1, 5, 4, 2]`
```

**Pass 2:** i++ --> i = 2; i < 4: 

```js
key = arr[i] = arr[2] = 4
j = i - 1 = 1
```

| j   | j >= 0 && arr[j] > key  | ar[j + 1] = arr[j] | Array State  | j-- |
| --- | ----------------------- | ------------------ | ------------ | --- |
| 1   | 1 >= 0 && 5 > 4 → true  | arr[2] = arr[1]    | [1, 5, 5, 2] | 0   |
| 0   | 0 >= 0 && 1 > 4 → false |                    |              |     |

```js
arr[j + 1] = key --> arr[1] = 4 --> `[1, 4, 5, 2]`
```

**Pass 3:** i++ --> i = 3; i < 4: 

```js
key = arr[i] = arr[3] = 2
j = i - 1 = 2
```

| j   | j >= 0 && arr[j] > key  | ar[j + 1] = arr[j] | Array State  | j-- |
| --- | ----------------------- | ------------------ | ------------ | --- |
| 2   | 2 >= 0 && 5 > 2 → true  | arr[3] = arr[2]    | [1, 4, 5, 5] | 1   |
| 1   | 1 >= 0 && 4 > 2 → true  | arr[2] = arr[1]    | [1, 4, 4, 5] | 0   |
| 0   | 0 >= 0 && 1 > 2 → false |                    |              |     |

```js
arr[j + 1] = key --> arr[1] = 2 --> `[1, 2, 4, 5]`
```

#### Time & Space Complexity:

| Case                   | Time  | Space |
| ---------------------- | ----- | ----- |
| Best (already sorted)  | O(n)  | O(1)  |
| Average                | O(n²) | O(1)  |
| Worst (reverse sorted) | O(n²) | O(1)  |


### Quick Sort:
Pick a pivot element and place it in its correct position. All smaller elements go left, larger elements go right. Repeat this process recursively.

```js
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2]));
```

#### How insertion sort works:
#### Time & Space Complexity
| Case    | Time       |
| ------- | ---------- |
| Best    | O(n log n) |
| Average | O(n log n) |
| Worst   | O(n²)      |
| Space   | O(log n)   |

Worst case happens when array is already sorted and bad pivot is chosen.

### Marge Sort: 
Split the array into halves until each part has one element, then merge them back in sorted order.

```js
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 3, 8, 4]));
```

#### Time & Space Complexity:

| Case    | Time       |
| ------- | ---------- |
| Best    | O(n log n) |
| Average | O(n log n) |
| Worst   | O(n log n) |
| Space   | O(n)       |
