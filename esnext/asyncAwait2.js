const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)){
            reject('Números repetidos')
        } else {
            resolve(aleatorio)            
            
        }
        
    })
}

async function gerarMegaSena(qtdNumeros) {
    const numeros = []
    for (_ of Array(qtdNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1,60,numeros))
    }
    return numeros
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
