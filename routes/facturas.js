const router = require('express').Router()
factura = require('../modelos/facturas').facturas


router.post('/facturas/nuevo', (req, res) => {
    console.log(req.body)
    var x = new factura(req.body)

    x.save((err, doc) => {
        res.send(doc)
    })


})


router.get('/facturas/list', (req, res) => {
    facturas.find({ $or: [{ tz_lock: '0' }, { tz_lock: { $exists: false } }] }, (err, doc) => {
        res.send(doc)
    })
})
router.post('/facturas/editar', (req, res) => {
    facturas.update({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
        res.send(doc)
    })
})

module.exports = router