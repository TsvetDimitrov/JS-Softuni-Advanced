// Write a function that validates an HTTP request object. The object has the properties method, uri, version and message. 
// Your function will receive the object as a parameter and has to verify that each property meets the following requirements:
// •	method - can be GET, POST, DELETE or CONNECT
// •	uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods;
//  all letters are Latin; the URI cannot be an empty string
// •	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
// •	message - may contain any number or non-special characters;special characters are <, >, \, &, ', "
// If a request is valid, return it unchanged. 
// If any part fails the check, throw an Error with message "Invalid request header: Invalid {Method/URI/Version/Message}". 
// Replace the part in curly braces with the relevant word. Note that some of the properties may be missing, 
// in which case the request is invalid. Check the properties in the order in which they are listed above. 
// If more than one property is invalid, throw an error for the first encountered.
// Input / Output
// Your function will receive an object as a parameter. Return the same object or throw an Error as described above as an output.




function requestValidator(obj) {
    if (obj.method === undefined || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (obj.uri === undefined || !/^([a-zA-Z0-9\.]+|\*)$/gm.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (obj.version === undefined || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (obj.message === undefined || !(/^[^<>\\&'"]*$/gm.test(obj.message))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return obj;
}


console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
}
));