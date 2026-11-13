import fs from "fs";

import crypto from "crypto";

const start = Date.now();

setTimeout(() => console.log("Hello from Timer"), 0);
setImmediate(() => console.log("Hello from Immediate"));

fs.readFile("sample.txt", "utf-8", function (err, data) {
  console.log(`File Reading Complete...`);

  setTimeout(() => console.log("Time 2"), 0);
  setTimeout(() => console.log("Time 3"), 0);
  setImmediate(() => console.log("Immediate 2"));

  crypto.pbkdf2("password 1", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 1 is hashed...`, Date.now() - start);
  });

  crypto.pbkdf2("password 2", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 2 is hashed...`, Date.now() - start);
  });

  crypto.pbkdf2("password 3", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 3 is hashed...`, Date.now() - start);
  });

  crypto.pbkdf2("password 4", "salt", 500000, 1024, "sha256", () => {
    console.log(`Password 4 is hashed...`, Date.now() - start);
  });
  crypto.pbkdf2("password 5", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 5 is hashed...`, Date.now() - start);
  });

  crypto.pbkdf2("password 6", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 6 is hashed...`, Date.now() - start);
  });

  crypto.pbkdf2("password 7", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 7 is hashed...`, Date.now() - start);
  });

  crypto.pbkdf2("password 8", "salt", 50000, 1024, "sha256", () => {
    console.log(`Password 8 is hashed...`, Date.now() - start);
  });
});

console.log("Hello from Top Level Code");

// $env:UV_THREADPOOL_SIZE=1; node ./5-five.js (powershell)
