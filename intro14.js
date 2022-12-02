// program to print prime numbers between the two numbers

// take input from the user
const l = parseInt(prompt('Enter lower number: '));
const h = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${l} and ${h} are:`);

// looping from lowerNumber to higherNumber
for (let i = l; i <= h; i++) {//(3;3<5;3++)
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {//because 1 satisfies prime number condition but 1 is not prime 
        //number so checking from 2 to getting number from previous condition
        //for eg entered lowest number is 1
        //(2;2<1;2++)
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}