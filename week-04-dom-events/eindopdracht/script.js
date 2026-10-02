// Selecteer het formulier, invoerveld, takenlijst en teller
const formulier = document.querySelector("#task-form");
const invoerveld = document.querySelector("#task-input");
const takenlijst = document.querySelector("#tasks");
const teller = document.querySelector("#counter");

// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
function taakToevoegen(taakTekst) {
	const taak = document.createElement("li");
	const checkbox = document.createElement("input");
	const tekst = document.createElement("span");
	const verwijderKnop = document.createElement("button");

	checkbox.type = "checkbox";
	tekst.textContent = taakTekst;
	verwijderKnop.type = "button";
	verwijderKnop.textContent = "Verwijder";

	// Vink de taak af wanneer de checkbox wordt aangeklikt
	checkbox.addEventListener("change", function () {
		taak.classList.toggle("afgevinkt", checkbox.checked);
	});

	// Verwijder de taak uit de lijst
	verwijderKnop.addEventListener("click", function () {
		taak.remove();
		toonTaken();
	});

	taak.append(checkbox, tekst, verwijderKnop);
	takenlijst.appendChild(taak);
	toonTaken();
}

// toonTaken() — werk de teller bij
function toonTaken() {
	const aantalTaken = takenlijst.children.length;

	if (aantalTaken === 1) {
		teller.textContent = "1 taak";
	} else {
		teller.textContent = `${aantalTaken} taken`;
	}
}

// Voeg listeners toe aan het formulier en de taken
formulier.addEventListener("submit", function (event) {
	event.preventDefault();

	const taakTekst = invoerveld.value.trim();

	if (taakTekst === "") {
		return;
	}

	taakToevoegen(taakTekst);
	formulier.reset();
	invoerveld.focus();
});

toonTaken();
