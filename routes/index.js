// dependency
const router = require('express').Router()

// middleware 
router.use('/', (req, res) => {
    console.log("hey home route")
    console.log('************* proving successful app.use with sessionUser **********')
    console.log(res.locals.sessionUser)
    console.log('************* proving successful app.use with sessionUser **********')
    req.flash('success', 'welcome')
    res.render('index', {
        user: res.locals.sessionUser || 'harry singh'
    })
})

module.exports = router;