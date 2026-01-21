let tmp = 14

if (tmp>25){
    console.log("väga kuum ilm");
}else if(tmp>=15){
    console.log("mõnus temperatuur")
}else if(tmp<15){
    console.log("Külmmmmm onnnn")
}

let nimi = prompt("Mis on teie nimi?")
let adminid = "matu mattias elmers mati "

if(adminid.includes(nimi)){
    console.log("Tere administraator!!")
}else{
    console.log("Tere kasutaja!")
}

let tuup = prompt("taispilet või sooduspilet")
let vanus = prompt("kui vanad te olete?")

if((tuup === "taispilet") && (vanus<18)) {
    console.log("teie pilet on 10€")
}else if ((tuup === "taispilet") && (vanus<65)){
    console.log("teie pilet on 20€")
}else if ((tuup === "taispilet") && (vanus>=65)){
    console.log("teie pilet on 15€")
}else if((tuup === "sooduspilet") && (vanus<18)) {
    console.log("teie pilet on 8€")
}else if ((tuup === "sooduspilet") && (vanus<65)){
    console.log("teie pilet on 15€")
}else if ((tuup === "sooduspilet") && (vanus>=65)){
    console.log("teie pilet on 8€")
}else{
    console.log("midagi läks valesti!")
}
