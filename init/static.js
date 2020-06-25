const express = require('express')

module.exports = app => {
    app.use('static', express.static(app.path.public))
}
