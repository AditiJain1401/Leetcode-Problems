//Leetcode Solution: 66 ->Plus One
function plusOne(digits) {
    let sum = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        sum = digits[i] + 1
        if (sum < 10) {
            digits[i] = sum
            return digits;
        } else {
            digits[i] = sum - 10
        }
    }
    digits.unshift(1)
    return digits;
};
console.log(plusOne([9, 9, 9]));
console.log(plusOne([1, 9, 9]));