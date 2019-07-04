'use strict';

const promise =  new Promise((fulfill, reject) => {
    setTimeout(() => reject(new Error('REJECTED!')), 300);
});

let onReject = (err) =>  {
    console.log(err.message);
}
 
