// dependency
const router = require('express').Router()
const db = require('../models')
const axe = require('axios')

// middleware 

router.get('/smoke', (req, res) => {
    
    res.render('partials/smoke')
})


router.use('/', (req, res) => {
    const dbAsync = async () => {   // probably about 6 hours of work to do this. one of my most codey things. Even the signup.ejs <select> forLoop that pushed the options into the form. Feels very codey for the same reason.
        let strainlength = await db.strain.findAll().then(async (all) => {
        let length = all.length         
        // instead of specifying the "strainId" in the api/JSON data file, I set up a simple trick where the "strainId" value would be inserted/.created() with a manual autoIncrement function: 1) evaluated for database length (i.e. db.length = 0) 2) added 1 piece of data: so [db.length=0 db.strain.create()]  (db.length = 1, db.strain.create(strainId: db.length)) auto increments up. 
        // this method of doing a simple db check before
        console.log('length')
        console.log(length)
        let ghresp = await axe.get(`https://bigcode69er.github.io/strainuous/strain.json`)
        console.log('ghresp.datalength')
        console.log(ghresp.data.strains.length)
        // raw.githubusercontent.com/username/repo-name/branch-name/path
        if (ghresp.status == '200') {
            // console.log(ghresp)
            let straindata = ghresp.data.strains
            // console.log('straindata')
            // console.log(straindata)
            strainBucket = []
            const loopAndPush = async () => {
                // for (let i = 0; i < straindata.length; i++) {
                //     await strainBucket.push(straindata[i])
                // }
                straindata.forEach(async (str) => {
                    strainBucket.push(str)
                })
            }
            // console.log(strainBucket)
            await loopAndPush()
            const apiToPgLoop = async () => {
                // console.log('strainBucket')
                // console.log(strainBucket)
                // console.log("strain")
                for (let i = 0; i < strainBucket.length; i++) {
                    // console.log(strainBucket[i].strain)
                    // console.log(strainBucket[i].dominant)
// this was also 
                if (length < ghresp.data.strains.length) {
                    await  db.strain.findOrCreate({
                        where: {
                            strainId: length,  // i had this set up originally with length. 1 so that the strainId on each .create() would be equal to the db.data().length [so that the id would be 1 count higher than the db count, essentially autoIncrement]      if within a for loop block, this length is set statically and consistently for all values. this is not incrementing but if you do it out of the for loop over and over it'll do it. I can loosely understand why the for loop is repeating the same exact number.
                            strain: strainBucket[i].strain,
                            dominant: strainBucket[i].dominant,
                            funfact: strainBucket[i].funfact,
                            parents: strainBucket[i].parents
                        }
                      }).then( (str) => { console.log(str)})
                }
                console.log(strainBucket[i].taste)
              db.effect.findAll().then( async (alleffects) => {
                    console.log('effectlength')
                    console.log(alleffects.length)
                    // const checkAndCreate = async () => {
                        console.log("well atleast its here so were here apparently")
                        if (alleffects.lengh < ghresp.data.strains.length) {
                            await db.effect.findOrCreate({
                                 where: { 
                                     strainId: length,
                                     smell: strainBucket[i].smell,
                                     taste: strainBucket[i].taste,
                                      gold: strainBucket[i].gold,
                                      cbd: parseInt(strainBucket[i].cbd),       // ouch blew 40 minutes leaving parseInt and discrepency between psql: nug: nug: API: nug: nugget
                                       thc: parseInt(strainBucket[i].thc),
                                     nug: strainBucket[i].nugget,
                                 }
                            }).then( (senseinfo) => {
                                console.log(senseinfo)
                            })
                        }
                    })                      
                    // checkAndCreate()
            }                               // for loop scope
            // console.log(straindata)
            // smell taste nugget gold thc cbd
            } // scope of loopAndPush()
           await apiToPgLoop()       // ow even after labeling loopAndPush() and strainlength scope I was  invoking apiToPgLoop() outside of the forLoop and still within the scope of its-own function [apiToPgLoop]
            // console.log(straindata)
        } else {
            console.log("abyss: no gh data")
        }
        const accurateId = async () => {          // this was harder than just copy paste. forgot to invoke accurateId() when it was all 1 function. I was still on getting the update message to work properly so the non-invoked() line of code didn't mess up much. I forgot that the original length was based on db.strain.findAll().length 
          await  db.strain.findAll().then(async (strains) => {            
                const updateStrain = async () => {                      
                    for (let i = 0; i < strains.length; i++) {
                            await db.strain.findOne({
                                where: { strain: strains[i].strain }
                            }).then( (gottit) => {
                                gottit.update({ strainId: strains[i].id}), {
                                    where: { strainId: 0 }
                                }
                            }).then( (wow) => {
                                // console.log(wow)
                            })
                        }
                    }
                    updateStrain()
            })          // db.strain.findAll() in accurateID scope
        }   //accurateId end
        accurateId()
            const accurateId2 = async () => {
                await db.effect.findAll().then(async (senses) => {
                    console.log(senses)
                    const updateSense = async () => {
                        console.log('in the update sense')
                        for (let i = 0; i < senses.length; i++) {
                            console.log("are we over here yet")
                            // console.log('i')
                            // console.log(i)
                             await db.effect.findOne({
                                where: { smell: senses[i].smell }
                            }).then( (sen) => {
                                console.log('sen')
                                console.log(sen)
                                sen.update({ strainId: senses[i].id}), {
                                    where: { strainId: 7 }                       // model:generate, model:migrate, model:citizen
                                }
                            })
                        }
                    }
                    updateSense()
                })
            }
            accurateId2()
        })  // scope of strainlength. 
    }
    dbAsync()




    req.flash('success', 'Welcome To Mine Nugget')
    res.render('index', {
        user: res.locals.sessionUser || 'Planet Earth',
    })
})




module.exports = router;
