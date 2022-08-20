const http = require('http')
const fs = require('fs')
const qs = require('qs')
let view = 8000
let name = 'localhost'
let sever = http.createServer((req, res) => {
    // let data = '';
    // let html = '';
    let methodRequest = req.method;
    // fs.readFile('./data.txt', 'utf8', (erq, str) => {
    //     data = str.split(',')
    //     data.forEach((value, index) => {
    //         html += '<tr>'
    //         html += `<td>${index + 1}</td>`
    //         html += `<td>${value}</td>`
    //         html += `<td><button class="btn btn-danger" >Delete</button></td>`
    //         html += `</tr>`
    //     })
    // })
    if (methodRequest === 'get') {
        fs.readFile('./view/index.html', 'utf8', (err, data) => {
            res.writeHead(200, 'ok', {'Content-type': 'text/html'})
            // data = data.replace('{list-user}', html)
            res.write(data)
            return res.end()
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            let name = qs.parse(data).name
            fs.writeFile('./data.txt', name, err => {
                if (err) {
                    console.log('err')
                    return
                }
                return res.end('creat')
            })
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})
sever.listen(view, name, () => {
    console.log('run http://localhost:' + view)
})