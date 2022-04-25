const { exec } = require("child_process");
const router = require('express').Router()

router.get('/util/backup', (req, res) => {
    var fecha = new Date()
    var x = fecha.getFullYear() + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2) +
        '-' + ('0' + fecha.getDate()).slice(-2)
    console.log(x)
    exec("mongodump --db facturas", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})



module.exports = router