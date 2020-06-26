module.exports = app => {
    const {controller} = app

    app.get('/test',controller.test.index)
}
