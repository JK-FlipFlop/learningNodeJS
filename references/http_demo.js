const http = require('http')

//Create Server
http.createServer((req,res) => {
    //Write Response
    console.log("before write function")
    res.write('Hello World')
    console.log('after write')
    res.end()
    console.log("after end")
    console.log("-----------------------")
}).listen(3000, () => {
    console.log("Welcome")
    console.log("Server Running...")
})