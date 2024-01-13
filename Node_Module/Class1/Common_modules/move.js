const path = require("path");
const fs = require("fs");




let srcPath = "D:/Node_Module/Common_modules/myDirectory/file.md";

let destDirectory = "D:/Node_Module/Common_modules/myDirectory2";

let baseNameOfFileToBeCopied = path.basename(srcPath);

// console.log(baseNameOfFileToBeCopied);

// let destPath = destDirectory + "/" + baseNameOfFileToBeCopied
let destPath  = path.join(destDirectory,baseNameOfFileToBeCopied)

// console.log(destPath);

fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);

console.log("File has been moved");



