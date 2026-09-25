const title = document.getElementById('title');
const button = document.getElementById('btn');
const section = document.getElementById('section');

let naam = 'Kadir';
let opleiding = 'Software Developer';
let aantalKlikken = 0;

const berekenPunten = (aantalKlikken) => {
	return aantalKlikken * 10;
};

console.log(berekenPunten(3));

button.addEventListener('click', () => {
	aantalKlikken++;
	title.textContent = `Hoi, ik ben ${naam} en ik doe de opleiding ${opleiding}`;
	title.classList.toggle('active');

	const paragraaf = document.createElement('p');
	paragraaf.textContent = `Klik ${aantalKlikken}: je hebt nu ${berekenPunten(aantalKlikken)} punten`;
	section.appendChild(paragraaf);
});
