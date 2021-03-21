function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img2/homemcrianca.jpg')
            } else if (idade >= 10 && idade < 25) {
                //jovem
                img.setAttribute('src', 'img2/homemjovem.jpg')
            } else if (idade >=25 && idade < 60) {
                //adulto
                img.setAttribute('src', 'img2/homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img2/homemidoso.jpg')
            }                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img2/mulhercrianca.jpg')
            } else if (idade >= 10 && idade < 25) {
                //jovem
                img.setAttribute('src', 'img2/mulherjovem.jpg')
            } else if (idade >=25 && idade < 60) {
                //adulto
                img.setAttribute('src', 'img2/mulheradulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'img2/mulheridosa.jpg')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
    }

}