// You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, 
// where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces.
//  The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude".
//   The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// Input
// The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
// Output
// •	The output should be an array of objects wrapped in JSON.stringify(). 
// •	Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!


function townsToJSON(input) {

    let [columns, ...table] = input.map(splitLine);
    function removeEmptyString(x) {
        return x !== "";
    }

    function convertIfNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }
    function splitLine(input) {

        return input.split("|").filter(removeEmptyString).map(x => x.trim()).map(convertIfNum);
    }
    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }));
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));