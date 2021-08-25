function calcularBTUS() {
    let totalMetros = document.getElementById("totalArea").value
    let totalPessoas = document.getElementById("totalPessoas").value
    let totalEletro = document.getElementById("totalEletro").value

    if (totalMetros == "" || totalPessoas == "" || totalEletro == "") {
        alert("Preencha todos os campos!")
    } else {
        let metrosConvertidos = parseFloat(totalMetros)
        let pessoasConvertidos = parseInt(totalPessoas)
        let eletroConvertidos = parseInt(totalEletro)

        totalBTUS =
            metrosConvertidos * 600 +
            eletroConvertidos * 600 +
            (pessoasConvertidos - 1) * 600
        class CalculadoraBTUS {
            constructor() { }

            lerDadosDeEntrada() {
                this.totalMetros = document.getElementById("totalArea").value
                this.totalPessoas = document.getElementById("totalPessoas").value
                this.totalEletro = document.getElementById("totalEletro").value
            }

            validarEConverter() {
                if (
                    this.totalMetros == "" ||
                    this.totalPessoas == "" ||
                    this.totalEletro == ""
                ) {
                    alert("Preecha todos os campos!")
                    return false
                }

                this.totalMetros = parseFloat(this.totalMetros)
                this.totalPessoas = parseInt(this.totalPessoas)
                this.totalEletro = parseInt(this.totalEletro)

                return true
            }

            calcularBTUS() {
                this.limparDadosSaida()
                this.lerDadosDeEntrada()
                let ehValido = this.validarEConverter()

                if (ehValido == true) {
                    let totalBTUS =
                        this.totalMetros * 600 +
                        this.totalEletro * 600 +
                        (this.totalPessoas - 1) * 600

                    this.exibirResultado(totalBTUS)
                    this.limparDadosEntrada()
                }
            }

            limparDadosEntrada() {
                document.getElementById("totalArea").value = ""
                document.getElementById("totalPessoas").value = ""
                document.getElementById("totalEletro").value = ""
            }

            limparDadosSaida() {
                document.getElementById("total").innerText = ""
            }

            exibirResultado(resultado) {
                document.getElementById("total").innerText = (`É necessário um total de ${totalBTUS} BTUS neste cômodo!`).innerText = `É necessário um total de ${resultado} BTUS neste cômodo!`
            }
        }

        let calculadora = new CalculadoraBTUS()
    }
}