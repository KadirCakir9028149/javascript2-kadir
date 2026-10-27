// Fout was: het JSON-bestand had een kommafout en de fetch, selector en appendChild waren onjuist.

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
