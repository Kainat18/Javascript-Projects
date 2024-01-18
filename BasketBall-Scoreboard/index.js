let homeScore= document.getElementById('home-score')
let guestScore= document.getElementById('guest-score')
let homeCounter = 0
let guestCounter = 0

//HomeScore
function addOne(){
    homeScore.innerText = homeCounter +=1
 
}

function addTwo(){
    homeScore.innerText = homeCounter += 2
     
}


function addThree(){
    homeScore.innerText = homeCounter +=3
     
}

//GuestScore 
function addOnetoGuest(){
    
    guestScore.innerText = guestCounter +=1 
    
}

function addTwotoGuest(){
    guestScore.innerText = guestCounter +=2
    
 }

function addThreetoGuest(){
    guestScore.innerText = guestCounter += 3
    
}