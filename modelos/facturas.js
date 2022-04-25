var mongoose = require('mongoose')
    , Schema = mongoose.Schema

mongoose.connect(process.env.DB_MONGO)
    .then(db => console.log("Db is connected", db.connection.host))
    .catch(err => console.log(err));
//mongoose.connect('mongodb://superAdmin:pass1234@167.99.2.159:27017/sulem?authSource=admin', { useNewUrlParser: true });
var facturas = Schema({
    nrocliente: { type: Schema.Types.ObjectId, ref: 'clientes' },
    cliente: String,
    fecha: Date,
    fechaVal: String,
    proveedor: String,
    numFactura: String,
    bsCombustible: String,
    numFactura2: String,
    arCombustible: String,
    numFactura3: String,
    clCombustible: String,
    numFactura4: String,
    bsMantenimiento: String,
    numFactura5: String,
    arMantenimiento: String,
    urMantenimiento: String,
    bsPeaje: String,
    arPeaje: String,
    clPeaje: String,
    urPeaje: String,
    numFactura6: String,
    bsSeguros: String,
    numFactura7: String,
    bsOtrosGastos: String,
    numFactura8: String,
    arOtrosGastos: String,
    numFactura9: String,
    clOtrosGastos: String,
    urOtrosGastos: String,
    numRecibo: String,
    argentinos: String,
    numFactura10: String,
    bsComunicacion: String,
    arComunicacion: String,
    clComunicacion: String,
    cambios: Array,
    created_at: { type: Date, required: true, default: Date.now },
    tz_lock: { type: String, default: '0' }
})

var cli = mongoose.model('facturas', facturas)

module.exports.facturas = cli