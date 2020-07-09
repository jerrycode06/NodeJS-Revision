const path = require("path");

//Base File Name
console.log(__filename);
console.log(path.basename(__filename)); //Use of path module

//Directory Name
console.log(path.dirname(__filename));

//File Extension Name
console.log(path.extname(__filename)); //Gives us the extension

//Create path object
console.log(path.parse(__filename));

//Concatenate Paths -- use to join paths
console.log(path.join(__dirname, "test", "test.html"));
