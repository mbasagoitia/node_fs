// Inside of deleteFile.js:
// Require the fs module
// Implement the fs.unlink()
// Run node deleteFile.js

const fs = require("fs");
const file = "HelloWorld.txt"

fs.unlink(file, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Deleted ${file}`);
    }
})