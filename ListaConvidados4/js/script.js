function adicionarALista(nome,idade,sexo) {
    let nome = document.getElementById("inputConvidado").value
  
    if (nome != "") {
      let lista = document.getElementById("lista")
      let novaDiv = document.createElement("div")
      limparCampos()
    } else {
      alert("Preencha o nome do convidado!")
    }
  }
  
  function limparCampos() {
    document.getElementById("inputConvidado").value = ""
  }