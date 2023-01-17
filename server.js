// Part 1: Using both the http and fs module, create a server that sends an html page back to the client
// upon request. You must have at minimum two html pages with corresponding routes, and a 404 not found page.

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const { method, url } = req;
    let { statusCode } = res;
    
    if (url == "/" && method == "GET") {
        fs.readFile("homepage.html", (err, contents) => {
            if (err) {
                console.error(err);
            } else {
                res.writeHead(statusCode, { "Content-Type": "text/html" });
                res.write(contents.toString());
                res.end();
                logger(method, url, statusCode);
            }
        })
    } else if (url == "/about" && method == "GET") {
        fs.readFile("aboutpage.html", (err, contents) => {
            if (err) {
                console.error(err);
            } else {
                res.writeHead(statusCode, { "Content-Type": "text/html" });
                res.write(contents.toString());
                res.end();
                logger(method, url, statusCode);
            }
        })
    } else {
        fs.readFile("page-not-found.html", (err, contents) => {
            if (err) {
                console.error(err);
            } else {
                statusCode = 404;
                res.writeHead(statusCode, { "Content-Type": "text/html" });
                res.write(contents.toString());
                res.end();
                logger(method, url, statusCode);
            }
        })
    }
}).listen(3000, () => {
    console.log("Listening on port 3000...");
});

// Part 2: Create a custom logger for accounting for requests to your server. Each time a request event is 
// emitted by your server, send the appropriate html file back, but also log the following information to a
// file: Request method, url, response status code, and timestamp

// The timestamp can be any format you like, but it at least should show the time of day that the
// request was made

function logger (method, url, statusCode) {
    let timeStamp = new Date();
    fs.appendFile("logger.txt", `\n${method} request to ${url} at ${timeStamp}. Status code ${statusCode}.`, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Logged new request to logger.txt")
        }
    })
}