const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

const findInput = document.querySelector('#search-find');
const findOutput = document.querySelector('#output-find');
const includesInput = document.querySelector('#search-includes');
const includesOutput = document.querySelector('#output-includes');

findInput.addEventListener('input', () => {
  const letter = findInput.value.trim().toLowerCase();

  if (letter === '') {
    findOutput.textContent = '';
    return;
  }

  const foundName = names.find(name =>
    name.toLowerCase().startsWith(letter)
  );

  findOutput.textContent = foundName
    ? `Eerste naam met "${letter}": ${foundName}`
    : `Geen naam gevonden met "${letter}".`;
});

findInput.addEventListener('change', () => {
  findInput.value = '';
});

includesInput.addEventListener('input', () => {
  const searchedName = includesInput.value.trim().toLowerCase();

  if (searchedName === '') {
    includesOutput.textContent = '';
    return;
  }

  const lowerCaseNames = names.map(name => name.toLowerCase());
  const isInList = lowerCaseNames.includes(searchedName);

  includesOutput.textContent = isInList
    ? 'Ja, deze naam staat in de lijst.'
    : 'Nee, deze naam staat niet in de lijst.';
});

includesInput.addEventListener('change', () => {
  includesInput.value = '';
});
