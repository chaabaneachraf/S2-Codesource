 //2.1 Exercice
// --- Opérateurs de comparaison ---
let score = 8;
let seuil = 10;
console.log(score > seuil);  //false
console.log(score === seuil);//false
console.log(score !== seuil);//true

// --- Stocker un résultat ---
let estValide = score >= seuil;
console.log(estValide);//false

// --- Opérateurs logiques ---
//let inscrit = false;
//let paiement = false;
let acces = score >= seuil && inscrit === true;
console.log(acces);//false

let entree = inscrit === false || paiement === false;
console.log(entree); //false
//2.2. Exercice
let age = 22;
let inscrit = true;
let paiement = false;
console.log(age>=18) ; //true
console.log(inscrit=== true) ; //true
console.log(paiement===true);//false
console.log(age>=18 && inscrit===true);// true
console.log(inscrit===true ||paiement===true);// true
console.log(!paiement);// true
