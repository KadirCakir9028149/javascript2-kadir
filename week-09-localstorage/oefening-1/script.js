let input = document.querySelector('#input');
let saveButton = document.querySelector('#save');
let retrieveButton = document.querySelector('#retrieve');
let result = document.querySelector('#result');

// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
saveButton.addEventListener('click', () => {
    let inputValue = input.value.trim();
    localStorage.setItem('input value', inputValue);
    result.textContent = 'Tekst opgeslagen.';
});

// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
retrieveButton.addEventListener('click', () => {
    let getItemFromStore = localStorage.getItem('input value');

// Null-check: toon een melding als er nog niets opgeslagen is
    if (getItemFromStore === null) {
        result.textContent = 'Er is nog geen tekst opgeslagen.';
    } else {
        result.textContent = getItemFromStore;
    }
});
