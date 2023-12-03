// Challenge 1: Validate an Email Address
// Write a TypeScript function that takes an email address as a parameter and returns a boolean indicating whether the email address is valid. The function should check for basic email format rules, such as having an "@" symbol and a domain.
function isValidEmail(email) {
    // Your implementation here
    var _a = email.split("@"), a = _a[0], b = _a[1];
    if ((a != null) && (b != null)) {
        var _b = b.split("."), c = _b[0], d = _b[1];
        if ((c != null) && (d != null)) {
            console.warn(a, b);
            console.warn(c, d);
            return true;
        }
    }
    return false;
}
// Example usage:
var email1 = "test@example.com";
var email2 = "invalid-email";
console.log(isValidEmail(email1)); // Should return true
console.log(isValidEmail(email2)); // Should return false
