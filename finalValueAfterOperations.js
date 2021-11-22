//Leetcode Solution: 2011 ->Final Value of Variable After Performing Operations
function finalValueAfterOperations(operations) {
    let X = 0;
    for (let item of operations) {
        if (item == "++X" || item == "X++") {
            X += 1;
        } else {
            X -= 1;
        }
    }
    return X;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));