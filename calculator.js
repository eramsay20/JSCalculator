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
*/

// ADDITION FUNCTION
window.onload = 
document.getElementById('addOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultAdd = input1 + input2;
    document.querySelector('.display').textContent = `${input1} + ${input2} = ${resultAdd}`;

    input1 = parseFloat(resultAdd);
    document.getElementById('inputText1').value = input1;
    return resultAdd;
});
// ADDITION FUNCTION ^^^^^

// SUBTRACTION FUNCTION
window.onload = 
document.getElementById ('subtractOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultSubtract = input1 - input2;
    document.querySelector('.display').textContent = `${input1} - ${input2} = ${resultSubtract}`;

    input1 = parseFloat(resultSubtract);
    document.getElementById('inputText1').value = input1;
    return resultSubtract;
});
// SUBTRACTION FUNCTION ^^^^^

// MULTIPLICATION FUNCTION
window.onload = 
document.getElementById ('multiplyOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultMultiply = input1 * input2;
    document.querySelector('.display').textContent = `${input1} * ${input2} = ${resultMultiply}`;

    input1 = parseFloat(resultMultiply);
    document.getElementById('inputText1').value = input1;
    return resultMultiply;
});
// MULTIPLICATION FUNCTION ^^^^^

// DIVISION FUNCTION
window.onload = 
document.getElementById ('divideOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    if(input2 === 0) {
        
        document.querySelector('.display').textContent.fontcolor = `red`;
        document.querySelector('.display').textContent = `Error: Cannot divide by 0`;
    }

    let resultDivide = input1 / input2;
    document.querySelector('.display').textContent = `${input1} / ${input2} = ${resultDivide}`;

    input1 = parseFloat(resultDivide);
    document.getElementById('inputText1').value = input1;
    return resultDivide;
});
// DIVISION FUNCTION ^^^^^


/* Stretch Requirements:
1. Provide input validation on the input fields 
    // met; using FLOATPARSE above, converting all text to number

2. Implement a memory feature where the result of a calculation can be stored and then
recalled to use as input for another operation.
    // met; reassigned input1 variable to be the resulting number, which is then used again as input1 

3. Add the ability to raise a number to a power.*/

// EXPONENTIAL FUNCTION
window.onload = 
document.getElementById ('powerOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultPower = input1 ** input2;
    document.querySelector('.display').textContent = `${input1} ^ ${input2} = ${resultPower}`;

    input1 = parseFloat(resultPower);
    document.getElementById('inputText1').value = input1;
    return resultPower;
});
// EXPONENTIAL FUNCTION ^^^^^

/*4. Add the ability to calculate the square root of a number.*/

// SQRT FUNCTION
window.onload = 
document.getElementById ('sqrtOp').addEventListener('click', () => {

    let input1 = parseFloat(document.getElementById('inputText1').value);
    let input2 = parseFloat(document.getElementById('inputText2').value);
    
    let resultSqrt = Math.sqrt(input1);
    document.querySelector('.display').textContent = `√${input1} = ${resultSqrt}`;

    input1 = parseFloat(resultSqrt);
    document.getElementById('inputText1').value = input1;
    return resultSqrt;
});
// SQRT FUNCTION ^^^^^