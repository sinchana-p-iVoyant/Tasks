function performAddition() {
    // Get the values of the input elements
    var num1 = document.getElementById("num1").value;
    console.log(num1);
    var num2 = document.getElementById("num2").value;

    // Convert the values to numbers (assuming they are numeric inputs)
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform addition
        var sum = num1 + num2;

        // Display the result
        alert("The sum is: " + sum);
    } else {
        alert("Please enter valid numbers.");
    }
}
