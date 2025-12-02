// Creamos una función declarada llamada calcularPromedio
// Esta función recibe un arreglo de notas
// Usamos un ciclo for para recorrer el arreglo y acumular la suma de las notas
// Luego calculamos el promedio y determinamos el rendimiento con condicionales
function calcularPromedio(notas) {
    let suma = 0;

    // Recorremos todas las notas y sumamos sus valores
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calculamos el promedio dividiendo la suma entre la cantidad de notas
    let promedio = suma / notas.length;
    let rendimiento;

    // Determinamos el rendimiento según rangos
    if (promedio >= 4.0) {
        rendimiento = "Su promedio es: Alto! :D";
    } else if (promedio >= 3.0) {
        rendimiento = "Su promedio es: Básico :/";
    } else {
        rendimiento = "Su promedio es: Bajo :((";
    }

    // Retornamos un objeto con el promedio y el rendimiento
    return {
        promedio,
        rendimiento
    };
}

// Exportamos la función para usarla en otros archivos
export { calcularPromedio };
