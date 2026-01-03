<h1 align="center">Data Structure and Algorithms Notes</h1>

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

| j   | condition | Compare | Swap? | Array State  |
| --- | --------- | ------- | ----- | ------------ |
| 0   | 0 < 3     | 5 > 1   | true  | [1, 5, 4, 2] |
| 1   | 1 < 3     | 5 > 4   | true  | [1, 4, 5, 2] |
| 2   | 2 < 3     | 5 > 2   | true  | [1, 4, 2, 5] |

Pass 2 i = 1; i < 3:

2nd largest number 4 moved to its position before 5:

| j   | condition | Compare | Swap? | Array State                           |
| --- | --------- | ------- | ----- | ------------------------------------- |
| 0   | 0 < 2     | 1 > 4   | false |                                       |
| 1   | 1 < 2     | 4 > 2   | true  | [1, 2, 4, 5] (Sorted ascending order) |

Pass 3 i = 2; i < 3:

| j   | condition | Compare | Swap? | Array State |
| --- | --------- | ------- | ----- | ----------- |
| 0   | 0 < 1     | 1 > 2   | false |             |



#### Time & Space Complexity (Bubble Sort)

| Case    | Time                       |
| ------- | -------------------------- |
| Best    | O(n) *(optimized version)* |
| Average | O(n²)                      |
| Worst   | O(n²)                      |
| Space   | O(1)                       |
