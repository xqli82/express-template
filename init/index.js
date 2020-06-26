
module.exports = async app => {
    require('./path')(app)    
    require('./static')(app)
    require('./view')(app)

    require('../utils')(app)
    await require('./controller')(app)
    
    require('../app/router')(app)
}