const raha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20]

const mundid = []
let i = 0
let summa = 0

while (i < raha.length){
    if ( 1> raha[i]){
         mundid.push(raha[i]);
         summa += raha[i]
    }
    i++
}

console.log(mundid)
console.log("müntie summa: " + summa)
console.log("müntide arv: " + mundid.length)