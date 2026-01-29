const noolFunktsioon = () => {
  console.log("Mattias Elmers (noole funktsiooniga)")
};

noolFunktsioon();

function nimi() {
  console.log("Mattias Elmers (klassikaline funktsioon)");
};

nimi();


function kuupaevEesti(a) {
let eraldatud= a.split(".")

let paev = eraldatud[0]
let kuu;
switch (eraldatud[1]){
    case "1":
        kuu = "jaanuar"
        break;
    case "2":
        kuu = "veebruar"
        break;
    case "3":
        kuu = "marts"
        break;
    case "4":
        kuu = "aprill"
        break;
    case "5":
        kuu = "mai"
        break;
    case "6":
        kuu = "juuni"
        break;
    case "7":
        kuu = "juuli"
        break;
    case "8":
        kuu = "august"
        break;
    case "9":
        kuu = "september"
        break;
    case "10":
        kuu = "oktoober"
        break;
    case "11":
        kuu = "november"
        break;
    case "12": 
        kuu = "detsember"
        break;
}

let aasta = "20" + eraldatud[2]
console.log ("täna on " + paev +" " + kuu + " " + aasta) 

};

kuupaevEesti("8.2.27")

