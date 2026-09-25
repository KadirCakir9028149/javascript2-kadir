// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const profileForm = document.querySelector('#profile-form');
const profilesList = document.querySelector('#profiles-list');

profileForm.addEventListener('submit', (event) => {
event.preventDefault();

const name = document.querySelector('#name').value;
const role = document.querySelector('#role').value;
const department = document.querySelector('#department').value;

profilesList.innerHTML += `
<article>
<h3>${name}</h3>
<p>Functie: ${role}</p>
<p>Afdeling: ${department}</p>
<button class="delete-button" type="button">Verwijderen</button>
</article>
`;

const newProfile = profilesList.lastElementChild;
const deleteButton = newProfile.querySelector('.delete-button');

deleteButton.addEventListener('click', () => {
newProfile.remove();
});

profileForm.reset();
});