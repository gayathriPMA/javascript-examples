// program to generate a multiplication table
//input from user
let num=parseInt(prompt("Enter positive number"))
console.log(`The multiplication table for ${num} is`)
for(let i=1;i<=num;i++)
{
    let n=i*num;
    console.log(`${i}*${num}=${n}`)
}