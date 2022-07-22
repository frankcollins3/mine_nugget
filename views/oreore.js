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
                /* display: flex; */
                text-align: center;
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr;
                
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

             
            let strainmap = new Map()

            for (let i = 0; i < 3; i++) {
                let section = document.createElement('div')
                let h1 = document.createElement('h1')
                $(h1)
                .text('Ore or Ore')
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

                    strainmap.set(randomname, randomword)
                     randomstrain = ''
                     randomname = ''
                     randomgold = ''
                     prepoint = ''
                     wordlength = ''
                     randomword = ''
                    console.log('randomname')
                    console.log(randomname)  
                    console.log('strainmap')                              
                    console.log(strainmap)                              
                    // strainmap.set('strain', `${randomstrain.gold}`)
                }   
                // findEffect()

            

                section
                .mouseenter( (event) => {
                    $(event.target).css('border', '10px solid papayawhip')
                    console.log('thats called hovering')
                    findEffect($(event.target))
                    $(event.target).unbind('mouseenter')
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
            setTimeout( () => console.log(strainmap), "1000")
            // let randomMapItem = strainmap[Math.floor(Math.random()*strainmap.length)] cant do this.
            let mapitems = Array.from(strainmap)
            console.log('mapitems')
            console.log(mapitems)


           
            // getRandomKey(strainmap)


            // const getRandomItem = strainmap => strainmap.get([...strainmap.keys()][Math.floor(Math.random() * strainmap.size)])
            const getRandomItem = strainmap => {
             return    [...strainmap][Math.floor(Math.random()*strainmap.size)]
            }
            // console.log(getRandomKey(strainmap))
            // console.log('randomMapItem')
            // console.log(randomMapItem)

                


       
            $("h1")
            .css('text-align', 'center')
            .css('color', 'papayawhip')
            .css('margin-top', '2.25em')
        </script>
