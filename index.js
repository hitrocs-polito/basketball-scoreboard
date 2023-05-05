let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let homeOnePlus = document.getElementById("homeOnePlus")
let homeTwoPlus = document.getElementById("homeTwoPlus")
let homeThreePlus = document.getElementById("homeThreePlus")

let guestOnePlus = document.getElementById("guestOnePlus")
let guestTwoPlus = document.getElementById("guestTwoPlus")
let guestThreePlus = document.getElementById("guestThreePlus")
let home_score = 0
let guest_score = 0


homeOnePlus.addEventListener("click", function() {
    home_score += 1
    homeScore.textContent = home_score 
})

homeTwoPlus.addEventListener("click", function() {
    home_score += 2
    homeScore.textContent = home_score 
})

homeThreePlus.addEventListener("click", function() {
    home_score += 3
    homeScore.textContent = home_score 
})


guestOnePlus.addEventListener("click", function() {
    guest_score += 1
    guestScore.textContent = guest_score 
})

guestTwoPlus.addEventListener("click", function() {
    guest_score += 2
    guestScore.textContent = guest_score 
})

guestThreePlus.addEventListener("click", function() {
    guest_score += 3
    guestScore.textContent = guest_score 
})