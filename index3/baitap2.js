const http = require('http')
const sever = http.createServer(function (req,res){
    let text = ''
    if(req.url === "/login"){
        text = "login complete"
    }
    else{
        text = "login falied"
    }
    res.end(text);
}) ;
sever.listen(8090,"localhost")
