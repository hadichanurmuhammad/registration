const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})

app.listen(3000, () => console.log(`SERVER READY AT http://localhost:3000`))

// tel name surname age profession address province country