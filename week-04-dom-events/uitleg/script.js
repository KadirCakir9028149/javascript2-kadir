const button = document.getElementById('btn');
let songList = document.getElementById('songList')
const songinput = document.getElementById('songinput')


button.addEventListener('click', () => {
const input = songinput.value.trim()

const lijst = document.createElement('li')
lijst.textContent = input
const button2 = document.createElement('button');

button2.addEventListener('click', () => {
lijst.remove();
})

button2.textContent = 'delete'
lijst.appendChild(button2)


songList.appendChild(lijst)

songinput.value = ''


} )

