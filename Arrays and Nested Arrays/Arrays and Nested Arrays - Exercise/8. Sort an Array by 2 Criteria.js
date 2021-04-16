// Write a function that orders a given array of strings, by length in ascending order as primary criteria,
//     and by alphabetical value in ascending order as second criteria.The comparison should be case -insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line.


function sortArrBy2Criteria(arr) {

    return arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
        
    }).join("\n");
}

console.log(sortArrBy2Criteria(['alpha', 
'beta', 
'gamma']

));
