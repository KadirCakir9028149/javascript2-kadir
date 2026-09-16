let input = document.getElementById('input')
let output = document.getElementById('output')
let button = document.getElementById('button')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let buttonPlus = document.getElementById('button plus')

button.addEventListener('click', function(){
   button.style.backgroundColor = 'red'; 
   output.textContent = input.value;
   output.style.color = 'green';
   input.value = '';
})




buttonPlus.addEventListener('click', function(){
  let result = optellen(input2.value, input3.value);
  output.textContent = result;})


function optellen(a, b) {

  return a * b; 
}