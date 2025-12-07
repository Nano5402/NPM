// ejercicio7.js

// Función para registrar productos sin duplicados
// Usamos parámetros rest (...productos) y un Set
function registrarProductos(...productos) {
  // Creamos un Set para eliminar duplicados automáticamente
  const productosUnicos = new Set(productos);

  // Convertimos el Set nuevamente a un arreglo
  return Array.from(productosUnicos);
}

// Exportamos la función
export { registrarProductos };