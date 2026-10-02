const button = document.getElementById('add');
const list = document.getElementById('list');
const input = document.getElementById('input');

button.addEventListener('click', () => {
	const text = input.value.trim();

	if (text === '') {
		return;
	}

	const item = document.createElement('li');
	item.textContent = text;

	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Verwijder';
	deleteButton.addEventListener('click', () => {
		item.remove();
	});

	item.appendChild(deleteButton);
	list.appendChild(item);
	input.value = '';
});

