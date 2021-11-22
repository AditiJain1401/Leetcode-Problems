//Leetcode Solution: 771 ->Jewels and Stones
function numJewelsInStones(jewels, stones) {
    let count = 0;
    for (let jewel of jewels) {
        for (let stone of stones) {
            if (stone === jewel) {
                count += 1;
            }
        }
    }
    return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));