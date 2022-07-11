const db = require('../models')
// const { router } = require('../server') wow went 3 hours with this issue while having other issues with ajax and form. I usually dont get too fooled by these now but wow I spent 20 mins trying to find&fix and since no features were breaking I continued. A day and a half later I see this. 

let strainRouter = require('express').Router()

strainRouter.get('/', (req, res) => {
    // console.log('hey cutie')
    const user = res.locals.sessionUser || 'undefined user'
    const ejsuser = {
        username: user.username || 'no username',
        age: user.age || 'no age',
        email: user.email || 'no email'
    }
    db.strain.findAll().then(async (allDb) => {
        // console.log('allDb')
        // console.log(allDb)
        // let user = {
            //     username: sessionUser.username,
            //     age: sessionUser.age.toString()
            // // }
            // "strain": "wedding cake",
            // "dominant": "indica",
            // "funfact": "leafly strain of year 2019",
            // "parents": "triangle kush, animal mints",
            await db.strain.findOrCreate({
                where: {
                    strain: 'wedding cake',
                    dominant: 'indica',
                    funfact: 'leafly strain of year 2019',
                    parents: 'triangle kush, animal mints'
                }
            })

            let allDB = allDb // || {strain: 'no strains'}
            req.flash('age', 'SAFETY FIRST: Are you 18 years or older?')
            res.render("strain", {
                ejsuser,
                allDB     
            })
        })
})

strainRouter.get('/familytree', (req, res) => {
    // [ore or ore] not a bad name for the gold-nugget themed game.
    res.render('familytree') // more ideal to tuck these in a strain/folder.
})





