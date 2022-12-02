/*const baseValue = prompt("Enter base value of triangle")
const heightValue = prompt("Enter Heightvalue of triangle")
const area = (baseValue * heightValue) / 2
console.log(`Area of triangle is ${area}`);
alert(`Area of triangle is ${area}`);
document.write(`Area of triangle is ${area}`);*/

const a = prompt("Enter one side of triangle value");
const b = prompt("Enter one side of triangle value");
const c = prompt("Enter one side of triangle value");
const s = (a + b + c) / 2;
const area = Math.sqrt(
    s * (s - a) * (s - b) * (s - c));
console.log(`Area of triangle is ${area}`);
alert(`Area of triangle is ${area}`);
document.write(`Area of triangle is ${area}`);



