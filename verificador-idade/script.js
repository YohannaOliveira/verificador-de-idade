function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('Img')
    img.setAttribute ('id', 'foto')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','bebemenino.jpg')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src','jovemhomem.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src','homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade <= 0 && idade < 10){
                //Criança
                img.setAttribute('src','bebemenina.jpg')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src','jovemmulher.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src','mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}