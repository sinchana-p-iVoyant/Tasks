// Challenge 3: Calculate Factorial using Recursion

// Write a TypeScript function that calculates the factorial of a given number using recursion.


function factorial(n: number): number {
    // Your implementation here
    if (n === 0 || n === 1){
            return 1
     } 
    return n * factorial(n-1)
}

// Example usage:
console.log(factorial(5)); // Should return 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Should return 1