// program to find the factorial of a number
let num = parseInt(prompt("Enter positive number"))
//checking if number is negative
if (num < 0) {
    console.log("Enter positive number");
}
//checking if number is zero
else if (num === 0) {
    console.log(`Factorial of 0 is 1`);
}
else {
    let fact = 1;
    for (i = 1; i <= num; i++)
        fact *= i;
console.log(`The factorial of ${num} is ${fact}`);

}