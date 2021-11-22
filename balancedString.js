function balancedStringSplit(string) {
    let rCount = 0;
    let lCount = 0;
    let count = 0;
    for (let element of string) {
        if (element == "R") {
            rCount += 1;
        } else {
            lCount += 1;
        }
        if (rCount == lCount) {
            count += 1;
        }
    }
    return count;
}