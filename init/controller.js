const { join } = require('path')
module.exports = async app => {
    const p = await app.utils.readdir(app.path.controller)
    const controller = {}
    p.forEach(item => {
        controller[item] = require(join(app.path.controller, item))
    })
    app.controller = controller
}