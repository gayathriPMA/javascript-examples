// program to find the largest among three numbers
/*const a=parseInt(prompt("Enter first number"))
const b=parseInt(prompt("Enter second number"))
const c=parseInt(prompt("Enter third number"))

//checking first number is largest
if(a>=b&&a>=c)
{
        console.log(`The largest number is ${a}`);

}
//checking seconnd number is largest
else if(b>=a&&b>=c)
{
    console.log(`The largest number is ${b}`);


}
else{
    
    console.log(`The largest number is ${c}`);



}*/
const a=parseInt(prompt("Enter first number"))
const b=parseInt(prompt("Enter second number"))
const c=parseInt(prompt("Enter third number"))

let largest=Math.max(a,b,c)
console.log(`The largest number is ${largest}`);

