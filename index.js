const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

//Creating a file with the appendFile method
fs.appendFile("my-name.txt", "Agent Ebimene", (err) => {
  if (err) throw err;
  console.log("Saved");
});
fs.open("my-surname.txt", "w", (err, file) => {
  console.log("saved");
});
fs.writeFile("my-surname.txt", "Engineer Agent Eli", (err) => {
  if (!err) console.log("Saved");
});
const fs = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(3000);

// Using the module to render different files on the same folder

const url = require("url");
const fs = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const file = "." + q.pathname;
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("404 page!");
      }
      res.writeHead(200, { "content-type": "text/html" });
      console.log(file);
      res.write(data);
    });
  })
  .listen(5000);

// Exploring different modules

const uc = require("upper-case");
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(uc.upperCase("hello world"));
    res.end();
  })
  .listen(5000);
