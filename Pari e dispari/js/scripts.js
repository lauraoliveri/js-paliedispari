
// l'utente sceglie pari o dispari
const Pari = document.getElementById('pari_btn');
const Dispari = document.getElementById('dispari_btn');

// l'utente inserisce un numero da 1 a 5
const UserNumber = parseInt(document.getElementById('Inserisci').value);


// generiamo numero random per il computer
function Random () {
    const RandomNumber = parseInt(Math.floor((Math.random() *5) + 1));
    return RandomNumber;
}

// sommiamo numero user e computer
const Somma = (Random() + UserNumber);

// stabiliamo se la somma dei numeri è pari o dispari
function IsEven (num) {

    if (IsEven % 2 ==0) {
        alert('Hai vinto!')
    }
    else {
        alert('Hai perso!');
    }
}


// bottone vai

const BottoneVai = document.getElementById('btn_vai'); 

BottoneVai.addEventListener('click', function() {
    console.log('UserNumber', UserNumber);
    console.log('Computer number', Random());

    // somma dei numeri
    console.log('La somma dei due numeri è',Somma);

    if (Pari.checked && boh) {

    }
})




