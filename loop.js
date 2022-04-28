function calc(){
    var sair, valor01, valor02
do{
    valor01 = prompt ("digite o primeiro valor")
    valor02 = prompt ("digite o segundo valor")
    document.getElementById("paragrafo").innerText = "o resultado é : " + (parseInt(valor01) + parseInt(valor02))
    sair = prompt ("deseja sair?")

}while (sair == "N")
}