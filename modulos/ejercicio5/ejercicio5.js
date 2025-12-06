// ejercicio5.js

// Función para validar un usuario
// Recibe un objeto usuario con { nombre, estado, rol }
// Evalúa si está activo y asigna permisos según el rol
function validarUsuario(usuario) {
  // Verificamos si el usuario está activo
  if (usuario.estado.toLowerCase() !== "activo") {
    return {
      acceso: `Acceso denegado: El usuario ${usuario.nombre} está inactivo.`,
      permisos: "Sin permisos"
    };
  }

  // Si está activo, evaluamos el rol
  let permisos;
  if (usuario.rol.toLowerCase() === "admin") {
    permisos = "Permisos completos: crear, editar, eliminar, leer.";
  } else if (usuario.rol.toLowerCase() === "editor") {
    permisos = "Permisos de edición: editar y leer.";
  } else if (usuario.rol.toLowerCase() === "lector") {
    permisos = "Permisos de lectura: solo leer.";
  } else {
    permisos = "Rol desconocido: sin permisos asignados.";
  }

  // Retornamos el resultado
  return {
    acceso: `Acceso permitido: Bienvenido ${usuario.nombre}.`,
    permisos
  };
}

// Exportamos la función
export { validarUsuario };
