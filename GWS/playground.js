const b = require("bcryptjs");

let hash = b.hashSync("bismillah", 9);

console.log(hash);

console.log(new Date().toISOString().slice(0, 10));

let distance = Math.ceil(Math.random()*20);
console.log(Math.ceil(Math.random()*7) + 1);