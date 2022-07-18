// COMMON/require('module/npm') JS syntax to import DEPENDENCIES
const env = require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const ejs = require('ejs')
const passport = require('./config/ppConfig')
let routes = require('./routes')
// const layouts = require('express-ejs-layouts') did this on a whim for the vanishing smoke '/strains' '/home' .. I might use layouts but feel that if I leave it on, this app will be locked in to 1 way of being. 
const session = require('express-session')
const flash = require('connect-flash')

const { createCanvas, loadImage } = require('canvas')// also was considering using canvas with app.use instead of putting into the res.render('index', {canvas]})















// const routes = require('./routes')
// const SECRET_SESH = process.env.SECRET_SESSION
const db = require('./models')

// passport = config/ppConfig.js
// express flash
// rowdy logger?

// let PORT = process.env.PORT || 7777
const sessionObject = {
    // secret: SECRET_SESH,
    secret: 'mine',
    resave: false,
    saveUninitialized: true
}


app.use(session(sessionObject))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// app.use(session(sessionObject));


// MIDDLEWARE
app.set('view engine', 'ejs') 
const path = require("path");
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false})) // allows us to parse form data.
// app.use('/', routes)
app.use( (req, res, next) => {
    res.locals.hey = 'hey'
     res.locals.alerts = req.flash()
    res.locals.canvas = { createCanvas, loadImage }
    req.flash()
    res.locals.sessionUser = req.user // res.locals[within rendering/view scope] vs app.locals. which holds the settings for the app.
    next()
})




app.use('/auth', require('./routes/auth'))
app.use('/strain', require('./routes/strain'))
app.use('/', require('./routes'))
// app.use('/', routes)




let PORT = process.env.PORT || '7777'
app
.listen(PORT)
.on('listening', () => console.log(`smell the server on: ${process.env.PORT || PORT}`)
)

module.exports = app
// app.on('listening', () => console.log(`${process.env.PORT} || ${PORT}`))
