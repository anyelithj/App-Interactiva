
import {cargarIconos,cargarIconosfood} from "./index.js"

let selecciones = []
let len;
let tablero = document.getElementById("tablero")
let tablero2 = document.getElementById("tablero2")

function generarTablero(iconos,typetablero) {
    cargarIconos()
    len = iconos.length
    let tarjetas = []
    for (let i = 0; i < len*2; i++) {
        tarjetas.push(iconos[0])
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
     tarjetas.sort(() => Math.random() - 0.5)
     generartableroTodos(tarjetas,typetablero)
}

function generarTablero2(iconosfood,typetablero) {
    cargarIconosfood()
    len = iconosfood.length
    let tarjetas2 = []
    for (let i = 0; i < len*2; i++) {
        tarjetas2.push(iconosfood[0])
        if (i % 2 == 1) {
            iconosfood.splice(0, 1)
        }
    }
    tarjetas2.sort(() => Math.random() - 0.5)
    generartableroTodos(tarjetas2,typetablero)
}


function generartableroTodos(tarjetas,typetablero){

    
    for (let x = 0; x < tarjetas.length; x++) {

        if(document.getElementById('area-tarjeta'+x)){
            document.getElementById('area-tarjeta'+x).remove()
        }
        const div = document.createElement('div')
        div.setAttribute('class','area-tarjeta')
        div.setAttribute('id','area-tarjeta'+x)
        div.onclick = function(){seleccionarTarjeta(x)}

        const div2 = document.createElement('div')
        div2.setAttribute('class','tarjeta')
        div2.setAttribute('id','tarjeta'+x)

        const div3 = document.createElement('div')
        div3.setAttribute('class','cara trasera')
        div3.setAttribute('id','trasera'+x)

        const img = document.createElement('img')
        img.setAttribute('src',''+tarjetas[x])
        img.setAttribute('width','50%')

        const div4 = document.createElement('div')
        div4.setAttribute('class','cara superior')

        const question = document.createElement('i')
        question.setAttribute('class','fa-solid fa-seal-question')

        div3.appendChild(img)
        div4.appendChild(question)
        div2.appendChild(div3)
        div2.appendChild(div4)  
        div.appendChild(div2)

        if(typetablero == 'tablero1'){
            tablero.appendChild(div)
        }else{
            tablero2.appendChild(div)
        }
        
    }
}



function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "#202060"
            trasera2.style.background = "#202060"
        }
    }, 1000);
}


export {generarTablero,generarTablero2}