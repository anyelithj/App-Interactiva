
import {createElements } from "/JS/carrusel.js"
import {categorias} from "/JS/categorias.js"

//const elementsLi = ['animals','food','quiz','C']
const elementsLi = [];


let divCarrusel = document.getElementById("carouselContenedor");

let ul = document.getElementById("listaCategorias");


fetch('http://localhost:3000/categoria')
.then(response => response.json())  // convertir a json
.then(function(data) {
    data.forEach(name => {
    elementsLi.push(name.name)
 
    const li = document.createElement('li')
    li.setAttribute('title',name.id)
    li.style.position = 'relative';
    const a = document.createElement('a')
    a.setAttribute('href','#')
    a.onclick = function(){categorias(divCarrusel,name.name)}
    const img = document.createElement('img')
    img.setAttribute('id',name.id)
    img.setAttribute('src',''+name.img)
    a.appendChild(img)
    li.appendChild(a)
    ul.appendChild(li)

  
createElements()
})
})