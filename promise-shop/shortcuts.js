'use strict';

//creating a new promise using resolve
let promise = Promise.resolve('It is resolved');

//creating a new promise using reject
let promise1 = Promise.reject(new Error('Error created'));

// Handling the reject of promise1
promise1.catch( (err) => {
    console.error('There is an Error!');
    console.error(err.message);
});
