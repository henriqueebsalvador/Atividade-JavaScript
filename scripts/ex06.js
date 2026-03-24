function ex06() {

    let letra = prompt("Digite uma letra:");

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log("Vogal");
    } else {
        console.log("Consoante");
    }
}