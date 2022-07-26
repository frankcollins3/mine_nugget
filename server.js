require('dotenv').config();
const express = require('express');
// const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const SECRET = process.env.SECRET_SESSION;
// console.log(SECRET_SESSION);
const app = express();
// add the isLoggedIn middleware here:
const isLoggedIn = require('./middleware/isLoggedIn');
const { createCanvas, loadImage } = require('canvas')

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
console.log("hi morgan")
console.log(require('morgan'))

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// app.use(require(methodOverride('_method')));

const sessionObject = {
  secret: SECRET,
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionObject));

// initialize Passport and run through middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
// FLASH
// using Flash throughout app to send temp messages to users
const globalVar = (req, res, next) => {
  res.locals.alerts = req.flash()
 res.locals.canvas = { createCanvas, loadImage }
 req.flash()
 res.locals.sessionUser = req.user // res.locals[within rendering/view scope] vs app.locals. which holds the settings for the app.
 next()
}


// middleware
app.use(session(sessionObject))
// app.use(session(cookieObject))
// app.use(cookie())
app.use(globalVar)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())




let getauth = require('./routes/auth')
let getstrains = require('./routes/strain')
const gohome = require('./routes')

app.use('/auth', getauth)
app.use('/strain', getstrains)
app.use('/', gohome)


const PORT = process.env.PORT || 7777;
const server = app.listen(PORT, () => {
  console.log(`insert server pun ${server}`);
});








