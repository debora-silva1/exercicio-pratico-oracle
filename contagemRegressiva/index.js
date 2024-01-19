
alert('Bem - vindo (a) ao programa de contagem regressiva!')

let numero = prompt('Digite um número')


const id = setInterval(() => {
    console.log(numero);

    numero--;

    if (numero == 0) {
        clearInterval(id);
    }
}, 1000)
// while (numero > 0) {
//     setTimeout(() => {
//         console.log(numero)
//     }, (10 - numero) * 1000);

//     numero--
// }

