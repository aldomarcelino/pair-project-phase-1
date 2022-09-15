const b = require("bcryptjs");

let hash = b.hashSync("bismillah", 9);

console.log(hash);

console.log(new Date().toISOString().slice(0, 10));
