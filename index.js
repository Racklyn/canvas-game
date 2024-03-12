let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

const largura = 700
const altura = 700

const chaoAltura = 150

// Valores do personagem:
const pLargura = 20
const pAltura = 50
let y = altura - chaoAltura - pAltura
let x = 200



// Pintando o céu
ctx.fillStyle = "#3DF"
ctx.fillRect(0, 0, largura, altura)

// Pintando o chão
ctx.fillStyle = "#1D6"
ctx.fillRect(0, altura - chaoAltura, largura, altura)

// Desenhando personagem
ctx.fillStyle = "#F20"
ctx.fillRect(x, y, pLargura, pAltura)




// document.addEventListener("keydown", e => {
    
//     if (e.key == "ArrowRight") {
//         x += 10
//     }else if (e.key == "ArrowLeft") {
//         x -= 10
//     }
//     console.log(x)

//     // Desenhando personagem
//     ctx.fillStyle = "#F20"
//     ctx.fillRect(x, y, pLargura, pAltura)
// })