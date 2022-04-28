function calc() {
    var valor01,valor02,resultado,operacao  

operacao = prompt ("digite a operação desejada ex + , - , * , / :")
valor01 = prompt ("digite o primeiro valor:")
valor02 = prompt ("digite o primeiro valor:")

switch (operacao) {
    case "+":
        resultado = parseInt(valor01) + parseInt (valor02)
                break;
                case "-":
                    resultado = parseInt(valor01) - parseInt (valor02)
                            break;
                            case "*":
                                resultado = parseInt(valor01) * parseInt (valor02)
                                        break;
                                        case "/":
                                            resultado = parseInt(valor01) / parseInt (valor02)
                                                    break;
}

alert (resultado)
document.getElementById("paragrafo").innerText = resultado
}