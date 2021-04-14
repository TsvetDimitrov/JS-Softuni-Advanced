// Write a program that receives total of 4 parameters in the format x1, y1, x2, y2.
//  Check if the distance between each point and the start of the cartesian coordinate system (0, 0) is valid.
//   A distance between two points is considered valid, if it is an integer value. 
// In case a distance is valid, print"{x1, y1} to {x2, y2} is valid"
// If the distance is invalid, print "{x1, y1} to {x2, y2} is invalid"
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
// The input consists of two points given as 4 numbers.
// For each comparison print either "{x1, y1} to {x2, y2} is valid" if the distance is valid, 
// or "{x1, y1} to {x2, y2} is invalid" if it is invalid.


function validityChecker(x1, y1, x2, y2){


    let checkFirstPoint = firstPoint(x1);
    let checkSecondPoint = secondPoint(x1);
    let checkThirdPoint = thirdPoint(x1);


    function firstPoint() {
        let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

        return checkOne;
    }

    function secondPoint() {
        let checkSecond = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

        return checkSecond;
    }


    function thirdPoint() {
        let checkThird = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));


        return checkThird;
    }


    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validityChecker(2, 1, 1, 1);
//asdasda