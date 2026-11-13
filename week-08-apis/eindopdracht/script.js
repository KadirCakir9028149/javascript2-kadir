// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const weatherInfo = document.querySelector('#weather-info');
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
let latestRequest = 0;

const showMessage = (message) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  weatherInfo.replaceChildren(paragraph);
};

const showWeather = (data) => {
  const article = document.createElement('article');
  const heading = document.createElement('h2');
  const icon = document.createElement('img');
  const description = data.weather[0].description;

  heading.textContent = data.name;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.alt = description;

  const details = [
    ['Weer', description],
    ['Temperatuur', `${Math.round(data.main.temp)} °C`],
    ['Gevoelstemperatuur', `${Math.round(data.main.feels_like)} °C`],
    ['Luchtvochtigheid', `${data.main.humidity}%`],
    ['Windsnelheid', `${data.wind.speed} m/s`]
  ];

  article.append(heading, icon);

  details.forEach(([label, value]) => {
    const paragraph = document.createElement('p');
    const labelElement = document.createElement('span');
    const valueElement = document.createElement('span');

    labelElement.textContent = label;
    valueElement.textContent = value;
    paragraph.append(labelElement, valueElement);
    article.append(paragraph);
  });

  weatherInfo.replaceChildren(article);
};

const getWeather = async (city) => {
  if (typeof API_KEY === 'undefined' || !API_KEY || API_KEY === 'VUL_HIER_JE_KEY_IN') {
    showMessage('Stel eerst je OpenWeather API-key in via config.js.');
    return;
  }

  const requestId = ++latestRequest;
  showMessage('Weer ophalen...');

  try {
    const params = new URLSearchParams({
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'nl'
    });
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${params}`);
    const data = await response.json();

    if (!response.ok) {
      if (data.cod === '404' || data.cod === 404) {
        throw new Error('Deze stad is niet gevonden. Controleer de naam en probeer het opnieuw.');
      }

      if (data.cod === '401' || data.cod === 401) {
        throw new Error('De API-key is ongeldig of nog niet actief. Controleer config.js en probeer het later opnieuw.');
      }

      throw new Error(data.message || 'Het weer kon niet worden opgehaald.');
    }

    if (requestId === latestRequest) {
      showWeather(data);
    }
  } catch (error) {
    console.error('Fout bij het ophalen van het weer:', error);
    if (requestId === latestRequest) {
      showMessage(error.message || 'Er ging iets mis. Controleer je internetverbinding en probeer het opnieuw.');
    }
  }
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    showMessage('Vul eerst een stadsnaam in.');
    cityInput.focus();
    return;
  }

  getWeather(city);
  cityInput.value = '';
});
