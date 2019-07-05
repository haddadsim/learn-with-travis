//console.log(process.argv);
let sum = Number (process.argv[2]);

for(i = 3; i < process.argv.lenght; i++){
    sum += Number(process.argv[i]);
}

console.log(sum);   