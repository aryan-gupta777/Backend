import fs from 'fs';

setTimeout(() => console.log('Hello from Timer'), 0);
setImmediate(() => console.log('Hello from Immediate'));

console.log('Hello from Top Level Code');
