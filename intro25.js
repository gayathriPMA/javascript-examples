// program to sort words in alphabetical order
//take input
const s= PROMPT('here I am')
//create array
const words=s.split(' ')
console.log(words);
//sort elements
words.sort()
console.log("The Alphabetical order is");
for (const result of words){
    console.log(result);
}
