const b = require("bcryptjs");

let hash = b.hashSync("makan", 9);

console.log(hash);
