// Blocking or Sync

let fs = require("fs"); //importing filesystem

// read fuke synchronously - so it is blocking i/o
let data = fs.readFileSync('dummy.txt'); //blocking i/o

//will be printed first
console.log(data.toString());

// will be printed at last as the program runds
// line by line and char by char

console.log('==========print ended======');