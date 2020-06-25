module.exports = app => {
    app.engine('html', require('express-art-template'));
    app.set('views', app.path.views);
    app.set('view engine', 'art');
}
