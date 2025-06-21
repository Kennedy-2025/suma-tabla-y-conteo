const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el número inicial del rango: ', (inicio) => {
    rl.question('Ingrese el número final del rango: ', (fin) => {
        inicio = parseInt(inicio);
        fin = parseInt(fin);

        let pares = 0;
        let impares = 0;

        for (let i = inicio; i <= fin; i++) {
            if (i % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        }

        console.log(`En el rango de ${inicio} a ${fin}:`);
        console.log(`Cantidad de números pares: ${pares}`);
        console.log(`Cantidad de números impares: ${impares}`);

        rl.close();
    });
});