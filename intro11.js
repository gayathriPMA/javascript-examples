// program to solve quadratic equation
const a=parseInt(prompt("Enter first number"))
const b=parseInt(prompt("Enter second number"))
const c=parseInt(prompt("Enter third number"))
//calculate discriminant
let disc=b*b-(4*a*c).toFixed(2);

if(disc>0)
{
    let root1=(-b+Math.sqrt(disc))/(2*a);
    let root2=(-b-Math.sqrt(disc))/(2*a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);

}
else if(disc==0)
{
    let root1=-b/(2*a)
    let root2=root1;
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);

}
else{
    let first=(-b/(2*a)).toFixed(2)
    let second=(Math.sqrt(-disc)/(2*a)).toFixed(2)
   console.log(`The roots of quadratic equation are ${first}+${second}i and ${first}-${second}i `);




}