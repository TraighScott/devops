exports.factorial = function(n) {
    if(n < 0) {
        return "Factorial for negative number is not defined!"
    }else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <=n; i++) {
            result *= i;
        }
        return result;
    }
}