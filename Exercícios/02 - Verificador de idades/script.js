function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `<strong>Agora são ${hora}H e ${minutos}Min</strong>`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = './Imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = './Imagens/tarde.png'
        document.body.style.background = '#b9846f'
    }

    else {
        //Boa noite
        img.src = './Imagens/noite.png'
        document.body.style.background = '#515154'
    }
}