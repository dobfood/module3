const fs = require('fs')

class ConTroll {
    getTemplate(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf-8', (err, data) => {
                if (err) {
                    reject()
                }
                resolve(data)
            })
        })
    }
}

module.exports = ConTroll