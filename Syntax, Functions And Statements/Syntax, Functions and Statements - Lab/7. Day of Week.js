
// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// The input comes as a single string argument.
// The output should be returned as a result.



function dayOfWeek(input) {

    if (input === "Monday") {
        console.log(1);
    } else if (input === "Tuesday") {
        console.log(2);
    } else if (input === "Wednesday") {
        console.log(3);
    } else if (input === "Thursday") {
        console.log(4);
    } else if (input === "Friday") {
        console.log(5);
    } else if (input === "Saturday") {
        console.log(6);
    } else if (input === "Sunday") {
        console.log(7);
    }else{
        console.log(`error`)
    }

}


dayOfWeek(`Monday`);