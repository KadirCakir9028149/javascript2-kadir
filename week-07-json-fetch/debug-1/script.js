// Fout was: de fetch gebruikte new.json, maar het bestand heet news.json.

fetch('./news.json')
  .then(r => r.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
