
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
        return true;
    }
    else {
        return false;
    }
}


// bottone per il risultato finale

const BottoneVai = document.getElementById('btn_vai'); 

BottoneVai.addEventListener('click', function() {
    console.log('UserNumber', UserNumber);
    console.log('Computer number', Random());

    // somma dei numeri
    console.log('La somma dei due numeri è',Somma);

    // se l'user ha scelto pari allora
    if (Pari.checked) {
        
        if (IsEven(Somma) === true) {
            alert('Hai vinto!')
        }
        else {
            alert('Hai perso!')
        }

    }

    // se l'user ha scelto dispari allora
    
    else if (Dispari.checked) {

        if (IsEven(Somma) === false) {
            alert('Hai vinto!')
        }
        else {
            alert('Hai perso!')
        }

    }
})




