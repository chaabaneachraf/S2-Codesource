//Exercice 1 
for ( let nomber = 1 ; nomber <=20; nomber++) {
    if(nomber %2==0)
    console.log(nomber)
  }
  //Exercice 2
  let somme = 0 ;
  for( let i=1;i<=10 ; i++) {
    somme =somme+i ;
    console.log(somme)
  } 
  //Exercice 3
  let computer=0;
  let somme1 =0;
  for (let a= 1 ; a<=20 ; a++) {
    if( a%2==0){
      somme1=somme1+a;
      computer++;
    }
    
  }
  console.log("Nombre de pairs : " , computer);
  console.log("Somme des pairs : " , somme1);