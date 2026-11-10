let message = "dit is een bericht"

let input = document.querySelector('#input');
let button = document.querySelector('#button');

button.addEventListener('click', () => {
    let inputValue = input.value.trim();
    localStorage.setItem('input value', inputValue)
})

let getItemFromStore = localStorage.getItem('input value');