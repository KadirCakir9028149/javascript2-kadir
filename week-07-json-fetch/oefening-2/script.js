const filmsSection = document.querySelector('#films');

fetch('./movies.json')
  .then(response => response.json())
  .then(films => {
   for(let film of films){
    filmsSection.innerHTML += `
    <h2>${film.title}</h2>
    <p>${film.director}</p>
    <p>${film.year}</p>
    <p>${film.genre}</p>
    `
   }
  })
  .catch(error => console.error('Fout bij laden van films:', error));
