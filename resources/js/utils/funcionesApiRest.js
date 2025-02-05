/* Funciones para hacer el crud de muestras incorporando sweet alert 2 */

import Swal from "sweetalert2";

const addMuestra = async () => {
    const response = await fetch(`/api/addMuestra`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(muestra)
    })

    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        console.log("Usuario añadido correctamente:", data);
        getMuestras();
    }
}

const updateMuestra = async () => {
    fetch(`/api/updateMuestra?id=`)
}

const deleteMuestra = async () => {
    fetch(`/api/deleteMuestra?id=`)
}


/* Esto es el onclick que se hace en el formulario de la pagina muestras */
export const handleAdd = () => {
    
}

export const handleUpdate = () => {

}

export const handleDelete = () => {

}