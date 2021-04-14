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
        }, {
            name: 'tucan',
            img: 'imgs/tucan.jpg'
        }
    ]


    const grid = document.querySelector('.grid')

    //create gameboard (first function written)

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++ ) {
            const card = document.createElement('img')
            card.setAttribute('src', 'imgs/watercolor/watercolor.png')
            card.setAttribute('data-id', i)  //what is data-id??
            // card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches

    // flip your card (second function written)
    function flipCard() {

    }
  
    createBoard()


})

