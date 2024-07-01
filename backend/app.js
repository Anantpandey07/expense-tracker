const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs') // The fs.readdirSync() method is used to synchronously read the contents of a given directory

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello World')
})

// routes
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

const server = () =>{
    db()
    app.listen(PORT, () => {
        console.log('server is running at port:', PORT)
    })
}

server();
