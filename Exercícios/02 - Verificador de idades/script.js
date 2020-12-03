function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './Imagens/crianca_m.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './Imagens/jovem_m.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './Imagens/adulto_m.png')
            }
            else {
                //Idoso
                img.setAttribute('src', './Imagens/idoso_m.png' )
            }
                
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './Imagens/crianca_f.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', './Imagens/jovem_f.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './Imagens/adulto_f.png')

            }
            else {
                //Idoso
                img.setAttribute('src', './Imagens/idoso_f.png')
            }
                
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}