// Require the fs module
// Implement the fs.readFile()
// You can either read the contents of the HelloWorld.txt file, or any other file you create in your project
// Run node readFile.js to read the file to the console

const fs = require("fs");

fs.readFile("HelloWorld.txt", (err, contents) => {
    if (err) {
        console.error(err);
    } else {
        console.log(contents.toString());
    }
});