const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();
massive(CONNECTION_STRING).then(db => app.set('db', db));

app.use(bodyParser.json())

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`)
})