function ex11() {
    let salarioInformado = Number(prompt("Informe o salário do funcionário:"));
    let taxaDesconto;
    let percentual;

    if (salarioInformado <= 1000.00) {
        taxaDesconto = 0.08;
        percentual = "8%";
    } else if (salarioInformado <= 1500.00) {
        taxaDesconto = 0.085;
        percentual = "8,5%";
    } else {
        taxaDesconto = 0.09;
        percentual = "9%";
    }

    let valorDesconto = salarioInformado * taxaDesconto;
    let salarioLiquido = salarioInformado - valorDesconto;

    console.log("Salário informado: R$ " + salarioInformado.toFixed(2));
    console.log("Taxa de desconto aplicada: " + percentual);
    console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
    console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
}
