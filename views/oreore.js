        <style>
            body {
                border: 5px solid rgb(247, 208, 36);
                box-shadow: 10px 10px 10px papayawhip;
            }
            .surveyContainer {
                /* border: 5px solid hotpink; */
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

                const findEffect = () => {
                    let randomstrain = ajaxstrain[Math.floor(Math.random()*ajaxstrain.length)]
                    console.log('randomstrain and name')
                    console.log(randomstrain)
                    console.log(randomstrain.strain)
                    strainmap.set('strain', `${randomstrain.gold}`)
                }   

                section
                .mouseenter( (event) => {
                    $(event.target).css('border', '10px solid papayawhip')
                    console.log('thats called hovering')
                    findEffect()
                    let randomStrain = strainmap.get('strain')
                    console.log('randomStrain')
                    console.log(randomStrain)
                    // let prepainpoint = randomStrain.split()
                    let prepainpoint = randomStrain.split(', ')  // (2) ['insomnia', 'focused'] ** this is what we want ** picking one word from db.strain.gold
                    console.log('prepainpoint')
                    console.log(prepainpoint)
                    $(event.target).unbind('mouseenter')
                    
                })




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
