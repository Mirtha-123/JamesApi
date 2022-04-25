var mongoose = require('mongoose')
    , Schema = mongoose.Schema

mongoose.connect(process.env.DB_MONGO)
    .then(db => console.log("Db is connected", db.connection.host))
    .catch(err => console.log(err));
//mongoose.connect('mongodb://superAdmin:pass1234@167.99.2.159:27017/sulem?authSource=admin', { useNewUrlParser: true });
var tipoCambio = Schema({
    fecha: Date,
    fechaVal: String,
    cambio: String,
    pais: String,
    moneda: String,
    created_at: { type: Date, required: true, default: Date.now },
    tz_lock: { type: String, default: '0' }
})

var cli = mongoose.model('tipoCambios', tipoCambio)

module.exports.tipoCambio = cli