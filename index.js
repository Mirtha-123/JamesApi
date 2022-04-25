const
	express = require('express'),
	body = require('body-parser'),
	morgan = require('morgan')
app = express()
path = require('path'),
	require('dotenv').config()
// ROUTES
rou1 = require('./routes/clientes.js')
rou2 = require('./routes/facturas.js')
rou3 = require('./routes/tipoCambio.js')
rou4 = require('./routes/util.js')
//login = require('./routes/login.js')


//var jwt = require('jsonwebtoken')
// SERVER
server = require('http').Server(app);

// SESIONES
//session = require('express-session'),

	// COOKIE
//	cookie = require('cookie-parser'),
//	cookiesession = require('cookie-session')

// FORMULARIOS
cors = require('cors')

// SOCKET IO
//var io = require('socket.io')(server)

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(morgan('dev'))
//app.use(cookie())

// CABECERAS

app.use("/cel", function (req, res, next) {

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// SESION
/*app.use(session({
	secret: 'SC',
	resave: false,
	saveUninitialized: false

}))*/

// FORMULARIOS
app.use(body.json())
app.use(body.urlencoded({ extended: false }));

//static files
app.use(express.static(path.join(__dirname, 'dist')))
//app.use(express.static(path.join(__dirname, 'elite-angular-lite/dist')))
//app.use(express.static(path.join(__dirname, 'angular/views/dist/views')))

//static server
//routes



//app.use(rutas);

// RUTAS
//app.use('/logeo', login)
/*
app.use('/', (req, res, next) => {
	console.log(req.headers)
	const beareHeader = req.headers['authorization']

	if (typeof beareHeader !== 'undefined') {
		const bearer = beareHeader.split(' ')
		const bearerToken = bearer[1]
		req.token = bearerToken;
		jwt.verify(req.headers['id_tok'], bearerToken, (err, data) => {
			if (err) {
				
				res.sendStatus(403)
			} else {
			
				next()
			}
		})
	} else {
		res.sendStatus(403)
	}
})*/
app.use('/', rou1)
app.use('/', rou2)
app.use('/', rou3)
app.use('/', rou4)

var conexiones = []
var usuarios = []
/*io.on('connection', function (socket) {
	conexiones.push(socket)
	console.log('cliente conectado', conexiones.length)


	socket.on('mensajecliente', function (data) {

		if (data.mensaje.estado == false) {
			console.log(String(data.mensaje.gpio))
			client.publish(String(data.mensaje.gpio), 'on')
		} else {
			console.log(String(data.mensaje.gpio))
			client.publish(String(data.mensaje.gpio), 'off')
		}
		io.sockets.emit('lucesss', data)

	})
	socket.on('message', function (data) {
		io.sockets.emit('cel', data)
		console.log(data)
	})

	//disconect

	socket.on('disconnect', function () {
		io.emit('user disconnected');
		conexiones.splice(conexiones.indexOf(socket), 1)
		console.log("desconectado", conexiones.length)
	});
})
*/
//verificador

server.listen(app.get('port'), () => {
	console.log("servidor escuchando" + app.get('port'))
})

