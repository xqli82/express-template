module.exports = app => {
    const {controller} = app

    app.get('/',controller.user.index)
}
