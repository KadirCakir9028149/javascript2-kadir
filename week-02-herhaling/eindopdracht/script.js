let submit = document.getElementById('submit')
let result = document.getElementById('result')
let bedrag = document.getElementById('bedrag')  
let korting = document.getElementById('korting')
let amount = document.getElementById('amount')
let discount = document.getElementById('discount')

console.log(amount, discount)

// Stap 1: Schrijf calculateTotal(bedrag, korting)
submit.addEventListener('click', function(e){
    e.preventDefault(); 
    console.log(amount.value, discount.value)

  result.textContent = "het antwoord is"+ optellen(amount.value, discount.value);
})


function optellen(a, b) {

  return a / b; 
}

