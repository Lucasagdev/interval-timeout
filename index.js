// setTimeout(() => {
//     alert('Olá mundo!')
// }, 3000);

// setTimeout(() => {
//     console.log('Console dentro do setTimeout')
// }, 3000);

// setInterval(() => {
//     console.log('Console dentro do setTimeout')
// }, 3000);

// console.log('Console depois do setTimeout')

const idDoIntervalo = setInterval(() => {
                console.log('Exewcuntando a cada 2 segundos')
                }, 3000);
console.log(idDoIntervalo)
clearInterval(idDoIntervalo)