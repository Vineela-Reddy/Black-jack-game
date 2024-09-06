
let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""
let player = {
    name: "Vineela",
    chips: 145
}

let playerEl = document.getElementById('player-el').textContent = player.name + ":$" + player.chips
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
function startgame() {
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    rendergame()
}
function rendergame() {

    if (sum <= 20) {
        message = "Do you what to draw new card!"
    }
    else if (sum == 21) {
        message = "Wahoo!You've got BlackJack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of game!"
        isAlive = false
    }


    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Cards:"
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}
function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        let card = getrandomcard()
        sum += card
        cards.push(card)
        rendergame()
    }
}
function getrandomcard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random == 1) {
        return 11
    } else if (random > 10) {
        return 10
    } else {
        return random
    }
}
//for(start;finish;step size)
// for (let count = 10; count < 20; count += 2)
//     console.log(count)
// let car = [2, 4, 7]
// for (let i = 0; i <= car.length; i++) {
//     console.log(car[i])
// }
// math.random() generates random numbers
// math.floor() removes the after decimal number
//objects store data in depth-composite data types/key value pairs                                                                                                                                                                 

