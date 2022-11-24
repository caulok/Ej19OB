const seccion = document.querySelectorAll('.seccion');
const parrafo = document.querySelectorAll('.parrafo');
const basura = document.getElementById('imagen');

parrafo.forEach((parrafos) => {
    parrafos.addEventListener('dragstart', event => {
        parrafos.classList.add('.parrafo.drag', '.parrafo:hover');
        event.dataTransfer.setData('id', parrafos.id);
    })
    parrafos.addEventListener('dragend', () => {
        parrafos.classList.remove('.parrafo.drag', '.parrafo:hover');
    })
})

seccion.forEach((secciones) => {
    secciones.addEventListener('dragover', event => {
        event.preventDefault();
    })

    secciones.addEventListener('drop', event => {
        const id_parrafos = event.dataTransfer.getData('id');
        const parrafo = document.getElementById(id_parrafos);
        secciones.appendChild(parrafo);
    })
})

const basuras = () => {
    basura.addEventListener('dragover', event => {
        event.preventDefault();
    })

    basura.addEventListener('drop', event => {
        const id_parrafos = event.dataTransfer.getData('id');
        const parrafo = document.getElementById(id_parrafos);
        confirm('¿Estás seguro de eliminar este párrafo?') && parrafo.remove();
    })
}
basuras();
