/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/


const inputfullName = document.getElementById('input-fullname');
const inputKm = document.getElementById('input-km');
const inputAge = document.getElementById('age');

const submit = document.getElementById('next-buttun');
const reset = document.getElementById('reset-buttun');

const name = document.getElementById('name');
const offer = document.getElementById('offer');
const numberCarriage = document.getElementById('numberCarriage');
const cp = document.getElementById('cp');
const price = document.getElementById('price');
const ticket = document.getElementById('form-ticket');



submit.addEventListener('click', (e) => {
   e.preventDefault();

   const fullName = inputfullName.value;
   const km = inputKm.value;
   const age = inputAge.value;

   const priceStandard = 0.21 * km;
   const priceMin = ((0.21 * km) - (priceStandard * 0.20));
   const priceOver = ((0.21 * km) - (priceStandard * 0.40));

   const numberCarriage = Math.floor(Math.random() * 10) + 1;
   const cpRandom = Math.floor(Math.random() * 9001) + 1000;

   const printerFinalTicket = finalTicket(age);
   const printerPrice = totalPrice(age, priceStandard, priceMin, priceOver);

   printerTicket (fullName, printerFinalTicket, numberCarriage, cpRandom, printerPrice);
   
   
});


function printerTicket(nameTest, ticketTest, carriage, cpTest, priceTest) {

  name.innerText = nameTest;
  offer.innerText = ticketTest;
  numberCarriage.innerText = carriage;
  cp.innerText = cpTest;
  price.innerText = priceTest.toFixed(2);

  ticket.classList.remove('d-none');
}

reset.addEventListener('click', (e) => {
  e.preventDefault();
  
  inputfullName.value = '';
  inputKm.value = '';
  inputAge.value = '';

  ticket.classList.add('d-none');
});

function totalPrice (age, price, min, over){
  if (age >= 18 && age <= 65){
    totPrice = price;
  } else if (age < 18){
    totPrice = min;
  } else {
    totPrice = over;
  }

  return totPrice;
}

function finalTicket (age){
  if (age >= 18 && age <= 65){
    return 'Biglietto Standard';
  } else if (age < 18){
    return 'Biglietto per minorenni';
  } else {
    return 'Biglietto per over 65';
  }
}
