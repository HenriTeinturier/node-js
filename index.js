const path = require("path");

console.log(path.resolve("folder1", "folder2", "index.html"));
// => C:\Users\user\Desktop\nodejs\folder1\folder2\index.html

console.log(path.resolve("/folder1", "folder2", "index.html"));
// => folder1\folder2\index.html

console.log(path.resolve("/folder1", "//folder2", "index.html"));
// => folder2\index.html

console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// => index.html

console.log(path.resolve(__dirname, "data.json"));
// => C:\Users\user\Desktop\nodejs\data.json
