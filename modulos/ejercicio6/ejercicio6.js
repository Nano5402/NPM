// Función para calcular el salario base
function calcularSalarioBase(valorHora, horasTrabajadas) {
  return valorHora * horasTrabajadas;
}

// Función para calcular las deducciones
function calcularDeducciones(salarioBase) {
  const porcentajeDeduccion = 0.10; // 10% de deducciones
  return salarioBase * porcentajeDeduccion;
}

// Función para calcular el salario neto
function calcularNeto(salarioBase, deducciones) {
  return salarioBase - deducciones;
}

// Exportamos todas las funciones
export { calcularSalarioBase, calcularDeducciones, calcularNeto };
