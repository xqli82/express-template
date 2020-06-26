const fs = require('fs')
const { basename } = require('path')
function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) =>{
            if (err) {
                reject('err')
                throw "read dir failed"
            } else {
                resolve(files.map(item => {
                    return basename(item, '.js')
                }))
            }
        })
    })
}

module.exports = readdir