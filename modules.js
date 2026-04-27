const fs = require('fs');
const os = require('os');


fs.writeFileSync("dummy.txt", 'this is a dummy file for a practics');

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
