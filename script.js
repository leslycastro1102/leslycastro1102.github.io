const tarea = document.getElementById("tarea")
const fecha = document.getElementById("fecha")
const tareasP = document.getElementById("tareasP")

function guardarTarea(){
    let txtTarea = tarea.value 
    let txtFecha = fecha.value
    if(txtFecha == "" || txtTarea == "")
    {
        alert("Debe ingresar un valor")
    }
    const nuevaTarea = document.createElement("li")
    nuevaTarea.textContent = txtTarea +  " - " +txtFecha
    tareasP.appendChild(nuevaTarea)
    tarea.value = ""
    fecha.value = ""
}

