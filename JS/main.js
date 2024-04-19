

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// i multipli di 3 stampi “Fizz”
// i multipli di 5 stampi “Buzz”
// i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? 

// -----------------------------------------------------------------------------------------




const myUl = document.querySelector(`ul`);




for (let i = 1; i <= 100; i++) {
    console.log(`Ora metto in lista` + 1);
    const newLi = document.createElement(`li`);
    newLi.append(i);
    myUl.append(newLi);
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`FizzBuzz`);
        newLi.append(`FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`Fizz`);
        newLi.append(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`);
        newLi.append(`Buzz`);
    } else {
        console.log(i);
    }


}




