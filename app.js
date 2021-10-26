const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const path = require('path')
const { PORT } = require('./config')
const app = express()


// DATABASE CONNECTION
require('./modules/mongoose')

// SETTINGS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// MIDDLEWARES
app.use('/api',express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))
app.use(helmet())

app.get('/api', (req, res)=>{
    res.redirect('/api/signup')
})
// ALL ROUTES
fs.readdir(path.join(__dirname, 'routes'), (err, files)=>{
    files.forEach(file=>{
        const filePath = path.join(__dirname, 'routes', file)
        const Router = require(filePath)
        if(Router.path && Router.router){
            app.use(Router.path, Router.router)
        }
    })
})


// PORT CONNECTION
app.listen(PORT, ()=>{
    console.log(`SERVER IS READY ON PORT ${PORT}`)
})