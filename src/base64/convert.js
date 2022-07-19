// Read the file into memory.
var fs = require('fs');
var imageFile = fs.readFileSync('../j1.jpg');

// Convert the image data to a Buffer and base64 encode it.
var encoded = Buffer.from(imageFile).toString('base64');

console.log(encoded)

