let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function homePlusOne() {
    homeCount += 1
    homeScore.innerText = homeCount
}

function homePlusTwo() {
    homeCount += 2
    homeScore.innerText = homeCount
}

function homePlusThree() {
    homeCount += 3
    homeScore.innerText = homeCount
}

function guestPlusOne() {
    guestCount += 1
    guestScore.innerText = guestCount
}

function guestPlusTwo() {
    guestCount += 2
    guestScore.innerText = guestCount
}

function guestPlusThree() {
    guestCount += 3
    guestScore.innerText = guestCount
}