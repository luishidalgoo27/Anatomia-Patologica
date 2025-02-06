/* Funciones para hacer el crud de muestras incorporando sweet alert 2 */

import Swal from "sweetalert2";

export const addMuestra = async (muestra) => {
    const response = await fetch(`/api/addMuestra`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(muestra)
    })

    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        console.log("Muestra añadida correctamente:", data);
        Swal.fire("Muestra añadida!", "La muestra se ha creado correctamente", "success")
    }
}

const updateMuestra = async () => {
    fetch(`/api/updateMuestra?id=`)
}

const deleteMuestra = async () => {
    fetch(`/api/deleteMuestra?id=`)
}
