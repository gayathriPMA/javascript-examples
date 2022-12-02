// program to check if a number is a float or integer value
/*const num=parseInt(prompt('Enter positive number'))
if(num==isNaN())
{
    console.log("Entered number is not a number");

}
else
{
    num==Number.isInteger()
    console.log(`${num} is Integer`);
}*/

/*function fname(num) {
    //Check passed value is number
    if (typeof num == 'number' && !isNaN(num)) {
        if (Number.isInteger(num)) {
            console.log(`${num} is Integer`);

        }

        else {
            console.log(`${num} is a float value`);
        }
    }
    else {
        console.log(`${num} is not a number`);
    }

}
fname('Gayathri')
fname(2.3)
fname(12)
fname(-20)*/
function fname(num){
    let reg= /^-?[0-9]+$/
    //to check if passed number is integer
    let result=reg.test(num)
    if(result){
        console.log(`${num} is Integer`);

    }
    else
    {
        console.log(`${num} is a float value`);
    }
}
fname(1.5)
fname(-1.5)
fname(2)
fname(-2)
fname('Gayathri')