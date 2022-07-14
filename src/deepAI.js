// Example posting a local image file (Node.js only):
const fs = require('fs');

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('db75faa2-c245-49bb-81fd-8cc1a61517bf');

(async function() {
    var resp = await deepai.callStandardApi("image-similarity", {
            image1: fs.createReadStream("./sun.png"),
            image2: fs.createReadStream("./sun.png"),
    });
    console.log(resp);
})()



// Example posting file picker input image (Browser only):

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('db75faa2-c245-49bb-81fd-8cc1a61517bf');

// (async function() {
//     var resp = await deepai.callStandardApi("image-similarity", {
//             image1: document.getElementById('yourFileInputId'),
//             image2: document.getElementById('yourFileInputId'),
//     });
//     console.log(resp);
// })()

// Example posting a image URL:

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('db75faa2-c245-49bb-81fd-8cc1a61517bf');

// (async function() {
//     var resp = await deepai.callStandardApi("image-similarity", {
//             image1: "YOUR_IMAGE_URL",
//             image2: "YOUR_IMAGE_URL",
//     });
//     console.log(resp);
// })()