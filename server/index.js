require('./database/db')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const user = require('./routes/userRoutes')
const project = require('./routes/projectRoutes')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(5000, () => { console.log("Server started at 5000 port") })


app.use('/', user)
app.use('/',project)