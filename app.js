const express = require('express')
const UserModel = require('./models/UserModel')
const app = express()
require('dotenv').config()


const PORT = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    UserModel.create()
    res.send(`Tabriklaymiz siz ro'yxatdan o'tdingiz!`)
})

app.listen(PORT, () => console.log(`SERVER READY AT http://localhost:${PORT}`))

// tel name surname age profession address province country