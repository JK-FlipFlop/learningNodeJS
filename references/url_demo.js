const myUrl = require('url')

const url = new URL("https://mywebsite.com/hello.html?id=100&status=active")

//  Serialized url
console.log(url.href);

//Host (root domain)
console.log(url.host)

//Host Name (doesn't give the port number)
console.log(url.hostname)

//Path Name
console.log(url.pathname)

//Serialized query
console.log(url.search)

//Parms object
console.log(url.searchParams)

//Append params
url.searchParams.append('abc','123')

//Loop through the param object
url.searchParams.forEach((name,value) =>{
    console.log(`${name} : ${value}`)
})