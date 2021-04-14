<<<<<<< HEAD
// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 
// 'hours:minutes:seconds'.
// The input comes as three numbers.
// The output should be printed on the console.

function timeToWalk(steps, footPrint, studentSpeed) {
    let distance = steps * footPrint;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distance / speedMetersSec;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
=======
// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 
// 'hours:minutes:seconds'.
// The input comes as three numbers.
// The output should be printed on the console.

function timeToWalk(steps, footPrint, studentSpeed) {
    let distance = steps * footPrint;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distance / speedMetersSec;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
>>>>>>> 5d87c69eebaacb2503a8697043f7642e5aca0eea
timeToWalk(2564, 0.70, 5.5);