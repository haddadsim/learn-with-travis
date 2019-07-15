'use strict';
//function to attach DR. Prefix

let attachTitle = (val) => {
    return "DR. " + val;
}

//Chaining promises together

let promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);