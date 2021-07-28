let listaConvidados = ""

function adicionarALista() {
  let nome = document.getElementById("inputConvidado").value

  if (nome != "") {
    // listaConvidados = listaConvidados + "<li>" + nome + "</li>"

    listaConvidados = listaConvidados + `<li> ${nome} </li>`

    document.getElementById("lista").innerHTML = listaConvidados
    document.getElementById("inputConvidado").value = ""
  } else {
    alert("Preencha o nome do convidado!")
  }
}