// program to generate fibonacci series up to n terms
//get input
/*let num=parseInt(prompt("Enter positive number"))
let n1=0;
let n2=1;
let n3;

if (num<=0)
{
    console.log("Enter positive number");
}
for (let i=1;i<=num;i++)
{
    console.log(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
}*/

let num=parseInt(prompt("Enter positive number"))
let n1=0;
let n2=1;
let n3;
console.log("Fibonacci series");
console.log(n1);
console.log(n2);
n3=n1+n2;
while (n3<=num) {
    console.log(n3);
    n1=n2;
    n2=n3;
    n3=n1+n2;
    
    
}

