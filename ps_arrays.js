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
// Write a function isUniform() which takes an array as an argument and return true if all elements in the array are identical

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