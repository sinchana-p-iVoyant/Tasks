// Filter and Map:

// Given an array of numbers, use the filter and map array methods along with arrow functions to create a new array that contains only the even numbers, and then square each of those even numbers.

console.log("----Filter and Map----")

var arr = [1,2,3,4,5,6]

var arr2 = arr
            .filter(num => num % 2 == 0)
            .map(num => num * num)

console.log(`arr:\n`) 
console.log(arr)

console.log("New Array: \n")
console.log(arr2)