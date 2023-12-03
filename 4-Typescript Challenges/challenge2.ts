// Challenge 2: Implement a Generic Stack

// Create a TypeScript class that represents a generic stack. The stack should have methods for pushing an element onto the stack, popping an element off the stack, and checking if the stack is empty.


// Challenge 2: Implement a Generic Stack

// Create a TypeScript class that represents a generic stack. The stack should have methods for pushing an element onto the stack, popping an element off the stack, and checking if the stack is empty.

class Stack<T> {
    private stackArray: T[];

    constructor() {
        this.stackArray = [];
    }

    push(e: T): void {
        this.stackArray.push(e);
    }

    pop(): T | undefined {
        return this.stackArray.pop();
    }

    isEmpty(): boolean {
        return this.stackArray.length === 0;
    }
}

// Example usage:
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Should print 20
console.log(numberStack.isEmpty()); // Should return false

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop()); // Should print "World"


// Changes made:

// Added a generic type parameter T to the Stack class to make it a generic stack.
// Changed the constructor to not take any parameters, as it wasn't being used.
// Removed this from the method declarations inside the class.
// Specified the types for the method parameters and return types.
// Changed the isEmpty method to directly return the result of the comparison.



// class Stack 
// {
//     // Your implementation here

//     constructor()
//     {
//         this.stackArray = []
//     }
    
//     this.push = (e) => {
//         this.stackArray.push(e)
//     }

//     this.pop = () => {
//         return this.stackArray.pop()
//     }

//     this.isEmpty = () => {
//         if (this.stackArray.length === 0){
//             return true
//         }
//     }

// }

// // Example usage:
// const numberStack = new Stack();
// numberStack.push(10);
// numberStack.push(20);
// console.log(numberStack.pop()); // Should print 20
// console.log(numberStack.isEmpty()); // Should return false

// const stringStack = new Stack();
// stringStack.push("Hello");
// stringStack.push("World");
// console.log(stringStack.pop()); // Should print "World"