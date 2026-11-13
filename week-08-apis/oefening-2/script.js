let allPokemon = [];

const pokemonList = document.querySelector('#pokemon-list');
const counter = document.querySelector('#counter');
const searchBar = document.querySelector('#search-bar');

const renderPokemon = (pokemon) => {
  pokemonList.replaceChildren();

  pokemon.forEach(pokemonItem => {
    const article = document.createElement('article');
    const heading = document.createElement('h2');
    const image = document.createElement('img');

    heading.textContent = pokemonItem.name;
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonItem.id}.png`;
    image.alt = pokemonItem.name;
    image.loading = 'lazy';

    article.append(heading, image);
    pokemonList.append(article);
  });

  counter.textContent = `${pokemon.length} Pokémon gevonden`;
};

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP-fout: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);

    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));

    renderPokemon(allPokemon);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van Pokémon:', error);
    counter.textContent = 'De Pokémon konden niet worden geladen. Probeer het later opnieuw.';
  });

searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.trim().toLowerCase();
  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  renderPokemon(filteredPokemon);
});
