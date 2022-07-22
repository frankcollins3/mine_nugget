        <style>
            * {
                text-align: center;
            }
            body {

                border: 5px solid rgb(247, 208, 36);
                box-shadow: 10px 10px 10px papayawhip;
            }
            .surveyContainer {
                /* border: 5px solid hotpink; */
                 display: flex; 
                 text-align: center;
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr; 

                /* display: flex;    .nonPretty()
                flex-flow: row nowrap;
                justify-content: center; */
                                
                transform: scale(0.3);
                box-shadow: 12px 8px 15px rgb(247, 208, 36);
            }
            </style>
        <div class="surveyContainer">
            <!-- <h1> Ore or Ore</h1> -->

        </div>

  
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>
            let surveyHeight = $(document).height().toFixed()
            let surveyWidth = $(document).width().toFixed()

            $('body')
            .css('background-color', 'rgb(62, 50, 32)')
            .css('display', 'flex')
            .css('flex-flow', 'column nowrap')
            .css('margin-top', '1.75em')
            .css('align-items', 'center')
            .css('', '')

            let surveyCont = $('.surveyContainer')
            surveyCont
            .css('height', surveyHeight * 0.7 )
            .css('width', surveyHeight * 0.7 )
            .css('border', '5px solid papayawhip')
            .css('margin-top', '-3.33em')

            let containerHeight = surveyCont.height().toFixed()
            let containerWIdth = surveyCont.width().toFixed()

            let h1 = $('h1')
            h1.unbind('mouseenter') // this allows the h1 to be untargetable with a mouseevent. 
            // section.append(h1) && h1.mouseenter() is being targeted with the same event governed by parent container events.

            let randomstrainbucket = new Array() // []
             
            let strainmap = new Map()

            for (let i = 0; i < 3; i++) {
                let section = document.createElement('div')
                let h1 = document.createElement('h1')
                $(h1)
                .text('ORE OR ORE')
                $(section)
                .addClass('section')
                .css('height', containerHeight)
                .css('width', '100%')
                .css("border", "rgb(247, 208, 36)")
                .css('box-shadow', '15px 8px 13px papayawhip')
                $(surveyCont).append($(section))
                $(section).append($(h1))
            }

            let section = $('.section')
            section
            .css('box-shadow', '20px 20px 20px rgb(247, 208, 36)')
            // .css(margin-top', '-3em')



            let urlaj = `https://frankcollins3.github.io/strainuous/strain.json` 
            $.ajax({
                method: 'GET',
                url: urlaj,
                dataTypes: 'json'
            }).then( (ajdata) => {
                console.log('ajdata')
                console.log(ajdata)

                let ajaxstrain = ajdata.strains

                const findEffect = (elem) => {
                    let randomstrain = ajaxstrain[Math.floor(Math.random()*ajaxstrain.length)]
                    let randomname = randomstrain.strain
                    console.log('findEffect random name')
                    console.log(randomname)

                    let randomgold = randomstrain.gold
                    let prepoint = randomgold.split(', ')
                    let wordlength = prepoint.length -1 // factoring in arraybased index making sure none of our values are exclusive to our options created with our randomizers.
                    let randomword = prepoint[Math.floor(Math.random()*prepoint.length)]

                    let randomwordptag = document.createElement('p')
                    $(randomwordptag)
                    .text(randomword)
                    .css("font-size", "100px")      //wonder why this has to be so large.
                    .css("color", "papayawhip")
                    // .addClass("papaya")
                    $(event.target).append()
                    $(elem).append($(randomwordptag))
                    // section.append($(randomwordptag))
                    // strainmap.set(randomname, randomword)
                     randomstrain = ''
                     randomname = ''
                     randomgold = ''
                     prepoint = ''
                     wordlength = ''
                     randomword = ''
                    // console.log('randomname')
                    // console.log(randomname)  
                    // console.log('strainmap')                              
                    // console.log(strainmap)                              
                    // strainmap.set('strain', `${randomstrain.gold}`)
                }   
                // findEffect()


                const findStrains = (elem) => {
                    // console.log("we are now clicking on the element we hovered upon")
                    // console.log('click target') // when we can get the text of the keyword (the only text besides our h1). We can dig through the api key for strains that share keywords.
                    // console.log($(elem.target))
                    // console.log('heres the context')
                    // console.log($(elem.target).context)
                    const text = $(elem.target).context.outerText       // ["Ore or Ore\n\neuphoria"] ** actual iterm2 output ** we want the text after the \n || newline **     

                    const lowertext = text.replace(/[A-Z]/g, '').replace(/\s/g, '')     // id rather be a little less DRY and a lot more guaranteed. really have to dive into react.js
                    console.log('lowertext')
                    console.log(lowertext)
                    // const newText = text.replace(/[^\/]+S) )                
                    console.log('text')
                    console.log(text)

                    for (let i = 0; i < ajaxstrain.length; i++) {
                        console.log("in the loop and we do that")
                        if (ajaxstrain[i].gold.replace(/\s/g, '').includes(lowertext)) {
                            console.log("we have our match")
                            let int = (i) + 1
                            console.log('int')
                            console.log(int)
                            let splitGold = ajaxstrain[i].gold.split(', ')
                            console.log('splitGold split the gold up')
                            console.log(splitGold)
                            $(splitGold).each( (index, g) => {
                                console.log('g')
                                console.log(g)
                                // strainmap.set(`${ajaxstrain[i].strain}${int}`, ajaxstrain[i].gold)
                                strainmap.set(ajaxstrain[i].strain, ajaxstrain[i].gold)
                            })                                                                                    
                            // strainmap.set(`${ajaxstrain[i].strain}${int}`, ajaxstrain[i].gold)
                        }
                    }

                    const findMap = () => {
                        console.log('in the find map')
                        // for (let i = 0; i < ajaxstrain.length; i++) {
                        //     console.log(strainmap.get(`${ajaxstrain[i].strain}`))
                        // }
                        console.log("lets see the keys")
                        console.log(strainmap.keys())
                    }
                    findMap()
                    

                        

                    
                    // for (let i = 0; i < ajaxstrain.length; i++) {
                    //     console.log('strain and gold')
                    //     console.log(ajaxstrain[i].strain)
                    //     let loopgold = ajaxstrain[i].gold
                    //     let goldsplit = loopgold.split(', ')
                    //     let splitlength = goldsplit.length
                    //     console.log('splitlength')
                    //     console.log(splitlength)
                    //     for (let i = 0; i < goldsplit.length; i++) {
                    //         console.log('i')
                    //         console.log(goldsplit[i])
                    //         // strainmap.set(`${lowertext}[i]`, goldsplit[i])
                    //         // strainmap.set(`${ajaxstrain[i].strain}`, goldsplit[i]) this gets us to a value that doesn't change again. we're getting closer with this line of code here. 
                    //         strainmap.set(`${ajaxstrain[i].strain}`, goldsplit[i])
                    //     }
                    //     goldsplit.forEach ( (g) => {
                    //         console.log('g')
                    //         console.log(g)
                    //         // console.log(g[0])
                    //         // console.log(`G1: ${g[1]}`)
                    //         // console.log(`G2 like gatorade: ${g[2]}`)
                    //         // console.log(`G3: ${g[]}`)
                    //         // console.log(g[2])
                    //         // console.log(g)
                    //         if (g == lowertext) {
                    //             for (let i = 0; i < ajaxstrain[i].length; i++) {
                    //                 console.log('we have a match')
                    //                 console.log('lowertext')
                    //                 console.log('g')
                    //                 let goldmatch = ajaxstrain[i].split(', ')
                    //                 for (let i = 0; i < goldmatch.length; i++) {
                    //                     if (goldmatch[i] == g) {
                    //                         console.log("3rd loop")
                    //                     }
                    //                 }
                    //                 // if (ajaxstrain[i].gold.includes(g)) {
                    //                 //     console.log("in 2 loops we have a match")
                    //                 //     console.log('g from second loop')
                    //                 //     console.log(g)
                    //                 // }
                    //             }
                    //         }

                    //     })

                        // if (ajaxstrain[i].gold.includes(lowertext)) {
                        //     // let ajaxgold = ajaxstrain[i].gold.split(', ')
                        //     console.log('ajaxgold')
                        //     console.log(ajaxgold)
                        // }   //  if **********(gold = lowertext)********

                            // ajaxgold.forEach( (index, goldname) => {
                            //     console.log('goldname')
                            //     console.log(goldname)
                                
                            //     $(goldname).each( (gname, i) => {
                            //         console.log('gname')
                            //         console.log(gname)
                            //     })
                                
                                // if (goldname.replace(/\s/g, '') == lowertext.replace(/\s/g, '')) {
                                //     console.log('we have a match')
                                //     console.log(`goldname: ${goldname}`)
                                //     console.log(`lowertext: ${lowertext}`)


                            // })
                        
                        // }
                    // }
                    setTimeout( () => console.log(strainmap), "2000")

                    // for (let i = 0; i < ajaxstrain[i].length; i++) {
                    //     console.log("before the conditional")
                    //     console.log(ajaxstrain[i])
                    //     if (ajaxstrain[i].gold.includes(lowertext)) {
                    //         console.log("this is us in our for loop")
                    //         console.log(ajaxstrain[i])
                    //         console.log(ajaxstrain[i].strain)
                    //         console.log(ajaxstrain[i].parents)
                    //     }
                    // }


                    // let username = reviewelemtext.replace(/.+(?=[0-9])/g, '').slice(1).replace(/\s/g, '')
                    // let newtext = text.replace(/.+(?=[n])/g, '') // this replaces only our \n character and returns Ore or Ore
                    // let splitText = newtext.split(', ') // splitting the text. if we look for words that are longer than [ arrayBased[2] || 3 ] like "Ore or Ore" all our words besides ore will be longer. thats a distinguishing factor that can allow us to target.
                    // console.log('splitText')
                    // console.log(splitText)
                    // $(splitText).each( (index, splitword) => {
                    //     if (splitword.length < 2) {
                    //         console.log("these are less than 2")
                    //         console.log(splitword)
                    //     } else {
                    //         console.log("these are longer than 2")
                    //         console.log(splitword)
                    //     }
                    // })


                    // const textAfterNewline = text.replace([?>n]) // rough draft regex. we could also dig for a regex that only captures words with all lowercase letteres.
                    // you can look at

                    $(elem.target).unbind('click')
                    console.log('strainmap')
                    console.log(strainmap)
                }

                section
                .mouseenter( (event) => {
                    $(event.target).css('border', '10px solid papayawhip')
                    console.log('thats called hovering')
                    findEffect($(event.target))
                    $(event.target).unbind('mouseenter')
                    $(event.target).bind('click', findStrains) // if you invoke findStrains() in here you wont be happy.
                })
                    
                // let randomStrain = strainmap.get('strain')
                // console.log('randomStrain')
                // console.log(randomStrain)
                // // let prepainpoint = randomStrain.split()
                // let prepainpoint = randomStrain.split(', ')  // (2) ['insomnia', 'focused'] ** this is what we want ** picking one word from db.strain.gold
                // console.log('prepainpoint')
                // console.log(prepainpoint)
                
                


            })
            console.log("heres our strainmap")
            // setTimeout( () => console.log(strainmap), "1000")
            // let randomMapItem = strainmap[Math.floor(Math.random()*strainmap.length)] cant do this.
            // let mapitems = Array.from(strainmap)
            // console.log('mapitems')
            // console.log(mapitems)


           
            // getRandomKey(strainmap)


            // const getRandomItem = strainmap => strainmap.get([...strainmap.keys()][Math.floor(Math.random() * strainmap.size)])
            // const getRandomItem = strainmap => {
            //  return    [...strainmap][Math.floor(Math.random()*strainmap.size)]
            // }
            // console.log(getRandomKey(strainmap))
            // console.log('randomMapItem')
            // console.log(randomMapItem)

                


       
            $("h1")
            .css('text-align', 'center')
            .css('color', 'papayawhip')
            .css('margin-top', '2.25em')
        </script>
