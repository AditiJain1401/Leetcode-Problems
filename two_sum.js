function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([1, 6, 8, 4, 3], 9));