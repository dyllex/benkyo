console.log("printReverse");
// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself)

// for loop, start at back, print
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1,2,3,4]);
printReverse(["a", "b", "c"]);

console.log("isUniform");
// Write a function isUniform() that takes an array as an argument and return true if all elements in the array are identical

// for loop, compare each element to first element
function isUniform(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0])
            return false;
    }
    return true;
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);

console.log("sumArray");
// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

// Alternate form using forEach
function sumEach(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

console.log("max");
// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);
max([-10,-3,-40,-7]);