const db = require('../models')
// const { router } = require('../server') 3hr nonbreakingchange issue.     
let axios = require("axios")
let strainRouter = require('express').Router()



strainRouter.get('/', async (req, res) => {
    const checkForSurvey = () => {
        let randomNumb = Math.floor(Math.random()* 10) + 1 
        if (randomNumb == 7) {
            res.render('oreore')
        }
    }
    checkForSurvey()


    

    const accurateId = async () => {          // this was harder than just copy paste. forgot to invoke accurateId() when it was all 1 function. I was still on getting the update message to work properly so the non-invoked() line of code didn't mess up much. I forgot that the original length was based on db.strain.findAll().length 
        await  db.strain.findAll().then(async (strains) => {              
              const updateStrain = async () => {                      
                  for (let i = 0; i < strains.length; i++) {                      
                          await db.strain.findOne({
                              where: { strain: strains[i].strain }
                          }).then( (gottit) => {
                              gottit.update({ strainId: strains[i].id}), {
                                  where: { strainId: null }
                              }
                          }).then( (wow) => {
                          })
                      }
                  }
                  updateStrain()
          })          // db.strain.findAll() in accurateID scope
      }   //accurateId end
    //   accurateId()

    const accurateId2 = async () => {
        await db.effect.findAll().then(async (senses) => {
            console.log(senses)
            const updateSense = async () => {
                console.log('in the update sense')
                for (let i = 0; i < senses.length; i++) {
                    console.log("are we over here yet")                
                     await db.effect.findOne({
                        where: { smell: senses[i].smell }
                    }).then( (sen) => {                        
                        sen.update({ strainId: senses[i].id}), {
                            where: { strainId: null }                       // model:generate, model:migrate, model:citizen
                        }
                    })
                }
            }
            updateSense()
        })
    }
    // accurateId2()


//  ******************** *************************** ********************************

    const user = res.locals.sessionUser || 'undefined user'
    const ejsuser = {
        username: user.username || 'no username',
        id: 0,
        age: user.age || 'no age',
        email: user.email || 'no email'
    }
    db.user.findOne({ where: { id: user.id}}).then(async (user) => {
        let allDb = await user.getStrains()
        db.usersStrains.findAll({
            where: { userId: user.id}
        }).then( (userstrain) => {

        })

            db.dig.findAll().then( (likes) => {

            db.user.findAll().then( (allusers) => {
                // console.log('allusers')
                // console.log(allusers)

            db.mine.findAll().then( (reviews) => {
                console.log('here are the reviews')
                console.log(reviews)
            // let allreviews = await reviews.get()     [async func]
                
                let allDB = allDb // || {strain: 'no strains'}
                req.flash('age', 'SAFETY FIRST: Are you 18 years or older?')
                req.flash('strainsuccess', 'Saving This Gold.')
                res.render("strain", {
                    ejsuser,
                    allDB,
                    likes,
                    allusers,    // can probably store this as return statement of invoked function. will check later if there's time. 
                    reviews
                })
                })
                })
            })
    })
})



strainRouter.get('/familytree', (req, res) => {
    // [ore or ore] not a bad name for the gold-nugget themed game.
    res.render('familytree') // more ideal to tuck these in a strain/folder. might do a commit based on restructuring/optimizing filescope 
})


strainRouter.get("/oreore", (req, res) => {
    res.render('oreore')
})


strainRouter.post('/', async (req, res) => {      // i was going to do a set of input based conditional logic to allow 1 post route to share many different sources of information. 
    console.log("WE ARE HITTING THE REGULAR STRAIN ROUTE!")
    let userData = req.body.userkeyword     
    console.log('userData')
    console.log(userData)

  
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

    
            let user = await db.user.findOne({where: { username: userData }})
            console.log('user')
            console.log(user)
            user.getStrains().then( (userstrains) => {
            console.log('userstrains')
            console.log(userstrains)

            db.strain.findOne({
                where: { dominant: strain.dominant || req.body.dominant}
            }).then( (ajaxstrain) => {
                console.log(ajaxstrain.get().strainId)
                let newstrainid = ajaxstrain.get().strainId

                db.usersStrains.findOrCreate({
                    where: {
                        userId: dbUserData.id,
                        strainId: newstrainid
                    }
                }).then( (strainroutestrain)=> {
                    console.log(strainroutestrain)                    
                })
            })
            })
        })
    })


    strainRouter.post('/digmine', async (req, res) => {
        let ghurl = "https://frankcollins3.github.io/strainuous/strain.json"
        let strains = axios.get(ghurl).data
        console.log(strains)



        console.log("we are hitting the digmine route our .submit() is successful")
        if (req.body.mine) {
            console.log("route.js mine post route ")
            console.log(req.body)
            console.log('weve got a mine and this is successful so far')
            let preFindOneStrain = req.body.strainKeyword
            let review = req.body.mine
            // if (await db.mine.findOne({ where: { review }}) == null) {
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
                    strainId: idForStrain,
                    title: req.body.title
                    }).then( (newMine) => {
                        console.log(newMine)
                        console.log(newMine.get().review)
                    })
                })
            // } else {
                // console.log('weve already added a mine/review to this strain')
            // }

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

