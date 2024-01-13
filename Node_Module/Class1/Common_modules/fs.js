const fs = require("fs"); // fs --> File system

// console.log(fs);


// Read , write , update and delete a file using fs module


// fs.writeFileSync("file1.txt","Hey I am file data of file 1");


// let contentOfFileOne = fs.readFileSync("file1.txt");
// console.log(contentOfFileOne+"");

// let contentOfFileTwo = fs.readFileSync("file2.txt");
// console.log(contentOfFileTwo+"");

// fs.appendFileSync("file1.txt"," want to add some more data");

// fs.unlinkSync("file2.txt");



// Create and delete a directory(Folder)


if(!fs.existsSync("myDirectory"))
    fs.mkdirSync("myDirectory")

if(!fs.existsSync("myDirectory2"))
    fs.mkdirSync("myDirectory2")

// if(fs.existsSync("myDirectory"))
//     fs.rmdirSync("myDirectory")
