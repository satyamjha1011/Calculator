// Fix typo and get the input field by its ID.
let input = document.getElementById('inputBox');  // Corrected typo: 'getE1ementById' to 'getElementById'

// Fix typo and select all buttons.
let buttons = document.querySelectorAll('button');  // Corrected typo: 'querySe1ectorAll' to 'querySelectorAll'

// Initialize the string to hold the expression.
let string = "";

// Convert NodeList of buttons to an array for easier iteration.
let arr = Array.from(buttons);

// Add event listeners to each button.
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        
        // Check if the '=' button is clicked, evaluate the expression and show the result.
        if (e.target.innerHTML == '=') {
            string = eval(string);  // Use eval to evaluate the expression (be cautious with eval).
            input.value = string;  // Display the result in the input box.
        }
        
        // Check if the 'AC' (All Clear) button is clicked, reset the string and input.
        else if (e.target.innerHTML == 'AC') {
            string = "";  // Clear the string.
            input.value = string;  // Reset input display.
        }
        
        // Check if the 'DEL' (Delete) button is clicked, remove the last character from the string.
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  // Remove the last character.
            input.value = string;  // Update the input display.
        }
        
        // For all other buttons, append the clicked value to the string and display it.
        else {
            string += e.target.innerHTML;  // Add the clicked button's value to the string.
            input.value = string;  // Update the input display with the new string.
        }
    });
});
