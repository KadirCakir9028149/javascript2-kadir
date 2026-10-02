// Selecteer alle vakken met querySelectorAll als houvast
const vakken = document.querySelectorAll(".box");

// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt
for (const vak of vakken) {
	vak.addEventListener("click", function () {
		vak.classList.toggle("active");
	});
}
