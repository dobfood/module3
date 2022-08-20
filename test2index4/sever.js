const http = require('http')
const fs = require('fs')
const qs = require('qs')
const sever = http.createServer(function (req, res) {
            if (req.method === 'GET') {
                fs.readFile('./index.html', function (err, data) {
                    res.writeHead(200, {'Content-type': 'text/html'})
                    res.write(data)
                    return res.end()
                })
            } else {
                let data = ''
                req.on('data', chunk => {
                    data += chunk
                })
                req.on('end', () => {
                    console.log(qs.parse(data));
                    return res.end('Submit')
                });

                req.on('error', () => {
                    console.log('err')
                });
            }
        });
sever.listen(8000,function (){
    console.log('Complete connet localhost:8000')
})

