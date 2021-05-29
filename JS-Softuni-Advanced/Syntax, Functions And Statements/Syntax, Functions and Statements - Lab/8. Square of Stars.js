// Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. 
// If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a rectangle of variable size.


function squareOfStars(input){

    let result = "";
    for(let i = 0; i < input; i++){
        result += "* ";
        for(let j = 1; j < input; j++){
            result += "* ";
        }

       result += "\n";
    }
   
    console.log(result);
}

squareOfStars(5);