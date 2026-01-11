<h1 align="center">Data Structure and Algorithms Notes</h1>

- [Introduction:](#introduction)
  - [Big-O Notation](#big-o-notation)
    - [Rules of Big-O Notation:](#rules-of-big-o-notation)
  - [Time Complexity](#time-complexity)
    - [Time Complexity Growth Comparison:](#time-complexity-growth-comparison)
    - [Constraints of Coding Problem Set:](#constraints-of-coding-problem-set)
    - [How to check code real time using js:](#how-to-check-code-real-time-using-js)
    - [Lookup Table:](#lookup-table)
  - [Space Complexity](#space-complexity)
- [Part 1: Data Structure](#part-1-data-structure)
  - [Array](#array)
  - [String](#string)
  - [Hash Table](#hash-table)
    - [set:](#set)
      - [How to create a set:](#how-to-create-a-set)
      - [Iterating:](#iterating)
      - [Common set methods and properties:](#common-set-methods-and-properties)
        - [methods:](#methods)
        - [properties:](#properties)
      - [Logic methods:](#logic-methods)
      - [Converting array to set and set to array:](#converting-array-to-set-and-set-to-array)
      - [Example:](#example)
    - [map](#map)
      - [Difference between Objects and Maps](#difference-between-objects-and-maps)
      - [How to Create a Map:](#how-to-create-a-map)
      - [Iterating:](#iterating-1)
      - [Common map methods and properties:](#common-map-methods-and-properties)
        - [Methods:](#methods-1)
        - [Properties:](#properties-1)
  - [Stack:](#stack)
  - [Queue:](#queue)
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

| Big-O      | Name              | Meaning                                                                                  | Simple Example                                              |
| ---------- | ----------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| O(1)       | Constant Time     | Number of operations/steps does not grow with input size                                 | Accessing arr[5], sum of 1 to N using formula               |
| O(log n)   | Logarithmic Time  | Each step cuts the input size in half.                                                   | Binary search                                               |
| O(n)       | Linear Time       | One loop for traversing input or recursion where each call reduces the problem size by 1 | Loop over array, find factorial by recursion                |
| O(n log n) | Linearithmic Time | O(n log n) = O(n) × O(log n)                                                             | Merge sort, Quick sort(avg), Heap sort, Grady built in sort |
| O(n²)      | Quadratic Time    | Double nested loops over the same input.                                                 | Bubble & Selection sort                                     |
| O(n3)      | Cubic Time        | Three nested loops over the same input.                                                  |                                                             |
| O(2ⁿ)      | Exponential Time  | Recursive function where each call makes 2 more calls.                                   |                                                             |
| O(n!)      | Factorial Time    | Trying every possible ordering (permutations)                                            |                                                             |

![image](./images/big-o-notation-graph.jpg)

### Rules of Big-O Notation:
- Ignore Constants:

```
O(2n)   → O(n)
O(100)  → O(1)
O(5n²)  → O(n²)
```

- Keep the largest notations: 

```
O(n² + n + 1) → O(n²)
O(n log n + n) → O(n log n)
O(n² + 10n + 500) → O(n²)
O(n + n + 500) → O(n)
```

- Always calculate for worse case for time and space complexity:

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

|                  | Best Case                                 | Average Case                       | Worst Case                       |
| ---------------- | ----------------------------------------- | ---------------------------------- | -------------------------------- |
| Time Complexity  | target found first position: Steps = O(1) | target found random position: O(N) | target found last position: O(N) |
| Space Complexity | O(1)                                      | O(1)                               | O(1)                             |


## Time Complexity
Time complexity measures how the run time of an algorithm grows as the input size (n) grows.

```js
for (...) {}   // O(n)
for (...) {}   // O(n)

Time Complexity: O(n) + O(n) = O(2n) 
                            = O(n)
```

```js
for (...) {        // O(n)
  for (...) {      // O(n)
  }
}

Time Complexity: O(n × n) = O(n²)
```

```js
for(let i = 1; i <= n; i = i * 2){
    .....
}

Time Complexity: O(log n), because: i = 1, 2, 4, 8, 16, 32, 64.......each time input device by half

// same things here
  while (n > 1) {
    console.log(n);
    n = Math.floor(n / 2);
  }

Time Complexity: O(log n), because: suppose n = 64, then = 64 32, 16, 8, 4, 2, 1.......each time input device by half

// same things for digit extraction

let n = 11245;

while (n > 0) {
    let digit = n % 10;
    console.log(digit)

    n = Math.floor(n / 10)
}

Time Complexity: O(log n), because: n = 11245 → 1124 → 112 → 11 → 1 → 0.......each time input device by 10, 
so digits = ⌊log₁₀(n)⌋ + 1
          = O(log₁₀ n)  →  O(log n)                                                                                                            
```

```js
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1)
}



- number of calls: n + 1 (since total 6 calls needed for factorial 5) --> O(n)
for factorial(5):

= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * (4 * (3 * (2 * (1 * factorial(0)))))

- work per cell: n * factorial(n - 1) = 1 = O(1) (since we do just multiplication)

so, Time Complexity for recursion: (number of calls) × (work per call) = O(n) * O(1) = O(n)
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

### Constraints of Coding Problem Set: 
For most of the platform like Codeforces, CodeChef, LeetCode we can perform 1s ≈ 10⁸ operation for the worse case

Note: ≈ means approximately

| Big-O          | **Max Input Size (≈ 1s)** |
| -------------- | ------------------------- |
| **O(1)**       | **Unlimited**             |
| **O(log n)**   | **Up to 10¹⁸+**           |
| **O(n)**       | **~10⁷ – 10⁸**            |
| **O(n log n)** | **~10⁶ – 10⁷**            |
| **O(n²)**      | **~10³ – 10⁴**            |
| **O(n³)**      | **~300 – 500**            |
| **O(2ⁿ)**      | **~20 – 25**              |
| **O(n!)**      | **~10 – 11**              |


### How to check code real time using js: 

```js
console.time("program")
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
console.timeEnd("program") // program: 5.603ms
```

### Lookup Table: 
A lookup table is a pattern that allows us to retrieve data in O(1) time complexity using a key.

```js
const books = [
    { id: "b-101", title: "Cracking the Coding Interview", author: "Gayle" },
    { id: "b-102", title: "Clean Code", author: "Robert C. Martin" },
    { id: "b-103", title: "Introduction to Algorithms", author: "Cormen" },
    { id: "b-104", title: "Design Patterns", author: "Erich." }
];

const lookupTable = books.reduce((table, post) => {
    table[post.id] = post

    return table
}, {})

console.log(lookupTable)

/*
{
  'b-101': { id: 'b-101', title: 'Cracking the Coding Interview', author: 'Gayle'},
  'b-102': { id: 'b-102', title: 'Clean Code', author: 'Robert C. Martin' },
  'b-103': { id: 'b-103', title: 'Introduction to Algorithms', author: 'Cormen'},
  'b-104': { id: 'b-104', title: 'Design Patterns', author: 'Erich.' }
}
*/

console.log(lookupTable["b-104"]) // { id: 'b-104', title: 'Design Patterns', author: 'Erich.' }
```

Time complexity for this code is: O(1)

without lookup table: 

```js
const books = [
    { id: "b-101", title: "Cracking the Coding Interview", author: "Gayle" },
    { id: "b-102", title: "Clean Code", author: "Robert C. Martin" },
    { id: "b-103", title: "Introduction to Algorithms", author: "Cormen" },
    { id: "b-104", title: "Design Patterns", author: "Erich." }
];

const foundPost = books.find((book) => book.id === 'b-104')
console.log(foundPost)
```

Time complexity of this code is: O(n)

## Space Complexity
Space complexity measures how the memory of an algorithm grows as the input size (n) grows.


```js
let sum = 0 // O(1) 
for (...) {        
    sum += i;
}

Space Complexity: O(1)
```

```js
let result = [] // O(n) 
for (...) {        
    result.push(arr[i])
}

Space Complexity: O(n)
```

# Part 1: Data Structure

## Array 

https://github.com/muhammad-tamim/javascript-notes?tab=readme-ov-file#array

## String 

https://github.com/muhammad-tamim/JavaScript-notes?tab=readme-ov-file#string

## Hash Table

### set:
A Set is a collection of unique values. It automatically removes duplicates and can store values of any type (primitive or object).

#### How to create a set:

Way 1:

```js
// Create a Set with initial values
const numbers = new Set([1, 2, 3, 4, 4, 5]); // duplicates ignored

console.log(numbers); // Set(5) {1, 2, 3, 4, 5}
```

Way 2: 

```js
// Create an empty Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters) // Set(3) { 'a', 'b', 'c' }
```

you can also add variable to set: 

```js
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters) // Set(3) { 'a', 'b', 'c' }
```

#### Iterating:

```js
const colors = new Set(["red", "green", "blue"]);

// Using for...of
for (let color of colors) {
  console.log(color);
}

// Using forEach
colors.forEach((value) => {
  console.log(value);
});
```

#### Common set methods and properties: 

##### methods:
- delete():
  
```js
const colors = new Set(["red", "green", "blue"]);

fruits.delete("red");
console.log(fruits); // Set(2) {"green", "blue"}
```

- clear(): Clear all values of set

```js
const colors = new Set(["red", "green", "blue"]);

fruits.clear();
console.log(colors); // Set(0) {}
```

- has():

```js
const letters = new Set(["a", "b", "c"]);

answer = letters.has("d");
console.log(answer); // false
```

##### properties:
- size: 

```js
const mySet = new Set(["a", "b", "c"]);

console.log(mySet.size); // 3
```

####  Logic methods: 
In JavaScript 2025, 7 new logical methods were added to the Set object: union(), intersection(), difference(), isDisjointFrom(), isSubsetOf(),isSupersetOf(), symmetricDifference()

- union(): 
  
![image](./images/set-union.jpg)

```js
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.union(B);

console.log(C) // Set(4) { 'a', 'b', 'c', 'd' }
```

- intersection():

![image](./images/set-intersection.jpg)

```js
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.intersection(B);

console.log(C) // Set(2) { 'b', 'c' }
```

- difference():

![image](./images/set_difference.jpg)

```js
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.difference(B);

console.log(C) // Set(1) { 'a' }
```

- symmetricDifference():

![image](./images/set_symmetric_difference.jpg)

```js
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.symmetricDifference(B);

console.log(C) // Set(1) { 'a' }
```

- isDisjointFrom(): 
The isDisjointFrom() method returns true if this set has no elements in common with the argument set:

![image](./images/set-isDisjointFrom.png)

```js
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

let answer = A.isDisjointFrom(B);

console.log(answer) // Set(1) { 'a' }
```


#### Converting array to set and set to array: 

```js
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = new Set(nums); // remove duplicates
console.log(uniqueNums); // Set {1, 2, 3, 4}

const uniqueArray = [...uniqueNums];
// const uniqueArray = Array.from(uniqueNums)

console.log(uniqueArray); // [1, 2, 3, 4]
```

#### Example: 

Example 1: remove all duplicates array element: 

- Brute force: Brute force is solving a problem by checking all possible solutions without optimization.

```js
function removeDupArr(arr) {
    const newArr = []

    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    });

    return newArr
}
```
Time Complexity: O(n^2)

- With Set: 
- 
```js
function removeDupArr(arr) {
    const set = new Set(arr)

    return Array.form(set)
}
```
Time Complexity: O(n)

### map
A Map is a collection of key-value pairs, where keys can be any type (unlike objects which convert keys to strings). 

#### Difference between Objects and Maps

| Object                            | Map                      |
| --------------------------------- | ------------------------ |
| Not directly iterable             | Directly iterable        |
| Keys must be Strings (or Symbols) | Keys can be any datatype |

#### How to Create a Map:

Way 1: 

```js
const userRoles = new Map([
    ["Alice", "Admin"],
    ["Bob", "Editor"],
    ["Charlie", "Viewer"]
]);

console.log(userRoles); // Map(3) { 'Alice' => 'Admin', 'Bob' => 'Editor', 'Charlie' => 'Viewer' }
```

Way 2: 

```js
// Create an empty Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 600);
// set is also used to changing map values
fruits.set("oranges", 200);

console.log(fruits) // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
```

you can also add objects as a key to map:

```js
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

const fruits = new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits)

/*
Map(3) {
  { name: 'Apples' } => 500,
  { name: 'Bananas' } => 300,
  { name: 'Oranges' } => 200
}
*/
```

#### Iterating: 

```js
const person = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"]
]);

// for...of
for (let [key, value] of person) {
    console.log(`${key}: ${value}`);
}

// forEach
person.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

#### Common map methods and properties:

##### Methods: 
- get(): 

```js
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 600);

console.log(fruits.get("apples")) // 500
```

- delete():

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);

fruits.delete("oranges")

console.log(fruits) // Map(2) { 'apples' => 500, 'bananas' => 300 }
```

- clear():

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);

fruits.clear(fruits)

console.log(fruits) // Map(0) {}
```

- has():

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);

console.log(fruits.has("oranges")) // true
```

- entries():

The entries() method returns an iterator object with the [key,values] in a map:

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);


console.log(fruits.entries())

/*
[Map Entries] {
  [ 'apples', 500 ],
  [ 'bananas', 300 ],
  [ 'oranges', 600 ]
}
*/
```

- keys():

The keys() method returns an iterator object with the keys in a map:

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);


console.log(fruits.keys()) // [Map Iterator] { 'apples', 'bananas', 'oranges' }
```

- values():

The values() method returns an iterator object with the values in a map:

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);


console.log(fruits.values()) // [Map Iterator] { 500, 300, 600 }
```

##### Properties:

- size: 

```js
const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 600);

console.log(fruits.size) // 3
```


## Stack: 
A Stack is a linear data structure that follows the rule: LIFO – Last In, First Out.

| Operation | Description        |
| --------- | ------------------ |
| `push`    | Add element to top |
| `pop`     | Remove top element |
| `peek`    | View top element   |
| `isEmpty` | Check if empty     |
| `size`    | Number of elements |

```js
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }

        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items)
    }
}

const stack = new Stack()
stack.print() // []

stack.push(5);
stack.push(10);
stack.push(8);
stack.print() // [ 5, 10, 8 ]

console.log(stack.pop());  // 8
stack.print() // [ 5, 10 ]

console.log(stack.peek()); // 10
console.log(stack.isEmpty()) // false
console.log(stack.size()); // 2
```

## Queue:
A Queue is a linear data structure that follows: FIFO – First In, First Out

| Term        | Meaning        |
| ----------- | -------------- |
| **Front**   | First element  |
| **Rear**    | Last element   |
| **Enqueue** | Insert element |
| **Dequeue** | Remove element |


| Operation | Description               |
| --------- | ------------------------- |
| `enqueue` | Add element at rear       |
| `dequeue` | Remove element from front |
| `peek`    | View front element        |
| `isEmpty` | Check if queue empty      |
| `size`    | Number of elements        |



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
