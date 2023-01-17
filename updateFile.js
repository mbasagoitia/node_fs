// Require the fs module
// Using the appendFile() function, append some text to the end of your HelloWorld.txt
// Run node update.js

const fs = require("fs");
const file = "HelloWorld.txt";
const newText = "My name is Marika";


fs.appendFile(file, newText, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Appending ${newText} to ${file}.`);
    }
})