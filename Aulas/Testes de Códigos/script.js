function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = 22//data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<strong> Agora são ${hora}h${minuto}min</strong>`
if (hora >= 0 && hora < 12) {
    img.src = './Imagens/manha.png'
    document.body.style.backgroundColor = '#e2cd9f'
}
else if(hora >= 12 && hora <= 18) {
    img.src = './Imagens/tarde.png'
    document.body.style.backgroundColor = '#b9846f'
}
else {
    img.src = './Imagens/noite.png'
    document.body.style.backgroundColor = '#515154'
}







}