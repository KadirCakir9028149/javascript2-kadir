let carsList = document.getElementById('carsList')

// let cars = [
//   {
//     name: 'Fiat',
//     model: '500',
//     color: 'White',
//   },
//   {
//     name: 'Volvo',
//     model: 'S60',
//     color: 'Grey',
//   },
//   {
//     name: 'BMW',
//     model: 'X7',
//     color: 'Black',
//   },
// ];

fetch('./cars.json')
  .then(response => response.json())
  .then(cars => {
    for (let car of cars) {
      carsList.innerHTML += `<p>${car.name}</p>`;
    }
  })
  .catch(error => console.error('Fout:', error));
