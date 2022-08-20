const http= require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder
let  sever = http.createServer(function (req,res){
    const decoder = new StringDecoder('utf8')
    let buffer = '';
    // cho tham so voi gia tri cho reques (GET)
    /*
    const parseUrl = url.parse(req,url,true);
    const queryStringObject = parseUrl.query;
    res.end('hello');
    console.log(queryStringObject')

     */
    //gui du lieu cho sever theo dang json (POST)
    req.on('data',(data) => {
        buffer += decoder.write(data)
    });
    req.on('end',(end)=>{
        buffer += decoder.end();
        res.end("hello")
        console.log(buffer)
    })
})
sever.listen(3000,'localhost',function (){
    console.log('sever ')
})