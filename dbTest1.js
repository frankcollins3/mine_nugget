const db = require("./models")
const strain = require("./models/strain")
const user = require("./models/user")

// db.user.create({
//     username: 'chase thrillz',
//     password: '123',
//     age: 33, 
//     email: 'letsGetGoin@gmail.com'
// }).then( (me) => [
//     console.log(me)
// ])

// * create user
// db.user.findOrCreate({
//     where: {
//         username: 'hebrew national',
//         password: 'weenie hut',
//         age: 69,
//         email: 'letsweenie@gmail.com'
//     }
// }).then ((ween) => {
//     // console.log(ween.get().username)
//     console.log(ween.username)
//     console.log("we created a user using the require('') model/user import and this sequelize method && create Object")
// })

// * create strain
// db.strain.findOrCreate({
//     where: {
//         strain: 'berry white',
//         dominant: 'indica',
//         funfact: 'hits very low like the singer',
//         parents: 'berry white, dino spumoni'
//     }
// }).then( (bwhite) => {
//     console.log(bwhite)
//     console.log(bwhite.get().parents)
//     console.log(bwhite.get().funfact)
// })

// * user hasMany        sourceModel[USER] --> targetModel[STRAIN] putting sequelizes association helper methods to work/test
// db.user.findOne({
//     where: {
//         // username: <3 sessionUser.username %>
//         username: 'hebrew national',
//     }
// }).then( (heeb) => {
//     // console.log(heeb.get().password)
//     // reach into the strain to get a practice 
//     db.strain.findOne({
//         where: { 
//             strain: 'berry white'
//         }
//     }).then ( (bbw) => {
//         console.log(`heeb username${heeb.get().username}`)
//         console.log(`bbw funfact. wassup ${bbw.get().funfact}`)
//         // console.log('i love bbw')
//         // console.log(bbw)
//         heeb.addStrain(bbw).then( (addedStrain) => {
//             console.log(addedStrain)
//             console.log('guys we just made a sourceModel-->targetModel helperfunction data manipulation function')
//         })
// })
// })

// * strain.hasmany effect              db.strain.findOne() add handmade effect as laid out by leafly.com strain specs/attributes--> 
// db.strain.findOne({
//     where: {
//         strain: 'berry white'
//     }
// }).then ((bw) => {
//     bw.createEffect({
//         smell: 'smelly',
//         taste: 'fruity body',
//         gold: 'insomnia, appetite',
//         mine: 'smooth and good for night out',
//         nug: 'lots to break up, very green, who knows'
//     }).then( (strainEffect) => {
//         console.log(`verifying strain down here in teh cr${bw.strain}`)
//         console.log(`strain fun fact: ${bw.get().funfact}`)
//         console.log(strainEffect)

//     })
// })





// db.user.findOrCreate({
//     where: {
//         username: 'tommy hilfiger',
//         password: "datpass",
//         age: 33,
//         email: 'itstime@yahoo.com'
//     }
// }).then( (tom) => {
//     console.log(tom)
//     console.log(`hi ${tom.get().username.split(' ').join('').replace(/[\t\o\m]/g, '')}`)
// })

// db.user.findOne({
//     where: { password: 'datpass'}
// }).then( (decentGuy) => {
//     console.log(decentGuy)
//     let name = decentGuy.get().username.toString().split(' ').join('').replace(/[\i\l]/g, '')        // thrilled. first regex done on my own. not a complex expression but its something.
//     console.log(name)
//     db.strain.findOne({
//         where: {
//             strain: 'white widow'
//         }
//     }).then( (widFromWiz) => {
//         console.log(widFromWiz)
//         console.log(decentGuy)
//         decentGuy.createStrain(widFromWiz).then( (newWeed) => {
//             console.log(newWeed)
//         })
//     })
// })

// db.strain.findOne({
//     where: { strain: 'GorillaGlue#4'}
// }).then( (gg4) => {
//     db.user.findOne({
//         where: { username: 'tommy hilfiger' }
//     }).then( (tom) => {
//     console.log('id')        
//     db.dig.findOrCreate({
//         where: {
//             userId: 2, 
//             strainId: 2,
//             into_it: true
//         }
//     }).then( (like) => {
//                 console.log(tom.id)
//                 console.log(gg4.id)
//                 console.log(`we gottem ${like.userId}`)
//             })
//     })
// })

