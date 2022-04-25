const router = require('express').Router()
tipoCambio = require('../modelos/tipoCambio').tipoCambio


router.post('/cambios/nuevo', (req, res) => {
    console.log(req.body)
    var x = new tipoCambio(req.body)

    x.save((err, doc) => {
        res.send(doc)
    })


})
router.get('/cambios/list/day', (req, res) => {
    var fecha = new Date()
    var x = fecha.getFullYear() + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2) +
        '-' + ('0' + fecha.getDate()).slice(-2)
    console.log(x)
    tipoCambio.find({ $and: [{ $or: [{ tz_lock: '0' }, { tz_lock: { $exists: false } }] }, { fechaVal: x }] }, (err, doc) => {
        res.send(doc)
    })
})

router.get('/cambios/list', (req, res) => {
    tipoCambio.find({ $or: [{ tz_lock: '0' }, { tz_lock: { $exists: false } }] }, (err, doc) => {
        res.send(doc)
    })
})

router.get('/cambios/list/:id/:pais', (req, res) => {

    tipoCambio.findOne({ $and: [{ $or: [{ tz_lock: '0' }, { tz_lock: { $exists: false } }] }, { fechaVal: req.params.id }, { pais: req.params.pais }] }, (err, doc) => {
        console.log(err)
        console.log(doc)
        res.send(doc)
    })
})

router.post('/cambios/editar', (req, res) => {
    tipoCambio.update({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
        res.send(doc)
    })
})

module.exports = router