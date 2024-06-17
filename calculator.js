// Function to handle the calculator logic
function startCalculator() {
    var calculations = []; // Array to store calculation history

    while (true) {
        // Prompt user for two numbers and an operator
        var inputX = prompt("Enter the first number (or cancel to exit):");
        if (inputX === null) break; // Exit loop if cancel is clicked
        var x = parseFloat(inputX);

        var inputY = prompt("Enter the second number:");
        if (inputY === null) break; // Exit loop if cancel is clicked
        var y = parseFloat(inputY);

        var operator = prompt("Enter the operator (+, -, *, /, %):");
        if (operator === null) break; // Exit loop if cancel is clicked

        // Check if operator is valid
        var result;
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                if (y !== 0) {
                    result = x / y;
                } else {
                    result = "Error: Division by zero";
                }
                break;
            case '%':
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
                break;
        }

        // Prepare row for the table
        var row = {
            number1: x,
            operator: operator,
            number2: y,
            result: result
        };

        // Store row in calculations array
        calculations.push(row);
    }

    // Output the calculations as a table in the console
    console.table(calculations);
}

// Start the calculator when the page is loaded
startCalculator();
