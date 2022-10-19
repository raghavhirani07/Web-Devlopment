let divElement = document.createElement('div');
let text = document.createTextNode('this is my element click to edit it ');
divElement.appendChild(text)
divElement.setAttribute('id', 'elem');
divElement.setAttribute('style', 'border:2px solid black ; width :154px margin:34px; pading :23px;');
//console.log(divElement)
let container = document.querySelector('.container');
console.log(container)
let first = document.getElementById('myfirst');
container.insertBefore(divElement, first)