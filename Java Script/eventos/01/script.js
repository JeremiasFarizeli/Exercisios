const container = document.querySelector('#container')
container.addEventListener('click', trocarCor)

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

const btnAdd = document.getElementById('btn_add')
btnAdd.addEventListener('click', () => {
    let div = document.createElement('div')
    div.className = 'quadrado'
    div.style.backgroundColor = 'rgb(100,100,100)'
    container.appendChild(div)
})

function trocarCor(event) {
    let rgbCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
    event.target.style.backgroundColor = rgbCor
    event.target.innerText = rgbCor  
}

