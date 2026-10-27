const booksList = document.querySelector('#books-list');

fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = `${book.title} — ${book.author} (${book.year})`;
      booksList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Fout:', error));
