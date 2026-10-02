const formulier = document.querySelector("#shop-form");
const invoerveld = document.querySelector("#shop-input");
const teller = document.querySelector("#counter");
const lijst = document.querySelector("#list");

const updateTeller = () => {
	const aantalProducten = lijst.querySelectorAll("li").length;
	const aantalAangevinkt = lijst.querySelectorAll("input:checked").length;

	teller.textContent = `${aantalAangevinkt}/${aantalProducten} producten in je mandje`;
};

updateTeller();

formulier.addEventListener("submit", function (event) {
	event.preventDefault();

	const productNaam = invoerveld.value.trim();

	if (productNaam === "") {
		return;
	}

	const product = document.createElement("li");
	const checkbox = document.createElement("input");
	const productTekst = document.createElement("span");
	const verwijderKnop = document.createElement("button");

	checkbox.type = "checkbox";
	productTekst.textContent = productNaam;
	verwijderKnop.textContent = "Verwijder";
	verwijderKnop.type = "button";

	checkbox.addEventListener("change", function () {
		product.classList.toggle("gekocht");
		updateTeller();
	});

	verwijderKnop.addEventListener("click", function () {
		product.remove();
		updateTeller();
	});

	product.append(checkbox, productTekst, verwijderKnop);
	lijst.appendChild(product);
	invoerveld.value = "";
	updateTeller();
});
