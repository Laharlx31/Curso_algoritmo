
function calc() {
    var valor01,valor02,resultado,operacao  

operacao = prompt ("digite a operação desejada ex + , - , * , / :")
valor01 = prompt ("digite o primeiro valor:")
valor02 = prompt ("digite o primeiro valor:")

if (operacao == "+" ){
    resultado = parseInt (valor01) + parseInt (valor02)
}
else if (operacao == "-") {
    resultado = parseInt(valor01) - parseInt(valor02)
}else if (operacao == "*") {
    resultado = parseInt(valor01) * parseInt(valor02)
}else if (operacao == "/") {
    resultado = parseInt(valor01) / parseInt(valor02)
}
alert (resultado)
document.getElementById("paragrafo").innerText = resultado
}