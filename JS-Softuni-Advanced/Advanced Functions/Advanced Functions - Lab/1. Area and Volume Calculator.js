// Write a function which calculates the area and the volume of a figure, which is defined by its coordinates 
// (x, y, z)
// Input
// You will receive 3 parameters -  the functions area and vol and a string, which contains the figures' coordinates. 
// For more information check the examples.
// Output
// The output should be returned as an array of objects. Each object has two properties: the figure's area and volume.
// '[
//   { area: ${area1}, volume: ${volume1} },
//   { area: ${area2}, volume: ${volume2} },
//   . . .
// ]'
// Note:
// Submit only the solve function.


function areaVolCalc(area, vol, dataAsJSON) {
    const figures = JSON.parse(dataAsJSON);
    const result = [];
    for (let figure of figures) {
        const objArea = area.call(figure);
        const objVolume = vol.call(figure)
        const output = {
            area: objArea,
            volume: objVolume
        }

        result.push(output);
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const example1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log(areaVolCalc(area, vol, example1));

