// Write a closure that can create and modify objects. All created objects should be kept and be accessible by name. 
// You should support the following functionality:
// •	create <name> - creates an object with the supplied <name>
// •	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
// •	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
// •	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - 
//     the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.
// Input
// The input will come as an array of strings - each string represents a command to be executed from your closure.
// Output
// For every print command - you should print on the console all properties of the object in the above mentioned format.
// Constraints
// •	All commands will always be valid, there will be no nonexistent or incorrect input.


function cars(params){

}




cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);