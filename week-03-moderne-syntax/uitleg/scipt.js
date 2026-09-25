let title = document.getElementById('title')
let button = document.getElementById('btn')
let section = document.getElementById('section')
let getName = document.getElementById('showname')


button.addEventListener('click', () => {
title.textContent = 'jooooooooo'
title.classList.toggle('active')
const p = document.createElement('p')
p.textContent = 'ik voeg een paragraaf toe'; 
section.appendChild(p)


}) 


const showname = (name, stad) => {
    return `Mijn naam is ${name} en ik woon in ${stad}`

}

getName.textContent = showname('Kadir', 'Maassluis')

let fruits = ['appel', 'banaan', 'perzik'];

for( let fruit of fruits ){
    getName.innerHTML += "<br>" +  fruit + "<br>"
   }
