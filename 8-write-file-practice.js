const fs = require('fs');
let events = require('events');

var eventEmitter = new events.EventEmitter();
const content = 'NodeJs is Awesome';


eventEmitter.on("onFileWritingSuccess", () => {
    console.log('Inside on Report generated');
    fs.readFile('example.txt',(err,data)=>{
        if(!err){
            console.log(data.toString());
        }else{
            console.log(err);
        }
    });    
});

fs.writeFile('example.txt', content, (err) => {
    if (!err) {
        console.log('File writing over');
        eventEmitter.emit('onFileWritingSuccess');
    } else {
        console.log(err);
    }
});