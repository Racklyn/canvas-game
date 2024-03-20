let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

const largura = 700
const altura = 700

const chaoAltura = 150

// Valores do personagem:
const pLargura = 20
const pAltura = 50
const passo = 5
let y = altura - chaoAltura - pAltura
let x = 200

function desenhar() {
    // Pintando o céu
    ctx.fillStyle = "#3DF"
    ctx.fillRect(0, 0, largura, altura)

    // Pintando o chão
    ctx.fillStyle = "#1D6"
    ctx.fillRect(0, altura - chaoAltura, largura, altura)

    // Desenhando personagem
    ctx.fillStyle = "#F20"
    ctx.fillRect(x, y, pLargura, pAltura)
}





// EXECUÇÕES ######################################


desenhar()


document.addEventListener("keydown", (event) => {
    console.log(event.key)


    if(event.key == "ArrowRight"){
        console.log("Para a direita --->")
        x = x + passo
        console.log("O valor de X é: " + x)
        desenhar()
    }
 
    if(event.key == "ArrowLeft"){
        console.log("Para a esquerda <---")
        x = x - passo
        console.log("O valor de X é: " + x)
        desenhar()
    }       

})