const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {

    /*Not a recommended way of loading files but for getting a feel how all things are done is great

        // if(req.url === '/')
        // {
        //     fs.readFile(path.join(__dirname,'public','index.html'), (err,content) => {
        //         if(err) throw err
        //         res.writeHead(200, { 'Content-Type' : 'text/html'})
        //         res.end(content)
        //     })
        // }

        // if(req.url === '/about')
        // {
        //     fs.readFile(path.join(__dirname,'public','about.html'), (err,content) => {
        //         if(err) throw err
        //         res.writeHead(200, {'Content-Type' : 'text/html' })
        //         res.end(content)
        //     })
        // }

        // if(req.url === '/api/users')
        // {
        //     const users = [
        //         { name : 'Jai Kapur', age : 22 },
        //         { name : 'John Doe', age : 32 }
        //     ]

        //     res.writeHead(200, {'Content-Type' : 'application/json' })
        //     res.end(JSON.stringify(users))
        // }

    */

    //Building the path
    let filePath = path.join(__dirname,'public', req.url === '/' ? 'index.html' : req.url )

    //Getting extension of the file
    let extensionName = path.extname(filePath)

    //Initial Content Type
    let contentType = 'text/html'

    //Check extension and change content type
    switch(extensionName)
    {
        case '.js': contentType = 'text/javascript'
                    break;
                
        case '.css': contentType = 'text/css'
                    break;  
                    
        case '.json': contentType = 'application/json'
                    break;

        case '.png': contentType = 'image/png'
                    break;

        case '.jpg': contentType = 'image/jpg'
                    break;
    }

    //Read file
    fs.readFile(filePath, (err,content) => {
        if(err)
        {
            //404 page not found error
            if(err.code === 'ENOENT')
            {
                //reading the 404.html file and loading the content on the page
                fs.readFile(path.join(__dirname,'public','404.html'), (err,content) => {
                    if(err) throw err
                    res.writeHead(200, {'Content-Type' : 'text/html'})
                    res.end(content)
                })
            }
            else
            {
                //Some kind of server error
                res.writeHead(500)
                //Showing the error code itself
                res.end(`Server Error: ${err.code}`)
            }
        }
        else
        {
            //Success (No error)
            res.writeHead(200, {'Content-Type' : contentType})
            res.end(content,'utf8')
        }
    })


})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})