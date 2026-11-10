fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    const characters = document.querySelector('#characters');

    data.results.forEach(character => {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const image = document.createElement('img');

      heading.textContent = character.name;
      image.src = character.image;
      image.alt = character.name;

      article.append(heading, image);
      characters.append(article);
    });
  })
  .catch(error => console.error('Fout:', error));
