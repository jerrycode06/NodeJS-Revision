const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=1000&status=active"
);

//Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host(Root Domain)
console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname); //does not include port

//Pathname
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add Params
myUrl.searchParams.append("abc", "123");

console.log(myUrl.searchParams);

//Loop Through Params
myUrl.searchParams.forEach((value, name) => {
  console.log(`{name} : ${value}`);
});
