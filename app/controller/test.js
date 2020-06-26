module.exports={
    index(req,res){
        req.app.service.test.index()
        req.app.model.test.index()
        res.send('test/index')
    }
}