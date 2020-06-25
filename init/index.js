
module.exports = app => {
    require('./path')(app)    
    require('./static')(app)
    require('./view')(app)

    require('../utils')(app)
    require('./controller')(app)

    setTimeout(() => {
        require('../app/router')(app)
    }, 1000);
}