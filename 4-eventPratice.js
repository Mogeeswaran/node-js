let events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on("onLoadingDashboard", () => {
    console.log("Please wait while loading Dashboard");
});

eventEmitter.on("onSuccessfullLogin", () => {
    console.log("Logged in Successfully")
    eventEmitter.emit("onLoadingDashboard");
});

eventEmitter.emit("onSuccessfullLogin");






