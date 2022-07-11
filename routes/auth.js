// dependency && some semi-global/non server.js  var declarations
const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig')




router.get('/signup', (req, res) => {

    console.log('hey were hitting the route')
    res.render("auth/signup")
})

// ow. issue: [no browser refresh] form was loading the old values that were no longer corresponding to the forms updated '/auth' routing. I kept hitting [CMND <] to go back and i guess it was saving our commands to send routes to /auth/auth/signup. i'm changing this route to house both our auth login and auth signup routes.
// router.post('/', (req, res) => {    
//     console.log("now we're posting")
//     console.log("no object")
//     console.log(req.body)
//     if (req.body.age) {             
//         I wanted to share the post route between login and signup but with passport for now going to get it set up 2 postroutes.
//         db.user.create({
//             username: req.body.username,
//             password: req.body.password,
//             age: req.body.age,
//             email: req.body.email
//         }).then(me => {
//             console.log(me.get())
//             console.log(me.get().age)
//             console.log(me.get().username)
//         })
//         console.log("object format")
//         res.redirect('/auth/signup')
//     }
// if (req.body.age) {             // I wanted to share the post route between login and signup but with passport for now going to get it set up 2 postroutes.
//  })

router.post('/', (req, res) => {
    if (!req.body.age) {
        console.log("we dont even have any age inputs")
        console.log(req.body)
    } else {
        console.log("weve got an age")
    }
    if (req.body.parents) {
    console.log("weve got mom and dad with us")
        console.log('req.body')
        console.log(req.body)
        let strain = req.body.strain
        let taste = req.body.taste
    } else {
        console.log("were receiving data that doesn't have a <input name='parents' data type")
    }
        // strain .create 
    console.log(req.body)
    if (req.body.email) {

    db.user.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            username: req.body.username,
            password: req.body.password,
            age: req.body.age
        }
    }).then(([user, created]) => {
        if (created) {
            // If created, success and redirect back to home
            console.log('hey this is the user')
            console.log(user)
            console.log(`this is the user name ${user.username}`)
            // Flash message
            const successObject = {
                successRedirect: '/',
                successFlash: "We're Going Home"    
            }
            // req.flash('success', 'iloveyou')
            req.flash('success', 'very good')
            passport.authenticate('local', successObject)(req, res)
            // res.redirect('/')
        } else {
            // Email already exists
            console.log('we have a huge problem')
            req.flash('error', 'Email already exists')
            res.redirect('/auth/signup')
        }
    }).catch(err => {
        console.log('Error: ', err)
        // req.flash('error', 'Either email or password is incorrect. Please try again.')
        req.flash('error', 'oh no we have err')
        res.redirect('/auth/signup')
    })
} // if statement end 
})

router.post('/login', passport.authenticate('local', {
    // successRedirect: `https://www.google.com`,
    successRedirect: '/', 
    failureRedirect: '/auth/login',
    // failureRedirect: '/auth/login',
    successFlash: 'Welcome back!',
    failureFlash: 'Either email or password is incorrect. Please try again.'
}))


router.get('/login', (req, res) => {

    res.render('auth/login')
})

router.get('/logout', (req, res) => {
    req.logout( (err) => {
        if ((err) => { return next(err)})
        req.flash('logout', 'Well get you out of here')
        res.redirect('/')
    })
})






// router.post('/', (req, res) => {    // ow. issue: [no browser refresh] form was loading the old values that were no longer corresponding to the forms updated '/auth' routing. I kept hitting [CMND <] to go back and i guess it was saving our commands to send routes to /auth/auth/signup. i'm changing this route to house both our auth login and auth signup routes.
//     console.log("now we're posting")
//     // console.log("no object")
//     console.log(req.body)
//     if (req.body.age) {             // I wanted to share the post route between login and signup but with passport for now going to get it set up 2 postroutes.
//         db.user.findOrCreate({
//         where: { email: req.body.email },
//         defaults: {
//           username: req.body.username,
//           password: req.body.password,
//           age: req.body.age
//         }
//       })
//       .then(([user, created]) => {
//         if (created) {
//             console.log('how we do it')
//           // Flash message
//           const successObject = {
//             successRedirect: '/',
//             successFlash: 'Account created and logged in...'
//           }
//           passport.authenticate('local', successObject) (req, res);
//         } else {
//           // Email already exists
//           req.flash('error', 'Email already exists...')
//           res.redirect('/auth/signup');
//         }
//       })
//       .catch(err => {
//         console.log('Error', err);
//         req.flash('error', 'Either email or password is incorrect. Please try again.');
//         res.redirect('/auth/signup');
//       })
//      }



            // if (created) {
            //     // Flash message
            //     const successObject = {
            //       successRedirect: '/',
            //       successFlash: 'Account created and logged in...'
            //     }
            //     passport.authenticate('local', successObject) (req, res);
            //   } else {
            //     // Email already exists
            //     req.flash('error', 'Email already exists...')
            //     res.redirect('/auth/signup');
            //   }

        // })
        // .catch(console.log('we have a situation'))


module.exports = router