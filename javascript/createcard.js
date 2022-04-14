export function createcard() {
    const priviewcard = document.createElement('div')
    priviewcard.className = 'priview-card'

    const priviewcardtop = document.createElement('div')
    priviewcardtop.className = 'priview-card-top'
    priviewcard.appendChild(priviewcardtop)

    const imagen1 = document.createElement('img')
    imagen1.src = "./assets/image-equilibrium.jpg"
    imagen1.alt = "priview image"
    priviewcardtop.appendChild(imagen1)

    /*query sirve para seleccionar una parte del html */
    const app = document.querySelector('#app')
    app.appendChild(priviewcard)

    const priviewcardtopeye = document.createElement('div')
    priviewcardtopeye.className = 'priview-card-top-eye'
    priviewcardtop.appendChild(priviewcardtopeye)

    const imagen2 = document.createElement('img')
    imagen2.src = "./assets/icon-view.svg"
    imagen2.alt = "priview image"
    priviewcardtopeye.appendChild(imagen2)

    const priviewcardbottom = document.createElement('div')
    priviewcardbottom.className = 'priview-card-bottom'
    priviewcard.appendChild(priviewcardbottom)

    const priviewcardbottomdatospriview = document.createElement('div')
    priviewcardbottomdatospriview.className = 'priview-card-bottom__datos-priview'
    priviewcardbottom.appendChild(priviewcardbottomdatospriview)

    const divspan = document.createElement('div')
    priviewcardbottomdatospriview.appendChild(divspan)

    const span1 = document.createElement('span')
    span1.textContent = 'Equilibrium #3429'
    divspan.appendChild(span1)

    const p1 = document.createElement('p')
    p1.textContent = 'Our Equilibrium collection promotes balance and calm.'
    divspan.appendChild(p1)

    const priviewcardbottomdatos = document.createElement('div')
    priviewcardbottomdatos.className = 'priview-card-bottom__datos'
    priviewcardbottom.appendChild(priviewcardbottomdatos)

    const letrascolor1 = document.createElement('div')
    letrascolor1.className = 'letras-color1'
    priviewcardbottomdatos.appendChild(letrascolor1)

    const imagen3 = document.createElement('img')
    imagen3.src = "./assets/icon-ethereum.svg"
    imagen3.alt = "priview image"
    letrascolor1.appendChild(imagen3)

    const span2 = document.createElement('span')
    span2.textContent = '0.041 ETH'
    letrascolor1.appendChild(span2)

    const letrascolor2 = document.createElement('div')
    letrascolor2.className = 'letras-color2'
    priviewcardbottomdatos.appendChild(letrascolor2)

    const imagen4 = document.createElement('img')
    imagen4.src = "./assets/icon-clock.svg"
    imagen4.alt = "priview image"
    letrascolor2.appendChild(imagen4)

    const span3 = document.createElement('span')
    span3.textContent = '3 days left'
    letrascolor2.appendChild(span3)

    const priviewcardbottominformacion = document.createElement('div')
    priviewcardbottominformacion.className = 'priview-card-bottom__informacion'
    priviewcardbottom.appendChild(priviewcardbottominformacion)

    const imagen5 = document.createElement('img')
    imagen5.src = "./assets/image-avatar.png"
    imagen5.alt = "priview image"
    priviewcardbottominformacion.appendChild(imagen5)

    const span4 = document.createElement('span')
    span4.textContent = 'Creation of'
    priviewcardbottominformacion.appendChild(span4)

    const span5 = document.createElement('span')
    span5.textContent = 'Jules Wyvern'
    priviewcardbottominformacion.appendChild(span5)
}