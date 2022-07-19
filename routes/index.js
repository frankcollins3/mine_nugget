// dependency
const router = require('express').Router()
const db = require('../models')
const axe = require('axios')
let ghres = async () => {
    return ghres = await axe.get(`https://bigcode69er.github.io/strainuous/strain.json`)
}
// middleware 

router.get('/smoke', (req, res) => {
    
    res.render('partials/smoke')
})


router.use('/', (req, res) => {

    const dbAsync = async () => {            
        const apiToStrainDb = async () => {
        let strainlength = await db.strain.findAll().then(async (all) => {
           let length = all.length
           console.log('length')
           console.log(length)

            // console.log(ghres)
            let ghres = await axe.get(`https://bigcode69er.github.io/strainuous/strain.json`)   // can also put it up top with the function. am so backed up on react trying to fly through sorry anyone peeping out for D.R.Y.

            if (ghres.status == 200) {
                console.log('got a good status')
                let straindata = ghres.data.strains
                strainBucket = []
                const loopAndPush = async () => {
                    straindata.forEach(async(str) => {
                        strainBucket.push(str)                            
                    })
                }
                loopAndPush()
                const apiToPgLoop = async () => {
                    for (let i = 0; i < strainBucket.length; i++) {
                        if (length < ghres.data.strains.length) {
                                const addStrains = async () => {
                                    let index =  strainBucket[i]
                                   await db.strain.findOrCreate({
                                    where: {
                                        // strainId: length,
                                        strain: index.strain,
                                        dominant: index.dominant,
                                        funfact: index.funfact,
                                        parents: index.parents
                                    }
                                   }).then((strain) => {
                                    console.log('lets see the strains')
                                    console.log(strain)
                                }) // db.strain.findOrCreate
                            }   //add strains end
                            addStrains()                                                  
                        } else { console.log("unsuccessful github api consumption")}   // if (length > ghres.data.strains.length)
                    }
                } // apiToPgLoop
                apiToPgLoop()
                const accurateId = async () => {          // this was harder than just copy paste. forgot to invoke accurateId() when it was all 1 function. I was still on getting the update message to work properly so the non-invoked() line of code didn't mess up much. I forgot that the original length was based on db.strain.findAll().length 
                    await  db.strain.findAll().then(async (strains) => {
                          
                          const updateStrain = async () => {                      
                              for (let i = 0; i < strains.length; i++) {
                                  // console.log('i')
                                  // console.log(i)
                                  
                                  // if (strains[i]) {
                                      await db.strain.findOne({
                                          where: { strain: strains[i].strain }
                                      }).then( (gottit) => {
                                          gottit.update({ strainId: strains[i].id}), {
                                              where: { strainId: null }
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
                }
            })   
            console.log("yeah were over here")
        }
        apiToStrainDb()
        }
        dbAsync()


        const dbAsync2 = async () => {
        
        const apiToEffectsDb = async () => { // antiDRY code accessing github strain data twice. Code was being funny. 
            let effects = await db.effect.findAll().then( (effects) => {
                let length = effects.length
                console.log('length')
                console.log(length)
                ghres().then(async (gh) => {
                    // console.log('gh')
                    // console.log(gh)
                    let straindata = ghres.data.strains
                    // console.log('straindata')
                    // console.log(straindata)

                    strainBin = []
                    const loopAndPush = async () => {
                        straindata.forEach(async (strain) => {
                                strainBin.push(strain)
                            console.log('strainBin')
                            console.log(strainBin)
                        }) // straindata.forEach
                    }      // loopAndPush()
                    await loopAndPush()

                    const apiPg = () => {
                        for (let i = 0; i < strainBin.length; i++) {
                            let effectIndex = strainBin[i]
                            const addEffects = async () => {
                                await db.effect.findOrCreate({
                                    where: {
                                        // strainId: length,
                                        smell: effectIndex.smell,
                                        taste: effectIndex.taste,
                                        gold: effectIndex.gold,
                                        cbd: parseInt(effectIndex.cbd),
                                        thc: parseInt(effectIndex.thc),
                                        nug: effectIndex.nugget
                                    } // effects where object
                                }).then( (newEffects) => {
                                    console.log('were down here successfully')
                                    console.log('newEfects')
                                    console.log(newEffects)
                                })   // db.effect.findCreate
                            }   // addEffectsEnd
                            addEffects()                                
                            console.log("NOW YOU KNOW WERE OVER HERE")
                        }   // main for loop of apiPg end
                    }   // apiPg
                    apiPg()
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
                                            where: { strainId: null }                       // model:generate, model:migrate, model:citizen
                                        }
                                    })
                                }
                            }
                            updateSense()
                        })
                    }
                    accurateId2()
                })  // ghres                    
            })  // addEffects
        } // apiToEffectsDb
        apiToEffectsDb()
    } // dbAsync end.
dbAsync2()




    req.flash('success', 'Welcome To Mine Nugget')
    res.render('index', {
        user: res.locals.sessionUser || 'planet earth',
    })
})




module.exports = router;
