//Leetcode Solution: 242. Valid Anagram
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {}
    for (let value of s) {
        if (!sMap[value]) {
            sMap[value] = 1;
        } else {
            sMap[value] += 1;
        }
    }
    for (let val of t) {
        if (val in sMap && sMap[val] !== 0) {
            sMap[val] -= 1;
        } else {
            return false
        }
    }
    const sum = Object.values(sMap).reduce((a, b) => a + b)
    if (sum === 0) {
        return true
    }
    return false
};
console.log(isAnagram("aacc", "ccac"));