function agregarTarea(){
    //Obtener el valor del campo
    let nuevaTarea = document.getElementById("nueva tarea").value;

    //Validamos que el valor no esté vacio
    if(nuevaTarea === ""){
        alert("Error! Ingrese una tarea");
        return;
    }

    //Crear elemento en la lista
    let tarea = document.createElement("li");
    tarea.textContent = nuevaTarea + " ";
    //Crear boton eleminar
    let eliminarTarea = document.createElement("button");
    eliminarTarea.textContent = "Eliminar";

    eliminarTarea.onclick = function(){tarea.remove()}

    //Agregar  boton eliminar a la tarea
    tarea.appendChild(eliminarTarea);

    //Agregar el elemento a la lista
    document.getElementById("lista de tareas").appendChild(tarea);

    //limpiar el contenedor
    document.getElementById("nueva tarea").value = "";
}