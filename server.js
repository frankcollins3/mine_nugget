// COMMON/require('module/npm') JS syntax to import DEPENDENCIES
const env = require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const ejs = require('ejs')
const passport = require('./config/ppConfig')
let routes = require('./routes')
// const layouts = require('express-ejs-layouts') did this on a whim for the vanishing smoke '/strains' '/home' .. I might use layouts but feel that if I leave it on, this app will be locked in to 1 way of being. 
let key1 = process.env.key1 || 'skeletonkey'
let key2 = process.env.key2 || 'openkey'

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// app.get('/db', async (req, res) => {
//     try {
//       const client = await pool.connect();
//       const result = await client.query('SELECT * FROM test_table');
//       const results = { 'results': (result) ? result.rows : null};
//       res.render('pages/db', results );
//       client.release();
//     } catch (err) {
//       console.error(err);
//       res.send("Error " + err);
//     }
//   })


const cookieSession = require('cookie-session')

// const pg = require('pg')
// store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
const session = require('express-session')

const flash = require('connect-flash')

const { createCanvas, loadImage } = require('canvas')// also was considering using canvas with app.use instead of putting into the res.render('index', {canvas]})


// const routes = require('./routes')
const SECRET_SESH = process.env.SECRET_SESSION
const db = require('./models')

// passport = config/ppConfig.js
// express flash
const globalVar = (req, res, next) => {
    res.locals.alerts = req.flash()
   res.locals.canvas = { createCanvas, loadImage }
   req.flash()
   res.locals.sessionUser = req.user // res.locals[within rendering/view scope] vs app.locals. which holds the settings for the app.
   next()
}
// rowdy logger?

// let PORT = process.env.PORT || 7777
// const sessionObject = {
//     // store: new redisStore({ host: 'localhost', port: 6379, client: redisClient,ttl :  260}),
//     secret: SECRET_SESH,
//     // secret: 'mine',
//     resave: false,
//     saveUninitialized: true
// }

// app.use(session(sessionObject))
// app.use(cookie())
// app.use(passport.initialize())
// app.use(passport.session())
app.use(flash())



app.use(cookieSession({
    name: 'session',
    keys: [process.env.key1, process.env.key2],
    maxAge: 24 * 60 * 60 * 1000
}))



// app.use(session(sessionObject));


// MIDDLEWARE
app.set('view engine', 'ejs') 
// const path = require("path");
// app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.static(__dirname + '/public'));

// app.use("/", express.static('public'))
app.use(express.urlencoded({extended: false})) // allows us to parse form data.
// app.use('/', routes)
app.use(globalVar)
    

let getauth = require('./routes/auth')
let getstrains = require('./routes/strain')
const gohome = require('./routes')
const connectPgSimple = require('connect-pg-simple')

app.use('/auth', getauth)
app.use('/strain', getstrains)
app.use('/', gohome)

// module functions
const hello = () => {
    console.log('hello')
}
module.exports = {hello}



let PORT = process.env.PORT || '7777'
app
.listen(PORT)
.on('listening', () => console.log(`smell the server on: ${process.env.PORT || PORT}`)
)

module.exports = app
// app.on('listening', () => console.log(`${process.env.PORT} || ${PORT}`))