strainRouter.post('/', (req, res) => {      // i was going to do a set of input based conditional logic to allow 1 post route to share many different sources of information. 
    // strainID!
    console.log("WE ARE HITTING THE REGULAR STRAIN ROUTE!")
    
    // let user = req.body.user
    // console.log('user.username')
    // console.log(user.username)

    let userData = req.body.userkeyword     
    // we sent the userData over, invisibly appended it to the footer, grabbed the outerText from jqObj, now its here

    let strain = req.body.strain
    let dominant = req.body.dominant
    let funfact = req.body.funfact
    let parents = req.body.parents

    let taste = req.body.taste
    let smell = req.body.smell
    let cbd = parseInt(req.body.cbd)
    let thc = parseInt(req.body.thc)
    let gold = req.body.gold
    let nugget = req.body.nugget
    db.user.findOne({
        where: { username: userData}        
    }).then(async (dbUserData) => {
        // console.log('true or false')
        console.log(await db.strain.findOne({where:{strain: strain}}))
        if (await db.strain.findOne({where:{strain:strain}}) == null) {
            // console.log("false we dont have one")
            dbUserData.createStrain({
                strain: strain,
                dominant: dominant,
                funfact: funfact,
                parents: parents
            }).then( (strain) => {
                db.strain.findOne({
                    where: { strain: strain.strain }
                }).then( (dbstrain) => {
                    // console.log('MOST IMPORTANT!!! userData.create')
                    dbstrain.update({ strainId: dbstrain.id}, {     // could've specified strainId in api. just wanted to do a manual autoIncrement.
                        where: { strainId: null}
                    })
                        .then( (updatedstrain) => {
                        // console.log("updatedstrain")
                        // console.log(`UPDATED STRAIN: ${updatedstrain.strain}`)
                        
                        db.strain.findOne({
                            where: { 
                                strain: updatedstrain.strain
                            }
                        }).then( (dbstrain2) => {
                            // console.log('dbstrain2')
                            // console.log(dbstrain2)
                            // taste smell cbd thc gold nugget
                            dbstrain2.createEffect({
                                    taste: taste,       // 10 minute zinger w/ the unneeded where:{whereObject} that you'd use in findOrCreate
                                    smell: smell,
                                    cbd: cbd, 
                                    thc: thc,
                                    gold: gold,
                                    nug: nugget
                                
                            }).then( (addedEffect) => {
                                // console.log('addedEffect')
                                // console.log(addedEffect)
                                db.effect.findOne({
                                    where: { taste: addedEffect.taste }
                                }).then( (dbEffect) => {
                                    dbEffect.update({ strainId: dbstrain2.strainId}, {
                                        where: { strainId: null }
                                    }).then( (updatedEffect) => {
                                        // console.log(updatedEffect)
                                        // console.log(updatedEffect.smell)
                                        // console.log("atleast we got all the way down over here")
                                    })
                                }) // dbEffect
                            })  
                            // addedEffect.then
                        }) // dbstrain2 end

                    })
                })
            })
        } else {
            console.log("weve already saved this strain")
        }
        // db.strain.findOrCreate({
        //     where: {
        //         strain: strain,
        //         dominant: dominant,
        //         funfact: funfact,
        //         parents: parents,
        //     }
        // }).then( (strain) => {
            // console.log(dbData.get())
            // console.log(strain.get().strain)
            // console.log(dbData.get().email)
        })
    })

    strainRouter.post('/digmine', async (req, res) => {
        console.log("we are hitting the digmine route our .submit() is successful")
        if (req.body.mine) {
            console.log(req.body)
            console.log('weve got a mine and this is successful so far')
            let preFindOneStrain = req.body.strainKeyword
            let review = req.body.mine
            if (await db.mine.findOne({ where: { review }}) == null) {
                console.log("weve got a null")
                db.strain.findOne({
                    where: { strain : preFindOneStrain }
                }).then( (strainInIfBlock) => {
                    console.log(strainInIfBlock.get())

                    let idForStrain = strainInIfBlock.strainId
                    console.log('idForStrain')
                    console.log(idForStrain)
                    strainInIfBlock.createMine({
                    // making [executive?] judgment call: it took 6 months building a pokedex i just built and about 6 days to get here. I now wonder why theres going to be a title for this review and i'm willing to let this be one of those "bugs"/non-100%-sensible things. I could have an input pop up requesting "title data"()=> then .input.onclick ---> input.mine comes up. I spent good 5 hours making sure the input popping up and .effectContainer.leave looks okay and is fluid, non-obnoxious, natural feeling. Too much hovering, there is no emphasis/importance to this mine review. 
                    review: review,
                    strainId: idForStrain
                    }).then( (newMine) => {
                        console.log(newMine)
                        console.log(newMine.get().review)
                    })
                })
            } else {
                console.log('weve already added a mine/review to this strain')
            }

        } else {
            console.log("nothing to see here")
        }
            
        if (req.body.into_it) {
            console.log("weve got a req.body.into_it")
            let preuser = req.body.userkeyword
            let prestrain = req.body.strainKeyword
            let like = req.body.into_it

            // let username = db.user.findOne({where:{username: preuser}})
            let strain = await db.strain.findOne({where:{strain: prestrain}}).then( async (str) => {
                await db.user.findOne({where:{username: preuser}}).then(async (user)=> {
                    let strainid = str.strainId
                    let userid = user.id 
                    console.log('user')
                    // console.log(userid)
                    
                    // if (db.dig.findOne({where: {userId: userid,into_it:like,strainId: strainid}})) {  }
                    
                    console.log('check for existence of the exact same values weve created.')
                    // console.log(await db.dig.findOne({where: {userId: userid,into_it:like,strainId: strainid}}))
                    if (await db.dig.findOne({where: {userId: userid,into_it:like,strainId: strainid}}) == null) {
                        console.log('how you doin we are in here')
                        str.createDig({
                            userId: userid,
                            into_it: like,
                            strainId: strainid
                        }).then(  (newDig) => {
                            console.log(strainid)
                            console.log(user)
                            console.log(newDig)
                        })
                    } else {
                        console.log("a dig has already been attached to this strain.")
                    }


                })
            })
            // console.log(strain.get().strain)

        } else {
            console.log("there is no req.body.into_it")
        }

        console.log('we are hitting the dig route')
        console.log(req.body)
        console.log("hey do you see that")
    })





module.exports = strainRouter

