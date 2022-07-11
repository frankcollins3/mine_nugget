To-Do
<!-- global dependencies basic app bootstrapping -->
[0] get lucky with the theming and solely begin app on excuse to throw a little innovation.

[1]database models[] and join tables

[!][2]  <!-- ? routes [] req.flash[] res.locals.user []-->

[3]  CSS & smoke routes []

[!][4]  Authentication / Passport HashingSalting.
[5] validation



<3 T A B L E S      &&          M O D E L S  <3>
<!-- ? [1] user: -->
username:string, password:string, age:integer 21, email:string
m.user.hasMany('strains', {through: models.user_strain})
m.user.hasOne('profile')
user.hasMany('strains')

<!-- ? [2] strain -->
models.strain.hasMany('models.user', {through: use_strain})



<!--  -->
<!-- ? db.strain wed cake-->
wedding cake: 
strainId:
strain: wedding cake
dominant: indica
funfact: 'leafly strain of year 2019'
parents: triangle kush + animal mints
<!-- ? db.senses wed cake [STRAINID]: .belongTo(models.strain)-->
<!-- wedding cake -->
strainId:
taste: sour-tang, earthy-pepper, creamy, vanilla
smell: vanilla frosting    
gold: pain, insomnia, appetite
<!-- mine: form data that updates the table.  -->
thc: 25%
cbd: 0.1%
<!-- ************************************ -->


<!-- ? db.strain -->
GG4
strainId:
strain: 'GorillaGlue#4'
dominant: sativa
funfact: 'sticks to fingers and scissors', '#1 cann cup 2014'
parents: sour dubb, chocolate diesel
<!-- ? db.senses [STRAINID]:-->
<!-- GG4 -->
taste: sour, chocolatey, fuel&diesel
smell:  fuel, skunk, sour
gold: euphoria, relaxation, doing nothing
<!-- mine: ... -->
thc: 20%
cbd: 0%
<!-- ************************************ -->

<!-- ? db.strain -->   
<!-- Do-si-dos -->
StrainId: 
strain:   Do-Si-Dos
dominant:   indica-hybrid
funfact:  'gender-fluid', 'warm or humid climate' 'in or outdoors'  
parents: 'girl scout cookies', 'face off OG' 
<!-- sorry about these strains totally digging the mine-theme when i thought of it.  -->
<!-- ? db.senses [STRAINID]:-->
<!-- Do-si-Dos -->
strainId:
taste: cookie
smell:  
gold: insomnia, pain
<!-- mine: userform data -->
nugget: 'glittery', 'lime green & purple'
thc: 20%, 30%
cbd: 0%
<!-- ************************************ -->

<!-- ? db.strain -->   
<!-- Mimosa -->
StrainId:
strain: Mimosa
dominant: Sativa-Hybrid
funfact: 'nutrient-greedy: needs encouragement to grow full potential'
parents: 'purple punch', 'clementine'
<!-- ? db.senses [STRAINID]:-->
<!-- mimosa -->
strainId:
taste:  mimosa, orange
smell:  mimosa, citrus, sour, sweet, fruity
gold: stress, uplifted, migraines, appetite
<!-- mine: userform data -->
nugget: trichomes, semi-dense
thc: 20%, 27%
cbd: 0%
<!-- ************************************ -->

<!-- ? db.strain -->   
<!-- cherry pie -->
StrainId:
strain: cherry pie
dominant:   indica hybrid
funfact: 'effects in minutes. lasts for hours', 'pungent. use discretion'
parents: 'indica GDP', 'sativa durban poison'
<!-- ? db.senses [STRAINID]:-->
strainId:
taste: cherry, pie.
smell: pungent, sweet, cherry, fruity, 
gold: insomnia, focused
mine: 
nugget: dense, orange
thc: 20%
cbd: 0%
<!-- ************************************ -->

<!--? db.strain -->
<!-- white widow -->
strain: white widow
dominant: balanced hybrid
funfact: 'passed genes to white rhino, white russian', 'growers prefer original'
parents: south indian indica, brazilian stavia landrace
<!--? db.senses -->
<!-- white widow -->
strainid:
taste: not very tasty, but tastes earthy, piney, and smooth, disappointing to fruity fans
smell: tropical, fruity, 
gold: euphoria, conversation, energy    
<!-- mine: my effects -->
thc: 15% - 20%
cbd: 0.1%
 <!--? db.strain  -->
 <!-- pineapple express-->
 strain: pineapple express
 dominant: sativa
 funfact: 'Name comes from meteorology & hawaiian water vapor', 'also shares names with a movie'
 parents: 'trainwreck', 'hawaiian

 <!--? db.senses -->
 strainId:
 taste: citrus, fruity, sweet, sour, creamy
 smell: fruity, tropical, pineapple, 
 gold: anti-inflammatory, euphoria, happy
 thc: 15-26%,

