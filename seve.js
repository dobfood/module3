const http = require('http');
const fs = require('fs');
const qs = require('qs');
const url = require('url');
const bodyParser = require('body-parser');
const UserManager = require('./public/YserManager')
const port = 2212;
let user = new UserManager()
let sever = http.createServer((req,res)=>{
        fs.readFile('./view/index.html','utf-8',(err,data)=>{
            res.writeHead(200,'ok',{'Content-type':'text/html'})
            res.write(data)
            let urlPath = url.parse(req.url).pathname;
            switch (urlPath) {
                case'/':
                    user.ShowHomePage(req,res)
                    break;
                default:
                    res.end()
                    break;
            }
        })

})
sever.listen(port,"localhost",()=>{
    console.log("run http://localhost:"+port)
})
