function twoSum(arr, target) {
    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]
        const complement = target - currentElement

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(currentElement, i)
    }
}

console.log(twoSum([2, 11, 7, 15], 9)) // [0, 2] --> time complexity: O(n)