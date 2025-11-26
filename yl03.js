/*
Mattias Elmers
26.11.2025
yl3
*/
let kiirus = 90
let kaugus = 100    
let aeg = kaugus / kiirus
console.log("sõit võtab umbes " + aeg.toFixed(2) + " tundi")

let postitused = 137

let lehtikokk = postitused / 10
let lehtikokku = lehtikokk + 1 
let ulejaanudpostitused = postitused % 10
console.log("kokku on lehti " + ~~lehtikokku + " ja viimasel lehel on " + ulejaanudpostitused + " postitust")

let voimsus = 400
let hind = 0.97

let kwh = voimsus / 1000

let kulu = kwh * hind
console.log ("kui serveri võimsus on " + voimsus + " vatti ja hind on " + hind +"eurot/kwh siis kulu on: " + kulu + " eurot tunnis" )