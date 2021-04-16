// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. 
// Each area has a different limit: 
// •	On the motorway the limit is 130 km/h
// •	On the interstate the limit is 90 km/h
// •	In the city the limit is 50 km/h 
// •	Within a residential area the limit is 20 km/h
// If the driver is within the limits, there should be printed speed and the speed limit. 
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, speeding should be printed 
// For speeding up to 40 km/h over the limit, excessive speeding should be printed
// For anything else, reckless driving should be printed
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.


function roadRadar(speed, type) {
    let citySpeed = {
        'city': 50,
        'motorway': 130,
        'residential': 20,
        'interstate': 90
    }
    speed = Number(speed);
    let diff = speed - citySpeed[type];
    if (citySpeed[type] >= speed && speed > 0) {
        console.log(`Driving ${speed} km/h in a ${citySpeed[type]} zone`)
    } else if (citySpeed[type] + 20 >= speed) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed[type]} - speeding`);
    } else if (citySpeed[type] + 40 >= speed) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed[type]} - excessive speeding`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed[type]} - reckless driving`)
    }
}

roadRadar(-2, 'motorway');


//Another solution. 
/*
function roadRadar2(speed, area){
    let limit = 0;

    switch(area){
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }
    let status = "";
    let speeding = speed - limit;

    if(speeding<= 0){
        return `Driving ${speed} km/h in a ${limit} zone`
    }
    if(speeding <= 20){
        status = "speeding";
    }else if(speeding <= 40){
        status = "excessive speeding";
    }else{
        status = "reckless driving";
    }

    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
}




console.log(roadRadar2(130, 'motorway'));
*/