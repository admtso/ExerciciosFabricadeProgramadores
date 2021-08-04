let listaConvidados = ""

function adicionarALista() {
  let nome = document.getElementById("inputConvidado").value

  if (nome != "") {
    listaConvidados = listaConvidados + "<li>" + nome + "</li>"

    document.getElementById("lista").innerHTML = listaConvidados
   
  } else {
    alert("Preencha o nome do convidado!")
  }
  

}