const fs = require("fs");

//  creating a new file
// fs.writeFileSync("read.txt", "Mayank");
// fs.writeFileSync("read.txt", "Mayank Verma");

// fs.appendFileSync("read.txt", " how r u are u feeling well");

// const buffered_data = fs.readFileSync("read.txt");
// console.log(buffered_data);
// <Buffer 4d 61 79 61 6e 6b 20 56 65 72 6d 61 20 0a 0a 20 68 6f 77 20 72 20 75 20 61 72 65 20 75 20 66 65 65 6c 69 6e 67 20 77 65 6c 6c 20 68 6f 77 20 72 20 75 ... 46 more bytes>

// const origional_data = buffered_data.toString();
// console.log(origional_data);

// RENAME A FILE
fs.renameSync("read.txt", "readwrite.txt");
