//this function aims to print fibonacci series upto 5 
function fibonacci(num) {
    let result = 0,
        a = 0,
        b = 1;
    while (result <= num) { //loop that runs till 5 is diplayed
        console.log(result);
        //to hold the preceding two values
        a = b;
        b = result;
        result = a + b; //sum of two preceding values
    }
}

console.log(fibonacci(5));