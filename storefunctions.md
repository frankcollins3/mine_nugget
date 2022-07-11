<!-- navbar mine.hover get the background.png image -->

<!-- * family tree page -->
// const addBox = () => {
            //         console.log('dad length')
            //         console.log($('.parent').length)
            //         // for (let i = 0; i < parents.length; i++) {
            //             let textBox = document.createElement('div')
            //             $(textBox)
            //             .css('height', '100px')
            //             .css('width', '100px')
            //             .css('background-color', 'white')
            //             // .css('border', '5px solid green')

            //             let containerContainer = document.createElement('div')
            //             $(containerContainer)
            //             .addClass('containerContainer')

            //             let newContainer = document.createElement('div')        
            //             // was doing this for about an hour before seeing its better to make two containers.  1 for the parents 1 for the .childnren()
            //             $(newContainer)
            //             .addClass('newContainer')
            //             .attr('id', 'newcontainer1')
            //             .css('height', `${famheight/12}`)
            //             .css('width', `${famwidth/10}`)
                    
            //             let newContainer2 = document.createElement('div')        
            //             $(newContainer2)
            //             .attr('id', 'newcontainer2')
            //             .addClass('newContainer')
            //             .css('height', `${famheight/12}`)
            //             .css('width', `${famwidth/10}`)

            //             let childContainer = document.createElement('div')
            //             $(childContainer)
            //             .css('height', `${famheight/20}`)
            //             .css('width', `${famwidth/20}`)
            //             .css("display", 'flex')
            //             .css("justify-content", 'center')
            //             .css("margin-top", '5em')
            //             .css("background-color", 'rgb(62, 50, 32')
            //             .css("border", '5px solid papayawhip')
            //             .css("box-shadow", '15px 15px 15px rgb(247, 208, 36')
            //             .css("padding", '0em 10em 0em 10em')

            //             bod.append($(containerContainer))

            //             $(containerContainer)
            //             .append(newContainer)
            //             .append(newContainer2)

            //             bod
            //             .append($(playButton))       // very neat to see everything fall in line.
            //             .append($(childContainer))
            //     }  // addBox function
                // addBox()

# if ($('p').length == 2) {                     
                                                    console.log("yeah we got that length = 2 in container2")
                                                    $('#playBtn').css("opacity", "1.0")
                                                    console.log('randomStrain')
                                                    console.log(randomStrain)
                                                    let correctAnswer = randomStrain.strain
                                                    console.log('correctAnswer')
                                                    console.log(correctAnswer)
                                                    
                                                    const findWrongAnswer = async () => {
                                                        let preAnswer = strains[Math.floor(Math.random()*strains.length)]
                                                        let answer = preAnswer.strain
                                                          function answer1() {
                                                            if (answer == correctAnswer) {
                                                                console.log("our answer == our correct answer but were fixing that")
                                                                preAnswer = ''
                                                                console.log(`preanswer changed to nothing ${preAnswer}`)
                                                                answer = ''
                                                                
                                                                let preAnswer = strains[Math.floor(Math.random()*strains.length)]
                                                                let answer = preAnswer.strain
                                                                // let preAnswer = strains[Math.floor(Math.random()*strains.length)]
                                                                // let answer = preAnswer.strain
    
                                                                console.log(`changing preAnswer to hopefully a new random value ${preAnswer}`)
                                                                console.log(`answer hopefully changed.! ${answer}`)
                                                                console.log("we have equal values keep running the")
                                                            } else {        
                                                                // return preAnswer = strains[Math.floor(Math.random()*strains.length)]
                                                                return answer = preAnswer.strain
                                                                console.log("THIS IS OUR RETURN VALUE!!!! BECAUSE our wrong answer doesnt == correctAnswer")
                                                            }
                                                        }                                            
                                                         function answer2() {
                                                            preAnswer = ''
                                                            answer = ''
                                                            preAnswer = strains[Math.floor(Math.random()*strains.length)]
                                                            answer = preAnswer.strain
                                                            if (answer == correctAnswer) {
                                                            preAnswer = ''
                                                            answer = ''
                                                            preAnswer = strains[Math.floor(Math.random()*strains.length)]
                                                            answer = preAnswer.strain
                                                            } else {
                                                            return answer
                                                            }
                                                        }
                                                        const returnValues = async () => {
                                                            // let returnArray = [answer1(), answer2()]
                                                            let returnArray = [await answer1(), await answer2()]
                                                            return returnArray
                                                            console.log('this is our return array')
                                                            console.log(returnArray)
                                                        }
                                                        returnValues()
        // real world example of infinite-loop. The else statement keeps going automatically if you we don't have a return. [ha. ignore. setInterval(func) works with no "1000"] second argument.
                                                        // let randomStrain = strains[Math.floor(Math.random()*strains.length)]
                                                        console.log('answer')
                                                        console.log(answer)                                                         
                                                        // if (strains[Math.floor(Math.random)()*strains.length]) {
                                                        // }
                                                    }                                                                                                 
                                                    // }                                        
                                                }
<!-- MY REFLEX WITH  command-option-L/R[arrow]   to select a whole entire word/setofCharacters is quite increased.       ************************** -->