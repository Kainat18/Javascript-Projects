const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById('btn')
let passEl1 = document.getElementById('pass1-el')
let passEl2 = document.getElementById('pass2-el')
let passwordLength = 15 ;

function getRandom(){
    let randomArray = Math.floor(Math.random() * characters.length)
      return characters[randomArray]  
}

function generatePassword(){
    passEl1.textContent = password();
    passEl2.textContent = password();
}

function password(){ 
let char = "";
for(let i = 0 ;  i < passwordLength ; i++){
   char += getRandom()
    }
 
   return char
}





