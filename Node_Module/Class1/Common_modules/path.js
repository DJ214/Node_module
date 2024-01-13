const { Console } = require("console");
const path = require("path");

let extName = path.extname("D:/React Module/practice/src/Component/Practice.jsx");

console.log(extName)

let baseName = path.basename("D:/React Module/practice/src/Component/Practice.jsx");

console.log(baseName);

console.log(__dirname); // current directory

console.log(__filename); // current file path
