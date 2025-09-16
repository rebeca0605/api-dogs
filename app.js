'use strict'

const botaoBuscar = document.getElementById('botao-buscar')
const input = document.getElementById('inputRaca')
const galeria = document.getElementById('galeria')

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url)
    const imagens = await response.json()

    console.log(imagens.message)
    return imagens.message
}

async function exibirImagens(){
    const galeria = document.getElementById("galeria")
    const raca = document.getElementById('inputRaca').value.toLowerCase()

    galeria.innerHTML = ""

    const listaImg = await buscarImagens(raca)

    listaImg.forEach(url => {
        const img = document.createElement("img")
        img.src = url
        galeria.appendChild(img)
    })
}

botaoBuscar.addEventListener('click', exibirImagens)