function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'img/amanhecer.jpg'
        document.body.style.background = 'rgba(235, 235, 0, 0.699)'
    } else if(hora >= 12 && hora < 18){ 
        //BOA TARDE!
        img.src = 'img/entardecer.jpg'
        document.body.style.background = 'rgba(255, 166, 0, 0.89)'
    } else {
        //BOA NOITE!
        img.src = 'img/noite.jpg'
        document.body.style.background = 'grey'
    }
}