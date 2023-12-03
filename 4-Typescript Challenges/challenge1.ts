// Challenge 1: Validate an Email Address

// Write a TypeScript function that takes an email address as a parameter and returns a boolean indicating whether the email address is valid. The function should check for basic email format rules, such as having an "@" symbol and a domain.


// function isValidEmail(email: string): boolean {
//     // Your implementation here
//     let [a,b] = email.split("@")
//     if ((a != null) && (b != null)){
//         let [c,d] = b.split(".")
//         if ((c != null) && (d != null)){
//             console.warn(a,b)
//             console.warn(c,d)
//             return true
//         }
//     } 
//     return false

// }

// // Example usage:
// const email1 = "test@example.com";
// const email2 = "invalid-email";
// console.log(isValidEmail(email1)); // Should return true
// console.log(isValidEmail(email2)); // Should return false

function isValidEmail(email: string): boolean {
    // Check if the email contains exactly one "@" symbol
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
        return false;
    }

    // Split the email into local and domain parts
    const [localPart, domainPart] = email.split('@');

    // Check if the local and domain parts are not empty
    if (localPart.length === 0 || domainPart.length === 0) {
        return false;
    }

    // Check if the domain part contains exactly one "." symbol
    const dotIndex = domainPart.indexOf('.');
    if (dotIndex === -1 || domainPart.indexOf('.', dotIndex + 1) !== -1) {
        return false;
    }

    // Check if the local and domain parts do not start or end with a dot
    if (localPart.startsWith('.') || localPart.endsWith('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
        return false;
    }

    return true;
}

// Example usage:
const email1 = "test@example.com";
const email2 = "invalid-email";
console.log(isValidEmail(email1)); // Should return true
console.log(isValidEmail(email2)); // Should return false
