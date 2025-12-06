// Creamos una función llamada calcularPromedio
// Recibe un arreglo de notas y retorna el promedio
function calcularPromedio(notas) {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
}

// Exportamos la función
export { calcularPromedio };