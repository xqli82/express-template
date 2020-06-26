const path = require('path')

const rootPath = path.resolve()

const utilsPath = path.join(rootPath, 'utils')
const publicPath = path.join(rootPath, 'app', 'public')
const viewsPath = path.join(rootPath, 'app', 'views')
const controllerPath = path.join(rootPath, 'app', 'controller')
const servicePath = path.join(rootPath, 'app', 'service')
const modelPath = path.join(rootPath, 'app', 'model')


module.exports = app => {
    app.path.root=rootPath
    app.path.utils = utilsPath
    app.path.public = publicPath
    app.path.views = viewsPath
    app.path.controller = controllerPath
    app.path.service = servicePath
    app.path.model = modelPath

}