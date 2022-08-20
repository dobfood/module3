const http = require('http')
const fs = require('fs')
const qs = require('qs')
const sever = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./register.html', function (err, data) {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            return res.end()
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            const userInfo = qs.parse(data)
            fs.readFile('./info.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{name}', userInfo.name);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end()
            })
        })
        req.on('error', () => {
            console.log('error')
        });
    }

});
sever.listen(8000, function (){
    console.log('localhost:8000')
})