function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        else if (target < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1; // not found
}

const nums = [2, 4, 6, 8, 10, 12, 14];
console.log(binarySearch(nums, 10)); // 4
console.log(binarySearch(nums, 7));  // -1

