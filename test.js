const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 600]
]);


console.log(fruits) // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 600 }

const fruitsArr = [...fruits]; // [['Alice','Admin'], ['Bob','Editor']]
console.log(fruitsArr) // [ [ 'apples', 500 ], [ 'bananas', 300 ], [ 'oranges', 600 ] ]