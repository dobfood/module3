const http = require('http')
const URL = 8000
const host = 'localhost'
const url = require('url')
const conTroll = require("./controller/appControll");
const UserController = require("./controller/UserControll");
const sever = http.createServer((req, res) => {
    let urlPath = url.parse(req.url)
    let app = new conTroll()
    let user = new UserController()
    switch (urlPath.pathname) {
        case '/':
            app.showHomepage(req, res);//1
            break;
        case'/user/add':
            user.ShowAppUserPage(req, res)//2
            break;
        case'/user/store':
            user.addUser(req, res)
            break;
        case'/user/info':
            user.ShowPageList(req, res)
            break;
        case'/user':
            user.showUser(req,res)
            break;
        default:
            res.end()
    }

})
sever.listen(URL, host, () => {
    console.log("Run Sever http://localhost:" + URL)
})