const products = [
  { name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: true },
  { name: 'Draadloze muis', category: 'Electronics', price: 29, stock: true },
  { name: 'USB-C hub', category: 'Electronics', price: 49, stock: false },
  { name: 'Bureaulamp', category: 'Kantoor', price: 35, stock: true },
  { name: 'Notitieboek', category: 'Kantoor', price: 8, stock: true },
  { name: 'Pennenset', category: 'Kantoor', price: 12, stock: false },
  { name: 'Koptelefoon', category: 'Audio', price: 89, stock: true },
  { name: 'Bluetooth speaker', category: 'Audio', price: 59, stock: true },
  { name: 'Webcam HD', category: 'Electronics', price: 79, stock: false },
  { name: 'Muismat XL', category: 'Kantoor', price: 19, stock: true },
  { name: 'Monitor 27"', category: 'Electronics', price: 349, stock: true },
  { name: 'Desk organizer', category: 'Kantoor', price: 24, stock: true },
];

let searchTerm = '';
let sorting = '';

const showProducts = (products) => {
  const productList = document.querySelector('#products');
  const counter = document.querySelector('#counter');

  productList.innerHTML = '';
  counter.textContent = `${products.length} producten`;

  products.forEach(product => {
    const article = document.createElement('article');
    const name = document.createElement('h3');
    const price = document.createElement('p');

    name.textContent = product.name;
    price.textContent = `€${product.price}`;

    article.append(name, price);
    productList.append(article);
  });
};

const filterProducts = () => {
  let filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  if (sorting === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sorting === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  showProducts(filtered);
};

document.querySelector('#search-bar').addEventListener('input', (event) => {
  searchTerm = event.target.value.toLowerCase();
  filterProducts();
});

document.querySelector('#sort-low').addEventListener('click', () => {
  sorting = 'low';
  filterProducts();
});

document.querySelector('#sort-high').addEventListener('click', () => {
  sorting = 'high';
  filterProducts();
});

filterProducts();
