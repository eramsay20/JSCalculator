/* Exercise Instructions:
For this exercise, you will use HTML and JavaScript to construct a basic calculator. 
The calculator should have two input boxes to submit operands. It should have a button 
for each of the operations that will be performed. Clicking on one of these buttons will 
perform the operation on the input in the input boxes.

Requirements:
1. All event listeners should be attached inside a window.onload() event.
2. No global variables are used.
3. Must have 2 input boxes for operands
4. Must have a button for each operation
5. Once an operation is clicked, display the results.
6. Must allow for addition, subtraction, multiplication and division of two numbers.
7. Should not allow division by zero. Display a message that says "Error: Cannot divide by 0"
8. Must use functions to organize the program.

Stretch Requirements:
1. Provide input validation on the input fields
2. Implement a memory feature where the result of a calculation can be stored and then
recalled to use as input for another operation.
3. Add the ability to raise a number to a power.
4. Add the ability to calculate the square root of a number.*/

// ADDITION FUNCTION
window.onload = 
document.getElementById('addOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultAdd = document.querySelector('.display').textContent;
    document.querySelector('.display').textContent = input1 + input2;
    return resultAdd;
});
// ADDITION FUNCTION ^^^^^

// SUBTRACTION FUNCTION
window.onload = 
document.getElementById ('subtractOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultSubtract = document.querySelector('.display').textContent;
    document.querySelector('.display').textContent = input1 - input2;
    return resultSubtract;
});
// SUBTRACTION FUNCTION ^^^^^

// MULTIPLICATION FUNCTION
window.onload = 
document.getElementById ('multiplyOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultMultiply = document.querySelector('.display').textContent;
    document.querySelector('.display').textContent = input1 * input2;
    return resultMultiply;
});
// MULTIPLICATION FUNCTION ^^^^^

// DIVISION FUNCTION
window.onload = 
document.getElementById ('divideOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    if(input2 === 0) {
        let resultDivide = document.querySelector('.display').textContent;
        document.querySelector('.display').textContent = `Error: Cannot divide by 0`;
        document.querySelector('.display').textContent.fontcolor = `red`;
        return resultDivide;
    }

    let resultDivide = document.querySelector('.display').textContent;
    document.querySelector('.display').textContent = input1 / input2;
    return resultDivide;
});
// DIVISION FUNCTION ^^^^^


