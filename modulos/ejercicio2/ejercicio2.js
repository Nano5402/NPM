// ejercicio2.js

// Función para calcular el inventario final
function calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida) {
  try {
    // Validamos que los valores no sean negativos
    if (cantidadInicial < 0 || cantidadVendida < 0 || cantidadRecibida < 0) {
      throw new Error("Error: No se permiten valores negativos.");
    }

    // Calculamos el inventario final
    const inventarioFinal = cantidadInicial - cantidadVendida + cantidadRecibida;

    // Verificamos si el inventario es crítico
    if (inventarioFinal < 5) {
      return `Inventario final: ${inventarioFinal} unidades. Inventario crítico.`;
    } else {
      return `Inventario final: ${inventarioFinal} unidades. Inventario estable.`;
    }
  } catch (error) {
    // Capturamos el error y lo retornamos
    return error.message;
  }
}

export { calcularInventario };