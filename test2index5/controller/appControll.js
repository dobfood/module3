const ConTroll = require("./ConTroller");

class AppConTroll extends ConTroll{

    showHomepage(req, res)  {
        this.getTemplate('./register/index.html').then(data => {
            res.writeHead(200, 'ok', {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })}
}
module.exports = AppConTroll