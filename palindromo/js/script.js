//chiediamo all'utente di inserire una parola
const word = prompt("Inserisci una parola e scopriamo se è palindroma")
console.log(`La parola inserita è '${word}'`);
let inverseWord = "";
inverseWord = invertWord(word);

//SE la parola è uguale a il suo inverso (generato con la funzione)
if(word == inverseWord){
    console.log('Quindi la parola è palindroma');
  } else { //ALTRIMENTI
    console.log('Quindi la parola non è palindroma');
}

function invertWord(word){
  let inverseWord = "";
// l'indice è inizializzato all'ultima lettera della parola
  let i = word.length - 1;
//Finchè i maggiore-uguale a 0
  while (i >= 0) {
    inverseWord += word[i];//aggiungo la lettera corrente e
    i--;                   //decremento i
  }
 console.log(`L'inverso della parola inserità è '${inverseWord}'`);
  return inverseWord;
}