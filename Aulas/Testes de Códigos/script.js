function calcular() {
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    msg.innerHTML = `<strong>Agora são ${hora}h:${minutos}Min.</strong>`

    if (hora >= 6 && hora < 12) {
        img.src = './Imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <= 18) {
        img.src = './Imagens/tarde.png'
        document.body.style.background = '#b9846f'
    }

    else {
        img.src = './Imagens/noite.png'
        document.body.style.background = '#515154'
    }
}
