# mine_nugget
gentle, gold mine themed, simple-self-made-API based: ejs postgresJOINS node
![db relationship](https://user-images.githubusercontent.com/73137934/180605698-bf5e4c87-efb9-4299-a27b-8255ca896d65.png)


Because the public strain APIs have become point-of-sale/not available to the public:
I created a simple Strain API based on Leafly.com data on a github repo that was themed and .githubpages()

This app allows us to consume and interact with the data in a brown-and-gold themed interface that does what it can to offset the !tastefulness
of the concept.

***********to initialize: 
1) sessionObject for cookies / process.env [i have the secret: 'mine' set up so you dont need the .env file] 
***) If you'd prefer the security of [terminal# echo/touch .env]npm init + process.env, you may Uncomment SECRET_SESSION and sessionObject.secret
// const SECRET_SESH = process.env.SECRET_SESSION
const sessionObject = {
    // secret: SECRET_SESH,
    secret: 'mine',

2) sequelize / db linking code:     
[sequelize init] 1) sequelize db:create, 2) sequelize db:migrate 3) there are dbTest.js files with some sample association funcs/promises.
* config/config.json

When you click the /signup route there is a simple click-based changing-background captcha game where you click for gold img to allow signup.




*******Features: 


strain.ejs [strain] 
TOGGLEABLE navbargold.on('mouseenter')-> [access strains and save to database] container || [search strains and see users likes / comments ]

consume API and use conditional [intersectionObserverObject/entry.target] logic to append to container and ADD to database on click.
1) scroll:
let name = entry.target[0].innerText
for (let i = 0; i < ajaxstraindata.length; i++) { if ajaxstraindata[i].strain == 'name' 
2) click:
entry.target.onclick--> iterate through API endpoint and append api[i].endpoint the endpoint text to a display.
** if !(entry.isIntersecting): .restoreDefaults()


Search functionality using plain JS. [set MaxLength to 1]  [.charAt(1) && return data on [data.char(1) == 'searchTerm]
1) minimumviable/proof-of-concept: 
1) restrict input typing length to 1
<form> maxlength=1 ---> 
2) set req.body.input.val() as a variable that becomes the: auto-validator for if block: (strainData[i].charAt(1) == 'req.body.input') 
  ($'input').on('search()=>let value = $('input').val() searchTerm=
  Search functionality 
  
  
  family tree.ejs   [A simple endpoint based multiple choice game]
  *** with our omitted strain.parents data not within reach of the user/human on strain.ejs:***
1)   there is a game based on providing the strain.parents and allowing the user to guess from multiple choice options 
2)  If the user Accurately guesses, the strain.funfact data endpoint is appended to the games displayContainer.
  
  Canvas: Simple canvas based animation. I wanted it to be animating back and forth but figured 
  
**   I also considered validating against $('mineimg').getBoundingClientRect() to allow for location.href = '/strain' if the canvas.minecart was "driven" into hitDetection/coordinate-crossover at $(.canvasminecart).x && $('.mineimg').getBoundingClientRect().top()
  [the goal was to try for things to be out of the way of other things.
  **
  
  
  /auth/signup && /auth/login 
  simple form 

  
  Database:
 1)   simple social media/user-see-other-user [likes/comments] data.
 2) validations
 3) Routes that res.render strainObjects limited by db.sequelize.User.getStrains(),  instead of just db.strain.findAll()
 4) salted passwords to protect any would-be user from any could-be hacker/malicious-coder
  
  CSS:
1)   simple auto-generate [input.val()] w/ sessionUser.age data on the miner.png form from strain.ejs 
2) I Went with the gold-mine theme because it was personally more comfortable to make a cannabis strain app that wasn't so overt with the real photos.
3) true to theme: $('.shovel').digAnimation() upon ('mouseenter) to like the strains. 
4) navbar.on('mouseenter')->  [1)gold2)smoke] text 
  
5) Now that I see how tangled up logic can get within [Ajax calls/double dq queries&&looops]
  I see a clear violation of "move fast break things quickly". in Waiting till the very last minutes to do responsive CSS in an app that could've more ideally used exported functions/more callbacks to hedge against the tangling and intertwining of promises and async data calls. 
 Some things like [familytree.ejs] were ideas that came out of nowhere. 
  **Grid for responsive CSS and auto-grid, etc, double-checked in the beginning with some sizing control adapts.***
 
  6) similar to number 5: intersection observer's somewhat tendency to need slow scrolling, and the:
  [.line-height: problem/solution where intersection observer caught a very tiny window for observation against its {threshold:0.8} watcher.
  Having a huge line-height allowed for a window of observation that you can scroll and click more humanly, v.s. having to watch so specifically for a small pixelated-window-of-watch for the $(event.target).click to scroll through API
  The line-height/artifically elongating the elements to suit intersection observer's fussiness was going head to head with the need for responsive css and the [.displayContainer and .strainContiner] to touch.
  
  7) i left a folder of the strain pictures I was going to use, as well as the [.litpaperImg] to show where the changes in design was coming from. 


  
  where the db.strain on the gold observer datascroller 
 
  
 *** there are a few goals worth hitting like getting a cleaner refactor  but I'd love to reiterate this app in react.js and will probably save some goal things for .then() ***
  
  
  GOALS/to-dos for Mine_Nugget_react:
  
*Better Responsive CSS.
*exported/cb functions
*maybe a canvas/.include('partials') smokeText canvas that takes db.strain.name and applies smokeText and animation to it.
* Oauth
  
 
 ** another data-endpoint based game where -i.e: 
  [if strain.taste = 'fruity' if strain.smell = 'fruity'] if [smell&&taste] .endpoint.includes(endpoint) || endpoint.taste === endpoint.smell 
  return endpoint.
  **
 straindata[i].strain/name 
  
  
