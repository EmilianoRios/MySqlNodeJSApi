const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM protocolo_personal', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO protocolo_personal set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('Personal guardado!')
        })
    })
})

module.exports = routes