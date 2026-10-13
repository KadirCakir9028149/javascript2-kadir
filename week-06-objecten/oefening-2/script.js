const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

function toonPersonen(elementId, personen) {
  const lijst = document.createElement('ul');
  const lijstItems = personen.map(({ name, city }) => {
    const item = document.createElement('li');
    item.textContent = `${name} - ${city}`;
    return item;
  });

  lijst.append(...lijstItems);
  document.getElementById(elementId).append(lijst);
}

toonPersonen('origineel', people);

const aangepastePeople = people.map((persoon) => ({
  ...persoon,
  city: 'Den Haag',
}));

toonPersonen('kopie', aangepastePeople);