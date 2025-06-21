let limit = parseInt(prompt("Ingrese un número límite:"));

if (isNaN(limit) || limit < 1) {
    console.log("Por favor, ingrese un número válido mayor que 0.");
} else {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(`La suma de los números pares hasta ${limit} es: ${sum}`);
}
