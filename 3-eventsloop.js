// import events module
let events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
eventEmitter.on("onReportGenerated",(data)=>{
    console.log('Inside on Report generated');
    console.log(data);
});

console.log("Before last line");

eventEmitter.emit("onReportGenerated","test");

console.log("Program End");