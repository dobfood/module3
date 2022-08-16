const fs = require('fs')

class UserManager {
    async ShowHomePage(req, res) {
        fs.readFile('./data.json', (err, data) => {
            let dataJson = JSON.parse(data);
            let html = '';
            dataJson.forEach((item, index) => {
                html += `<tr>`
                html += `</td>${index + 1}`;
                html += `<td>${item.ID}</td>`;
                html += `<td>${item.name}</td>`;
                html += `<td>${(item.role == 1) ? 'admin' : 'user'}</td>`;
                html += `</tr>`;
            })

        })
    }
    callUser(req,res){
        return new Promise((resolve, reject) => {
            if('err'){
                reject()
            }
        })
    }
}

module.exports = UserManager