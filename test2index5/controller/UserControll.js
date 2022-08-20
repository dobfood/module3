const ConTroll = require("./ConTroller");
const qs = require("qs");


class UserController extends ConTroll {
    ShowAppUserPage(req, res) {
        this.getTemplate('./register/form_register.html').then(data => {
            res.writeHead(200, 'ok', {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
    ShowPageList(req,res){
        this.getTemplate('./register/page_list_user.html').then(data => {
            res.writeHead(200, 'ok', {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
    })
    }
    addUser(req, res) {
        let data = '';
        req.on('data', chunk => {
            data += chunk
        })

        req.on('end', () => {
            let user = qs.parse(data);
            res.writeHead(301,{'Location':'/user'})
            res.end();
        })
    }
    showUser(req,res){
        this.getTemplate('./register/list_user.html').then(data => {
            res.writeHead(200, 'ok', {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }


}

module.exports = UserController
