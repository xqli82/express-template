const path = require('path')

const rootPath = path.resolve()
const publicPath = path.join(rootPath, 'app', 'public')
const viewsPath = path.join(rootPath, 'app', 'views')
const controllerPath = path.join(rootPath, 'app', 'controller')
const servicePath = path.join(rootPath, 'app', 'service')
const utilsPath = path.join(rootPath, 'utils')

module.exports = app => {
    app.path.public = publicPath
    app.path.views = viewsPath
    app.path.controller = controllerPath
    app.path.service = servicePath
    app.path.utils = utilsPath
}