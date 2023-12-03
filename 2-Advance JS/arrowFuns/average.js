// Calculate Average:

// Write an arrow function that calculates the average of an array of numbers. Use the reduce method along with an arrow function to achieve this.

var arr = [1,2,3,4,5,6]

var arrow_fun = arr =>  arr.reduce((sum, num) => sum + num, 0) / arr.length 

var avg = arrow_fun(arr);
console.log(avg)


