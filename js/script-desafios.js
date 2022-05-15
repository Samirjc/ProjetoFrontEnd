class Figura {
    constructor(href, coords) {
        this.href = href
        this.coords = coords
    }
}

function acertou() {
    alert("Parabéns! Você encontrou")
}

function errou() {
    alert("O animal não está aí :(")
}

function proximo() {

    if(ind < listaFiguras.length-1) {
        ind++
        mostrarImagem()
    }else{
        alert('Você acabou com todos os desafios do site')
    }
}

function voltar() {
    if(ind > 0) {
        ind--
        mostrarImagem()
    }
}

function mostrarImagem() {
    desafio_img.setAttribute('src', listaFiguras[ind].href)
    desafio_area.setAttribute('coords', listaFiguras[ind].coords)
}

var listaFiguras = []
listaFiguras.push(new Figura('img/desafio-1.jpeg', '170, 157, 190, 400'))
listaFiguras.push(new Figura('img/desafio-2.jpg', '210, 267, 226, 277'))
listaFiguras.push(new Figura('img/desafio-3.jpg', '108, 104, 125, 135'))
listaFiguras.push(new Figura('img/desafio-4.jpg', '318, 100, 335, 105'))
listaFiguras.push(new Figura('img/desafio-5.jpg', '205, 105, 215, 120'))

var ind = 0
var desafio_img = document.getElementById('desafio-img')
var desafio_area = document.getElementById('desafio-area')

mostrarImagem()