const { join } = require('path')

module.exports = async (app,name) => {
    const p = await app.utils.readdir(app.path[name])
    const obj = {}
    for (item of p) {
        obj[item] = require(join(app.path[name], item))
    }
    app[name] = obj
}