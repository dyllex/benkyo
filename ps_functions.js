// isEven()
// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
function isEven(num) {
    return num % 2 === 0;
}

// factorial()
// Write a function factorial() which takes a single numeric argument and return the factorial of that number
function factorial(num) {
    if (num == 0){
        return 1;
    }
    else {
        for (var i = num-1; i > 0; i--) {
            num = num * i;
        }
        return num;
    }
}

// kebabToSnake()
// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}