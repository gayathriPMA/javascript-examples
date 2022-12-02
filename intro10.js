// program that checks if the number is positive, negative or zero
function numberType() {
    const number = 10;
    if (number < 0) {
        console.log("Entered number is negative");
    }
    else if (number == 0) {
        console.log("Entered number is zero");
    }
    else {
        console.log("Entered number is positive");
    }

}
numberType();