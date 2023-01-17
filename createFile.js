// Require the fs module
// Implement the fs.writeFile() function, creating a txt file called HelloWorld.txt, with Hello, World! inside
// Use the async version
// Run node createFile.js to create the file

const fs = require("fs");
const fileName = "HelloWorld.txt";
const text = "Hello World";

fs.writeFile(fileName, text, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Successfully wrote ${text} to new file ${fileName}.`);
    }
})

