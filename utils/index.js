module.exports = app => {
    app.utils={
        readdir:require('./readdir'),
        create:require('./create')
    }
}