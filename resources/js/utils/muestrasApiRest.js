/* Funciones para hacer el crud de muestras incorporando sweet alert 2 */

import Swal from "sweetalert2";



export const addMuestra = async (muestra) => {
    const response = await fetch(`/api/api/addMuestra`, {
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

const updateMuestra = async (muestra,muestraId,getMuestras) => {
    const response = await fetch(`/api/api/updateMuestra?id=${muestraId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(muestra)
    });
    
    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        getMuestras()
        console.log("Usuario actualizado correctamente:", data);
    }
}

export const deleteMuestra = async (muestraId, getMuestras) => {
    const response = await fetch(`/api/api/deleteMuestra?id=${muestraId}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        getMuestras()
        console.log("Muestra eliminada correctamente:", data);
        Swal.fire("Muestra eliminada!", "La muestra se ha eliminado correctamente", "success")
    } 
}

export const handleUpdateMuestra = async (muestra, getMuestras) => {
    await Promise.all([getFormato(), getNaturaleza(), getCalidad()]);

    Swal.fire({
        title: 'Editar muestras',
        html: `
            <style>
                .swal2-input, .swal2-select, .swal2-textarea {
                    width: 80%; 
                    box-sizing: border-box; 
                    margin-bottom: 10px; 
                }
            </style>
            <div> 
                <input type="text" id="codigo" class="swal2-input" value="${muestra.codigo}" placeholder="Código">
                <input type="date" id="fecha" class="swal2-input" value="${muestra.fecha}">
                
                <select id="id_formato" class="swal2-input swal2-select">
                    <option value="">Seleccione un formato</option>
                </select>

                <select id="id_tipo_naturaleza" class="swal2-input swal2-select">
                    <option value="">Seleccione una naturaleza</option>
                </select>

                <input type="text" id="organo" class="swal2-input" value="${muestra.organo}" placeholder="Órgano">
                
                <select id="id_calidad" class="swal2-input swal2-select">
                    <option value="">Seleccione la calidad</option>
                </select>

                <textarea id="descripcion_calidad" class="swal2-textarea" placeholder="Descripción de calidad">${muestra.descripcion_calidad}</textarea>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Editar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const codigo = document.getElementById("codigo").value;
            const fecha = document.getElementById("fecha").value;
            const id_formato = document.getElementById("id_formato").value;
            const id_tipo_naturaleza = document.getElementById("id_tipo_naturaleza").value;
            const organo = document.getElementById("organo").value;
            const id_calidad = document.getElementById("id_calidad").value;
            const descripcion_calidad = document.getElementById("descripcion_calidad").value;

            if (!codigo || !fecha || !id_formato || !id_tipo_naturaleza || !organo || !id_calidad || !descripcion_calidad) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { codigo, fecha, id_formato, id_tipo_naturaleza, organo, id_calidad, descripcion_calidad };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            updateMuestra(result.value, muestra.id, getMuestras); 
            Swal.fire("Muestra actualizada!", "La muestra se ha actualizado correctamente", "success");
        }
    });
};



