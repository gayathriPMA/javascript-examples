// program to pass a function as a parameter
function greet()
{
    return 'Hello';
}
//passing function greet() as a parameter
function fullGreet(name,fun)
{
    // accessing passed function
    const wish=fun();
    console.log(`${wish} ${name}`);
}
fullGreet('Gayathri',greet)
fullGreet('Kavya',greet)
fullGreet('cherath',greet)