// program to trim a string
/*const string="    Hello Gayathri    "
const result=string.split(" ").join("");
console.log(result);*/

//Another method with by creating function string(\s) global(/g)
/*const s=trimString('   hello world   ')

function trimString(s)
 {
    const result= s.replace(/\s/g,'')
    return result;
}
console.log(s);*/

//another method without function
const s='      hello world   '
const result=s.replace(/\s/g,'')
console.log(result);
