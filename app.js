document.addEventListener('DOMContentLoaded', () => {
    //console.log('DOM fully loaded and parsed');
    const cardArray = [
        {
            name: 'giraffe',
            img: 'imgs/giraffe.jpg'
        },

        {
            name: 'giraffe',
            img: 'imgs/giraffe.jpg'
        },
        {
            name: 'hippo',
            img: 'imgs/hippo.jpg'
        },
        {
            name: 'hippo',
            img: 'imgs/hippo.jpg'
        },
        {
            name: 'hyena',
            img: 'imgs/hyena.jpg'
        },
        {
            name: 'hyena',
            img: 'imgs/hyena.jpg'
        },
        {
            name: 'lion',
            img: 'imgs/lion.jpg'
        },
        {
            name: 'lion',
            img: 'imgs/lion.jpg'
        }, 
        {
            name: 'monkey',
            img: 'imgs/monkey.jpg'
        }, 
        {
            name: 'monkey',
            img: 'imgs/monkey.jpg'
        }, 
        {
            name: 'tucan',
            img: 'imgs/tucan.jpg'
        }, 
        {
            name: 'tucan',
            img: 'imgs/tucan.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create gameboard (first function written)
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'imgs/watercolor/watercolor.png')
            card.setAttribute('data-id', i) 
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'imgs/watercolor/watercolor.png')
            cards[optionTwoId].setAttribute('src', 'imgs/watercolor/watercolor.png')
            // alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'imgs/spring/spring.png')
            cards[optionTwoId].setAttribute('src', 'imgs/spring/spring.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'imgs/watercolor/watercolor.png')
            cards[optionTwoId].setAttribute('src', 'imgs/watercolor/watercolor.png')
            // alert('Sorry, try again!')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congrats! You found them all!'
        }

    }

    // flip your card (second function written)
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name) //get name of card related to that id
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 750)
        }
    }
  
    createBoard()
})

