let notas = []

function adicionar() {
    let notaDigitada = document.getElementById("nota").valueAsNumber
    notas.push(notaDigitada)
}

function somar() {
    let resultado = 0

    for(let i = 0; i < notas.length; i++) {
        resultado += notas[i]
    }

    alert(resultado)
}