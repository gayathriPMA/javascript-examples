// program for a simple calculator
/*let num1 = parseInt(prompt("Enter number 1"))
let num2 = parseInt(prompt("Enter number2"))
let operator = prompt("Enter operator")
let result;
if (operator == '+') {
    result = num1 + num2;
    
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
    
}
else if (operator == '/') {
    result = num1 / num2;
    

}
else {
    result = num1 % num2;
    
}
console.log(`${num1}${operator}${num2} = ${result}`);*/

let num1 = parseInt(prompt("Enter number 1"))
let num2 = parseInt(prompt("Enter number2"))
let operator = prompt("Enter operator")
let result;
switch (operator) {
    case '+':

        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;


    default:
        result = num1 % num2;
        break;
}
console.log(`${num1}${operator}${num2} = ${result}`);