// db.dig.create({ 
//     userId: 2,
//     strainId: 2,
//     into_it: true
// }).then( (like) => {
//     console.log(like)
// })

// db.dig.findOrCreate({
//     where: {
//         userId: 1,
//         strainId: 2
//     }
// }).then( (like) => {
//     console.log(like)
// })

// db.user.findOne({
//     where: { id: '1'}
// }).then( (chase) => {
//     // console.log(chase)
//     db.strain.getDigs({
//         where: {
//             strainId: 2,
//             into_it: true
//         }
//     }).then( (like) => {
//         console.log('we are in the likes')
//         console.log(like)
//     })
// })

// db.user.findOne({
//     where: { username: 'tommy hilfiger'}
// }).then( (tom) => {
//     // console.log(tom.get())
//     tom.getStrains().then( (boii) => {
//         console.log(boii)   
//     })
// })

// db.strain.findOne({
//     where: { strain: 'Do-Si-Dos'}
// }).then( (dosi) => {
//     // console.log(dosi)
//     console.log(dosi.parents)
//     dosi.createDig({
//         where: { 
//             userId: 1,
//             into_it: true
//          }
//     }).then( (newDig) => {
//         console.log("newdigzzzzz")
//         console.log(newDig)
//         console.log("newdigzzzzz")
//     })
// })


// * string interpolation kind of / object-value-based-variable association querys/INSERT-INTOs
// db.strain.findOne({
//     where: { 
//         strain: 'pineapple express'
//     }
// }).then( (xpress) => {
//     db.user.findOne({
//         where: { username: 'tommy hilfiger'}
//     }).then( (tom) => {
//         xpress.createDig({
//             where: {
//                 strainId: xpress.strainId,
//                 userId: tom.userId,
//                 into_it: true
//             }
//         }).then ((digz) => {   
//         })
//     })
// })

// db.user.findOne({
//     where: { username: 'tommy hilfiger'}
// }).then( (tom) => {
//     console.log("coding rocks")
//     db.strain.findAll().then(async  (allstrain) => {
//         console.log(allstrain.length)
//         const random = allstrain[Math.floor(Math.random() * allstrain.length)]
//         random.createDig({
//             userId: tom.id,
//             strainId: random.strainId,
//             into_it: true
//         }).then( (likeTheStrain) => {
//             console.log('likeTheStrain')
//             console.log(likeTheStrain)
//         })
//     })
// })

// db.user.findOne({
//     where: { username: 'tommy hilfiger' }
// }).then ( (tom) => {
//     console.log(tom)

// })


// db.dig.findOrCreate({
//     where: {
//         userId: 2,
//         strainId: 2
//     }
// }).then( (like) => {
//     console.log(like)
// })



// working strain to user example
// sequelize model:generate --name user --attributes username:string,password:string,age:integer,email:string;
// sequelize model:generate --name strain --attributes "strainId"integer,strain:string,dominant:string,funfact:string,parents:string
// sequelize model:generate --name effect --attributes strainId:integer,taste:string,smell:text,gold:string,mine:char,nug:string,thc:integer,cbd:integer
// sequelize model:generate --name usersStrains --attributes "userId":integer,"strainId":integer

// sequelize model:generate --name mine attributes review:text,title:string,"strainid":integer / // "review.js" alternative
// sequelize model:generate --name dig --attributes userId:integer,strainId:integer,into_it;

// user associations
// * models.user.belongsToMany(models.strain, { through: models.usersStrains})

// strain associations
// * models.strain.belongsToMany(models.user, { through: models.usersStrains})
// * models.strain.hasMany(models.effect)
// * models.strain.hasMany(models.mine)
// * models.strain.hasMany(models.dig)

// effect associations
// *     models.effect.belongsTo(models.strain)

// mine associations
// * models.mine.belongsTo(models.effect)


