// program to check if a number is prime or not
const a = parseInt(prompt("Enter positive number"))
if (a == 1) {
    console.log("Not a prime number");
}
else if ((a % 1)==0 && (a % a) == 0) {
    console.log("Is prime number");

}
else {
    console.log("Not a prime number");
}