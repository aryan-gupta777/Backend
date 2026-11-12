const os= require("os")
const path= require("path")
const fs= require("fs")
const { log } = require("console")


console.log("v8 : ",process.versions.v8);
console.log("node : ",process.versions.node);
console.log("libub : ",process.versions.uv);
console.log("--------------------------");

console.log("platform : ", process.platform);
console.log("cpu : ",os.cpus().length);


