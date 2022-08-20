const http = require('http');
const fs = require('fs');
let sever = http.createServer(((req, res) => {
    fs.readFile('./temple.html','utf-8',function(err,str){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'})
            return res.end('404 Not Found')
        }let username = "User"
        str = str.replace(`{username}`,username)
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(str);
        return res.end()
    })
}))
sever.listen(8000, function () {
    console.log(`sever running in http:localhost:8000`)
})
