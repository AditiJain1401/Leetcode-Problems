//Leetcode solution :1431 ->Kids With the Greatest Number of Candies
function kidsWithCandies(candies, extraCandies) {
    let maxNum = 0
        //to get the greates num of candies out of all for later comparison
    for (i = 0; i < candies.length; i++) {
        if (candies[i] > maxNum) {
            maxNum = candies[i];
        }
    }
    for (i = 0; i < candies.length; i++) {
        const totalCandies = candies[i] + extraCandies
        if (totalCandies >= maxNum) { //checks is greater or equals to greater after addition of extra candies
            candies[i] = true
        } else {
            candies[i] = false
        }
    }
    return candies;
}
console.log(kidsWithCandies([8, 2, 7, 1, 5, 6], 2));