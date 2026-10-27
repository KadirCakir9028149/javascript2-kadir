let allArticles = [];

const showArticles = (articles) => {
  const articleElements = articles.map(article => {
    const articleElement = document.createElement('article');
    const category = document.createElement('span');
    const title = document.createElement('h2');
    const summary = document.createElement('p');

    category.textContent = article.category;
    title.textContent = article.title;
    summary.textContent = article.summary;
    articleElement.append(category, title, summary);

    return articleElement;
  });

  document.querySelector('#articles').replaceChildren(...articleElements);
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () => {
  const cityArticles = allArticles.filter(article => article.category === 'Stad');
  showArticles(cityArticles);
});

document.querySelector('#filter-technologie').addEventListener('click', () => {
  const technologyArticles = allArticles.filter(article => article.category === 'Technologie');
  showArticles(technologyArticles);
});

document.querySelector('#filter-media').addEventListener('click', () => {
  const mediaArticles = allArticles.filter(article => article.category === 'Media');
  showArticles(mediaArticles);
});
