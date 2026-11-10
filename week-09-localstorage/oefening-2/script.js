const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

const withoutJsonSection = document.querySelector('#zonder-json');
localStorage.setItem('user-zonder-json', user);
const userWithoutJson = localStorage.getItem('user-zonder-json');

const withoutJsonResult = document.createElement('p');
withoutJsonResult.textContent = `Opgehaald uit localStorage: ${userWithoutJson}. Zonder JSON wordt het object de tekst "[object Object]".`;
withoutJsonSection.append(withoutJsonResult);

const withJsonSection = document.querySelector('#met-json');
localStorage.setItem('user-met-json', JSON.stringify(user));
const userWithJson = JSON.parse(localStorage.getItem('user-met-json'));

const withJsonResult = document.createElement('pre');
withJsonResult.textContent = JSON.stringify(userWithJson, null, 2);
withJsonSection.append(withJsonResult);
