/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let buttonEl = document.getElementById('btn')
let inputEl = document.getElementById('input-el')
let lengthEl = document.getElementById('convt-1')
let volumeEl = document.getElementById('convt-2')
let massEl = document.getElementById('convt-3')

let meter = 3.281 ;
let liter = 0.264 ;
let kilogram = 2.204 ;

buttonEl.addEventListener('click' , function(){
    let entry = inputEl.value
    lengthEl.textContent = ` ${entry} meters = ${ (entry * meter).toFixed(3) } feet | ${entry} feet = ${ (entry /meter).toFixed(3) } meters`
    
    volumeEl.textContent = ` ${entry} liters  = ${ (entry * liter).toFixed(3) } gallons | ${entry} gallons = ${ (entry /liter).toFixed(3) } liters`
    
    massEl.textContent = ` ${entry} kilos = ${ (entry * kilogram).toFixed(3) } pounds | ${entry} pounds = ${ (entry /kilogram).toFixed(3) } kilos`
    
    



})