function sum(num)
{
    if(num>0)
    {
        return num+sum(num-1)
    }
    else
    {
        return num;
    }
}
const num=parseInt(prompt("Enter number"))
const result=sum(num)
console.log(`sum of the number is ${result}`);