const path = require('path');

//Base name of the file
console.log(path.basename(__filename))

//Director of the file
console.log(path.dirname(__dirname))

//File extension
console.log(path.extname(__filename))

//Path Object
console.log(path.parse(__filename))

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'))