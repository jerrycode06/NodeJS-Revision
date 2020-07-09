// const Person = require("./person");

// const person1 = new Person("Jerry", 18);

// person1.greeting();

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  // if (req.url == "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url == "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url == "/api/users") {
  //   const users = [
  //     { name: "Bob the Builder", age: 40 },
  //     { name: "Jerry", age: 20 },
  //   ];
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  //Build File path
  let filePath = path.join(
    __dirname,
    "public",
    req.url == "/" ? "index.html" : req.url
  );
  // console.log(filePath);
  // res.end();

  //Extension of file
  let extname = path.extname(filePath);

  //Initial Content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "img/jpg";
      break;
  }

  //Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`Server Error : ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000; // Pehle ye check karega ki environment variable to nahi hai agr nahi toh 5000 port pe run kar dega

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
