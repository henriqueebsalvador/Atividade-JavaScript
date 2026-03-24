function ex01() {
    let soma = 0;
    let numero;

    while (true) {
        numero = prompt("Insira um número (ou digite 'parar' para parar)");
        if (numero === "parar") {
            break;
        }
        soma += Number(numero);
    }
    console.log(soma);
}