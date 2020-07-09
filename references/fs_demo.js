const fs = require("fs");
const path = require("path");

//Create Folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created...");
// });

//Create and write to File
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File Created...");

//     //File Append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love NodeJS",
//       (err) => {
//         if (err) throw err;
//         console.log("File Created...");
//       }
//     );
//   }
// );

//Read File
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Renamed Successfully");
  }
);
