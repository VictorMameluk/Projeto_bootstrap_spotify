let imagem = document.getElementById("troca-imagem")

    function trocaImagem() {

        if (imagem.style.opacity == 0) {
            imagem.style.opacity = 1
        }

        else {
            imagem.style.opacity = 0
        }
    }


    setInterval(function () {
        trocaImagem()

    }, 4000);



let imagem2 = document.getElementById("troca-imagem2")

    function trocaImagem2() {

        if (imagem2.style.opacity == 0) {
            imagem2.style.opacity = 1
        }

        else {
            imagem2.style.opacity = 0
        }
    }


    setInterval(function () {
        trocaImagem2()

    }, 5000);




