function esperarPor(tempo = 2000){
    return new Promise(function (resolve) {
        setTimeout(() => resolve(),tempo)
    })
}

/* esperarPor(2000)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...')) */


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10),5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function excutar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}


async function excutarDeVerdade() {
    const valor = await excutar()
    console.log(valor)
}
excutarDeVerdade()