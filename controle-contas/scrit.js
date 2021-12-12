
let lancamentos = []
let totalReceita = 0
let totalDespesa = 0


function adicionarReceita() {
  let valor = document.getElementById("receita").valueAsNumber
  totalReceita += valor
  lancamentos.push(valor)
  atulizarResumos()
}

function adicionarDespesa() {
  let valor = document.getElementById("despesa").valueAsNumber
  valor = valor * -1//Faz com que o valor fique negativo
  totalDespesa += valor
  lancamentos.push(valor)
  atulizarResumos()
}

function atulizarResumos() {
  document.getElementById("totalReceita").innerHTML = totalReceita.toFixed(2)
  document.getElementById("totalDespesa").innerHTML = totalDespesa.toFixed(2)
  document.getElementById("balanco").innerHTML = (totalReceita + totalDespesa).toFixed(2)

  if (totalReceita + totalDespesa >= 0) {
    document.getElementById("balanco").classList.add("texto-verde")
    document.getElementById("balanco").classList.remove("texto-vermelho")
  } else {
    document.getElementById("balanco").classList.add("texto-vermelho")
    document.getElementById("balanco").classList.remove("texto-verde")
  }
}