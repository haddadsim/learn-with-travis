'use strict';
//constructing a promise

let promise = new Promise( (fulfill, reject) => {
    //fulfilling promise with "PROMISE VALUE"
    fulfill('PROMISE VALUE');
})

// passing console.log as the success handler to the promise
promise.then(console.log);

console.log("MAIN PROGRAM");