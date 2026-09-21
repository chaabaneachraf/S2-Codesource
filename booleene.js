//Vérifier une comparaison
console.log(10>15) //Affiche false
console.log( 10===15) // Affiche false
console.log( 10!==15)  //Affiche true
console.log( 10>15) //Affiche false
console.log( 10<15) //Affiche true
console.log( 10<=15) //Affiche true
console.log( 10>=15) //Affiche false
//Utiliser une variable
let age = 20; 
console.log( age>=30) ; //Affiche false
//Stocker le résultat
let num=20;
let estMjeur=num>=18 ;
console.log( estMjeur);//Affiche true
// Utiliser && (et)
let num1= 20;
let autorisation=true;
let acces = nun1>=18 && autorisation===true;
console.log (acces); //Affiche true
//Utiliser ||(ou)
let membre= false;
let invitation= true;
let entre = membre===true || invitation===true;
console.log(entre); //Affiche true
//Utiliser !(non)
let disponible=true;
console.log(!disponible) //Affiche true
//Exercice — Prévoir le résultat
console.log(5> 2); // Affiche true
console.log(5<2); // Affiche false
console.log(10 ===10); // Affiche true
console.log(10 !== 10); // Affiche false
console.log(8>=8); // Affiche true
console.log(3<=2); // Affiche false
console.log(true &&true); // Affiche true
console.log(true&& false); // Affiche false
console.log(false || true); // Affiche true
console.log ( !false);//Affiche true
//Exercice — Analyser des variables
let num2= 22;
let inscrit =true;
let paiment= false;
console.log(num2>=18) ;//Affiche true
console.log(inscrit===true);//Affiche true
console.log(paiment===true) ; //Affiche false
console.log(num2>=18 && inscrit===true) ;//Affiche true
console.log(inscrit===true ||paiment===false);//Affiche true
