/*
Mattias Elmers
17.11.2025
yl2
*/

let tund ="15:"
let minut = "05:"
let sekundid = 56
let aeg = tund + minut + sekundid;
console.log(aeg)

let tsitaat = "pull out"
console.log ("Ott Tammik: " + tsitaat)

let enimi = "lMattias"
let pnimi = "Elmers"
console.log ("Mattias Elmers nime tähed on " + enimi[0] + "." + pnimi[0] + ".")

let nimi = "Mattias,Elmers"
console.log(nimi)
console.log("perenime pikkus: " + nimi.split(",")[1].length);

let mail = "mattias.elmers@netlog.com"
console.log(mail.replaceAll("netlog", "gmail"));

let andmerida = "1,Marshal,Martinovic,mmartinovic0@netlog.com,Male,40.19.226.175"

console.log(andmerida.split(",")[5] + " ja " + andmerida.split(",")[3].split("@")[0])