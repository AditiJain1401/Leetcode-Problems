//Leetcode Solution: 1480 ->Running Sum of 1d Array
function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        const lastElement = nums[i - 1]
        nums[i] = lastElement + nums[i]
    }
    return nums;
}
console.log(runningSum([1, 2, 3, 4]));