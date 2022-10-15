const userChoise = prompt("Pari o Dispari?");
 if(userChoise !== "pari" && userChoise !== "dispari"){
    alert("La tua scelta non rientra in quelle proposte! Riscivi e stavolta bene!");
}else{
    console.log(`la tua scelta è ${userChoise}`);

    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
        
    if (userNumber < 1 || userNumber > 5){
        alert("Ho chiesto un numero da 1 a 5 , ne più ne meno!");
    }else{
        console.log(`il numero che hai scelto è ${userNumber}`);

        const computerNumber = aRandomNumber();
        console.log(`il numero del computer è ${computerNumber}`);
        const sumNumbers = userNumber + computerNumber;
        const rest = isOddorEven(sumNumbers);
        console.log(rest);
        if(rest == 0 && userChoise == "pari" || rest !== 0 && userChoise == "dispari"){
            console.log("Hai vinto ..che CUULOO!!");
        }else{
            console.log("Ha vinto il computer :(");
        }

        function aRandomNumber(){
            let rndNumber = Math.floor(Math.random() * 5) + 1;
            return rndNumber;
        }

        function isOddorEven(number){
            const result = number % 2;
            return result;
        }

    }
}