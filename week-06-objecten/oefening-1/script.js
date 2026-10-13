const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    return `Deze ${this.brand} ${this.name} is een fijne auto.`;
  },
  isOld() {
    return this.year < 2010;
  },
  drive(km) {
    this.mileage += km;
    return this.mileage;
  },
};

// Toon de resultaten in de drie output-elementen
document.getElementById('output-1').textContent = car.description();
document.getElementById('output-2').textContent = `Is de auto oud? ${car.isOld()}`;
document.getElementById('output-3').textContent = `Kilometerstand na 100 km rijden: ${car.drive(100)} km`;
