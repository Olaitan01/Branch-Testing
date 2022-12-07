let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
let homeScore= 0;
let guestScore= 0;
let min=00;
let sec=00;

function addHome1(){
    homeScore +=1;
    homeEl.textContent= homeScore;
}

    
function addHome2(){
    homeScore +=2;
    homeEl.textContent= homeScore;
}
function addHome3(){
    homeScore +=3;
    homeEl.textContent = homeScore;
    
}

function addGuest1(){
    guestScore +=1;
    guestEl.textContent= guestScore;
    
}
function addGuest2(){
    guestScore +=2;
    guestEl.textContent= guestScore;
    
}
function addGuest3(){
    guestScore +=3
    guestEl.textContent= guestScore
    
}

