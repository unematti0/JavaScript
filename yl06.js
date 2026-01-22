let number = prompt("Sisesta number!")

switch (true) {
case number>0:
   console.log("arv on positiivne")
   break;
case number<0:
   console.log("arv on negatiivne")
   break;
case number == 0:
   console.log("arv on 0")
   break;
default:
   console.log("Pead sisestama arvu!")
}

let broneeringu_arv = prompt("Mitu inimest on:")

switch (broneeringu_arv) {
case "1" :
case "2" :
console.log("Valige laud kahele inimesele")
break;
case "3" :
case "4" :
console.log("Valige laud neljale inimesele")
break;
case "5" :
case "6" :
console.log("Valige laud kuuele inimesele")
break;

default:
    console.log("valige suur laud")
}