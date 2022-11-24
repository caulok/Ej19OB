// - Replica el ejercicio completo del vídeo
// - Añade dos párrafos más en cada una de las secciones
// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const seccion = document.querySelectorAll('.seccion');
const parrafo = document.querySelectorAll('.parrafo');
const basura = document.getElementById('imagen');

parrafo.forEach((parrafos) => {
    parrafos.addEventListener('dragstart', event =>{
        event.dataTransfer.setData('id', parrafos.id)
    })
})

seccion.forEach((secciones) => {
    secciones.addEventListener('dragover', event =>{
        event.preventDefault()
    })

    secciones.addEventListener('drop', event =>{
        const id_parrafos = event.dataTransfer.getData('id')
        const parrafo = document.getElementById(id_parrafos)
        secciones.appendChild(parrafo)
    })
})

const basuras = () =>{
    basuras.addEventListener('dragover', event =>{
        event.preventDefault()
    })

    basuras.addEventListener('drop', event =>{
        const id_parrafos = event.dataTransfer.getData('id')
        const parrafo = document.getElementById(id_parrafos)
        seccion.remove(parrafo)
    })
}
