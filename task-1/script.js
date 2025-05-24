let input = "";
let lastResult = 0;

// Appends a value to the input string and updates the display
function appendToInput(value) {
    if (value === "sqrt") {
        input += "Math.sqrt(";
    } else if (value === "ans") {
        input += lastResult;
    } else {
        input += value;
    }
    document.getElementById("input").innerHTML = input;
}

// Deletes the last character from the input
function deleteLast() {
    input = input.slice(0, -1);
    document.getElementById("input").innerHTML = input;
}

// Clears the input and result fields
function clearInput() {
    input = "";
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

// Calculates the result of the expression
function calculate() {
    try {
        // Replace percentage with division by 100
        let expression = input.replace(/%/, "/100");

        // Check if the expression contains Math.sqrt
        if (expression.includes("Math.sqrt")) {
            // Extract the number inside Math.sqrt(...)
            const sqrtMatch = expression.match(/Math\.sqrt\(([^)]+)\)/);
            if (sqrtMatch) {
                const numberStr = sqrtMatch[1]; // The content inside the parentheses
                const number = parseFloat(numberStr); // Convert to a number

                // Validate the number for square root
                if (isNaN(number)) {
                    throw new Error("Invalid input for square root");
                }
                if (number < 0) {
                    throw new Error("Cannot calculate square root of a negative number");
                }

                // Calculate the square root using Math.sqrt
                const sqrtResult = Math.sqrt(number);

                // Replace Math.sqrt(...) with the result in the expression
                expression = expression.replace(/Math\.sqrt\([^)]+\)/, sqrtResult);
            }
        }
        
        let result = Function(`"use strict"; return (${expression})`)();

        // Round to two decimal places
        result = Math.round(result * 100) / 100;

        // Store the result and display it
        lastResult = result;
        document.getElementById("result").innerHTML = result;
    } catch (e) {
        document.getElementById("result").innerHTML = "Error: " + e.message;
    }
}