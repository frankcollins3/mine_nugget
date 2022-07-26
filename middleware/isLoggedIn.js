module.exports = (req, res, next) => {
    if (!req.user) {    // res.locals.sessionUser
        res.render('/auth/signup')
    } else {
        next()
    }
}