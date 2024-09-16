// Seleccionamos los elementos del DOM que vamos a manipular
const taskList = /* Seleccionamos la lista de tareas */
// Evento que agrega la tarea al hacer clic en el botón

// Función que maneja el agregado de una nueva tarea
function addTask() {
    // Obtenemos el valor del input y lo limpiamos de espacios en blanco
    if (/* Verificamos que el input no esté vacío */) {
        // Crear un nuevo elemento <li> para la tarea
        // Agregamos el elemento <li> a la lista de tareas
        // Limpiamos el input después de agregar la tarea
    } else {
        // Mostramos una alerta si el input está vacío
    }
}

// Evento para eliminar tareas cuando se hace clic en ellas
taskList.addEventListener('click', function(event) {
    // Verificamos si el elemento clicado es un <li>
    if (event.target.tagName === 'LI') {
        // Eliminamos el elemento <li> de la lista
        event.target.remove();
    }
});
