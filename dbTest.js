const db = require("./models")
const axe = require('axios')

// yourgithubrepo.com -> 1) settings -> 2) Pages -> 3) Branch:main SAVE 4) Change/use any Theme [SAVE] 5) post to github})                close to 6-7 hours on this. about 4 hours until 4am and then 2 hours today .onwake()
    // let ghresp = await axe.get(`https://raw.githubusercontent.com/bigcode69er/strainuous/blob/master/strain.json`)

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
        // USERS    username:string, password:string, age:integer, email:string
        // STRAINS strainId:integer, strain:string, dominant:string funfact:string, parents:STR            // mustve deleted and remigrated 50x 
        // SENSES strainId:integer, taste:STRING, smell:TEXT, gold:STRING, mine:CHAR, nug:STRING, thc:INTEGER, cbd: integer
                                    
        // sequelize model:generate --name mine --attributes "userId":integer,review:string,title:text,"strainId":integer
        // sequelize model:generate --name dig --attributes "userId":integer,"strainId":integer,into_it:
                                
        // if db.strain.id != db.strainId
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

                //     const hideComments = () =>  {
                //         console.log("gum under the desk")
                //         // await db.strain.findOne({
                //         //     where: { strain: str.strain}
                //         // }).then(async (st) => {
                //         //     console.log(st)
                //         //     console.log('index')
                //         //     console.log(index)
                //         //     await db.strain.update({ strainId: index + 1 }, {            // ouch this works outside of the for loop. add to the db. it takes the index and adds it by one. the for loop has a scope of just applying that one index and keeping the index as declared for the remainder of the for loop
                //         //                 where: {
                //         //                   strainId: 2 
                //         //                 }
                //         //         //       });
                //         // })
                //     // })
                //     // db.strain.update({
                //     //     where: { strainid:  }  
                //     // })
                // }

    })  // scope of strainlength. 
    }
    dbAsync()



// this func takes db length adds 1 so we can create strain
// const idIncrement = async () => {
//     const all = await db.strain.findAll().then(async(str) => {
//         // console.log(all)
//         // console.log(str)
//         // console.log("length")
//         let length = str.length + 1
//         console.log(length)
//         await db.strain.create({
//             strainId: length,           // i had this set up as 2 SINGLE-RESPONSIBILITY functions: idIncrement() and the db.strain.create() I was using an async function to invoke/return the db.strain.length+1 value. I was getting a return promise error while invoking. I also got a "Only one autoincrement field allowed." when re-running my migrations so that the strainId could be left unfilled, while still incrementing. I'm also building the API. I can specify [strainId] on githubs server/repoAPI i am making (since the other APIs are done) Instead of specifying strainID (like how id in pokeid is specified on there side) I wanted to do a trick based on db.table().length that increments the next inbound data.
//             strain: 'mimosa',
//             dominant: 'sativa hybrid',
//             funfact: 'smells and tastes like it sounds',
//             parents: 'purple punch and clementine'
//         }).then((mosa) => {
//             console.log(mosa)
//         })

//     })

    // console.log('hey')
    // db.strain.create({
//     strainId: idIncrement(),
//     strain: 'mimosa',
//     dominant: 'sativa hybrid',
//     funfact: 'smells and tastes like it sounds',
//     parents: 'purple punch and clementine'
// }).then( (mosa) => {
//     console.log(mosa)
// })
           // idIncrement()

  
//     // console.log(cookies.get().strain)



  // db.strain.create({
    //     strainId: 5,
    //     strain: 'Do-si-Dos',
    //     dominant: 'indica-hybrid',
    //     funfact: 'gender fluid. warm or humid climate. in or outdoors',
    //     parents: 'girlscoutcookies & faceoffOG'
    // }).then( (cookies) => {
    //     console.log(cookies)
    // })





// const otherUpdate = async () => {
//     await db.strain.update({ strainId: 3}, {
//         where: { 
//             strainId: null
//         }
//     })
// }
// otherUpdate()

// const update = async () => {
//     await db.strain.update({ strainId: null }, {
//         where: {
//             strainId: 3
//         }
//     })
// }
// update()


// db.strain.create({
//     strainId: idIncrement(),
//     strain: 'mimosa',
//     dominant: 'sativa-hybrid',
//     funfact: 'nutrient greedy: needs encouragement to reach full growth'
// }).then( (mosa) => {
//     console.log('guess the validatos working')
//     console.log(mosa)
// })


// <!-- ? db.strain wed cake-->
// wedding cake: 
// strainId: foreign key
// name: wedding cake
// dominant: indica
// funfact: 'leafly strain of year 2019'
// parents: triangle kush + animal mints

// <!-- ? db.senses wed cake [STRAINID]: .belongTo(models.strain)-->
// <!-- wedding cake -->
// strainId:
// taste: sour-tang, earthy-pepper, creamy, vanilla
// smell: vanilla frosting    
// gold: pain, insomnia, appetite
// <!-- mine: form data that updates the table.  -->    
    // nug: dark green, dense, orange
// thc: 25%
// cbd: 0.1%
// <!-- ************************************ -->


// db.user.findOrCreate({
//     where: {
//         username: 'chase thrillz',
//         password: '123',
//         age: '33',
//         email: 'bandgeek@gmail.com'
//     }
// }).then( (me) => {
//     // console.log(me)
// })

// const idIncrement = () => {
//     // return db.strain.length + 1 // not the way..
//     // db.strain.findAll().then((alldb) => {
//         db.strain.findAll().then(strains =>  {
//             // console.log(strains)
//             console.log(Object.values(strains))
//             // console.log(Object.keys(strains))
//         })
// // })



// db.strain.create({
//     strainId: `${idIncrement}`,
//     strain: 'GorillaGlue#4',
//     dominant: 'sativa',
//     funfact: 'Leafly: strain of year 2019',
//     parents: 'triangle kush & animal mints'
// }).then( (gg) => {
//     console.log(gg)
// })

// db.strain.create({
//     strainId: 
// })

// db.strain.create({
//     strainId: idIncrement(),
//     strain: 'wedding cake',
//     dominant: 'indica',
//     funfact: 'Leafly: strain of year 2019',
//     parents: 'triangle kush & animal mints.'
// }).then( (weed) => {
//     console.log(weed)
//     console.log(weed.get().funfact)
// })


// await User.update({ lastName: "Doe" }, {
//     where: {
//       lastName: null
//     }
//   });

// const update = async () => {
//     await db.strain.update({ strainId: 2 }, {
//         where: {
//             strainId: null
//         }
//     })
// }
// update()


// const update = async () => {
//     await db.strain.update({ strainId: 1 }, {
//     where: {
//       strainId: null
//     }
//   });
//     console.log("return our update")
// }
// // update()

// db.strain.findOne({
//     where: { strain: 'wedding cake'}
// }).then((weedcake) => console.log(weedcake))


// <!-- ? db.strain wed cake-->
// wedding cake: 
// strainId: foreign key
// name: wedding cake
// dominant: indica
// funfact: 'leafly strain of year 2019'
// parents: triangle kush + animal mints

// <!-- ? db.senses wed cake [STRAINID]: .belongTo(models.strain)-->
// <!-- wedding cake -->
// strainId:
// taste: sour-tang, earthy-pepper, creamy, vanilla
// smell: vanilla frosting    
// gold: pain, insomnia, appetite
// <!-- mine: form data that updates the table.  -->    
    // nug: dark green, dense, orange
// thc: 25%
// cbd: 0.1%
// <!-- ************************************ -->