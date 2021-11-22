//Leetcode Solution: 70 ->Climbing Stairs
function climbStairs(n) {
    let step1 = 1
    let step2 = 2
    let sum = 0
    const fibonacci = [step1, step2]
    for (let i = 1; i <= n; i++) {
        sum = step1 + step2
        fibonacci.push(sum)
        step1 = step2
        step2 = sum
    }
    return fibonacci[n - 1]
}
console.log(climbStairs(2));