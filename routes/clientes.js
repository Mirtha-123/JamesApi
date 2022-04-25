const router = require('express').Router()
cliente = require('../modelos/clientes').client


router.post('/clientes/nuevo', (req, res) => {
    console.log(req.body)
    var x = new cliente(req.body)

    x.save((err, doc) => {
        console.log(doc)
        console.log(err)
        res.send(doc)
    })


})


router.get('/clientes/list', (req, res) => {
    cliente.find({ $or: [{ tz_lock: '0' }, { tz_lock: { $exists: false } }] }, (err, doc) => {
        res.send(doc)
    })
})
router.post('/clientes/editar', (req, res) => {
    cliente.update({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
        res.send(doc)
    })
})

module.exports = router