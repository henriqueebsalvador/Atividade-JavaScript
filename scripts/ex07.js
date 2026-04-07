function ex07() {
    let codigo = prompt("Digite o código do sabor (a até i):");

    if (codigo === "a") {
        console.log("Sabor: Chocolate - Preço: R$ 1,50");
    } else if (codigo === "b") {
        console.log("Sabor: Morango - Preço: R$ 2,50");
    } else if (codigo === "c") {
        console.log("Sabor: Creme - Preço: R$ 2,50");
    } else if (codigo === "d") {
        console.log("Sabor: Manga - Preço: R$ 3,20");
    } else if (codigo === "e") {
        console.log("Sabor: Melancia - Preço: R$ 3,40");
    } else if (codigo === "f") {
        console.log("Sabor: Vanilla Ice - Preço: R$ 3,00");
    } else if (codigo === "g") {
        console.log("Sabor: Céu Azul - Preço: R$ 3,60");
    } else if (codigo === "h") {
        console.log("Sabor: Brownie - Preço: R$ 4,00");
    } else if (codigo === "i") {
        console.log("Sabor: Hawaiano - Preço: R$ 5,00");
    } else {
        console.log("Código inválido!");
    }
}
