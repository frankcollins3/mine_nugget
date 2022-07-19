// dependency && some semi-global/non server.js  var declarations
const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig')
const ax = require("axios")



router.get('/signup', (req, res) => {

    // console.log('hey were hitting the route')
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
        // console.log("we dont even have any age inputs")
        // console.log(req.body)
    } else {
        console.log("weve got an age")
    }

    if (req.body.parents) {
    console.log("weve got mom and dad with us")
        // console.log('req.body')
        // console.log(req.body)
        let strain = req.body.strain
        let taste = req.body.taste
    } else {
        console.log("were receiving data that doesn't have a <input name='parents' data type")
    }


    // userkeyword: formName,                // we can use this for user.findOne() where: {formName} userAddStrain 
    //                         strain: ajax.strain,
    //                         dominant: ajax.dominant,
    //                         funfact: ajax.funfact,

        // strain .create 
    // console.log(req.body)
    if (req.body.email) {
        const submittedUser = req.body
      let url = `https://frankcollins3.github.io/strainuous/strain.json`
    ax.get(url).then( (strainData) => {
        db.user.findAll().then( (userdb) => {
            // console.log(userdb)
            const userlen = userdb.length + 1
            // console.log('userlen')            
            // console.log(userlen)            
        // console.log('strainData.data.strains')
        let strains = strainData.data.strains           // was going back & forth with quickly [axio vs ajax] and forgetting ajax.data. should trust eyes when they say there is an API root of [data/or strains]   
        // console.log(strains)
        const strainlength = strains.length
        // let randomNumber = strains[Math.floor(Math.random()*strains.length)-1]      // made a mistake accessing strains first because we are immediately returning that successfully grabbed elem. overlooking the fact we could've just created a variable out of the strains.length without accessing it as well. 
        let n = Math.floor(Math.random()*strains.length)
        let randomStrain = strains[`${n}`]
        console.log('randomStrain')
        console.log(randomStrain)
        // let randomId = randomStrain.strainId
        // console.log('randomId')
        // console.log(randomId)
        
        
        db.strain.findOne({                // this is an auto-seed because we suffer a breaking change trying to create a variable: [strains[0].outerText] and then cant access the mines to create a strain. This is like seeding/auto-generate-data but for every single user.
            where: {
                strain: randomStrain.strain,
            }
        }).then( (newStrain) => {         
            let strainname = newStrain.get().strain
    //     for (let i = 0; i < strains.length ; i++) {  picking a random value instead.
    //         console.log(strains[i].strain)  // those 5 mins feel like forever. was forgetting the [i]
    
    db.user.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            id: parseInt(userlen),
            username: req.body.username,
            password: req.body.password,
            age: req.body.age
        }
    }).then(([user, created]) => {     
        if (created) {
            const successObject = {
                successRedirect: '/',
                successFlash: "We're Going Home"    
            }
            db.usersStrains.create({
                userId: user.id,    
                strainId: newStrain.get().strainId,
            }).then( (nice) => {
                console.log('nice')
                console.log(nice)
                console.log("hey we finally have our new strain")
            })

            req.flash('success', 'very good')
            passport.authenticate('local', successObject)(req, res)
        } else {            
            req.flash('error', 'Email already exists')
            res.redirect('/auth/signup')
        }
    }).catch(err => {
        // console.log('Error: ', err)
        // req.flash('error', 'Either email or password is incorrect. Please try again.')
        req.flash('error', 'oh no we have err')
        res.redirect('/auth/signup')
    })
    })
    })
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
