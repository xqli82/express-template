
module.exports = async app => {
    require('./path')(app)    
    require('./static')(app)
    require('./view')(app)

    require('../utils')(app)

    await app.utils.create(app,"model")
    await app.utils.create(app,"service")
    await app.utils.create(app,"controller")

    require('../app/router')(app)
}