import Swal from "sweetalert2";

let formato,estudio,naturaleza,calidad 

const getFormato = async () => {
    try{
        const response = await fetch(`/api/formato`)
        const data = await response.json()
        formato = data
    } catch(error){
        console.error('Error al obtener los datos:', error)
    }   
}  

const getTipoEstudio = async () => {
    try {
        const response = await fetch(`/api/tipoEstudio`)
        const data = await response.json()
        estudio = data
    } catch (error) {
        console.error('Error al obtener los datos:', error)
    }
} 

const getNaturaleza = async () => {
    try {
        const response = await fetch(`/api/naturaleza`)
        const data = await response.json()
        naturaleza = data
    } catch (error) {
        console.error('Error al obtener los datos:', error)
    }
} 

const getCalidad = async () => {
    try {
        const response = await fetch('/api/calidad')
        const data = await response.json()
        calidad = data
    } catch (error) {
        console.error('Error al obtener los datos:', error)
    }
} 







const addMuestra = async (muestra, getMuestras) => {
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
        getMuestras()
        console.log("Muestra añadida correctamente:", data);
        Swal.fire("Muestra añadida!", "La muestra se ha creado correctamente", "success")
    }
}

export const handleAdd = async (getMuestras) => {
    await Promise.all([getFormato(), getNaturaleza(), getTipoEstudio(), getCalidad()])

    Swal.fire({
        title:'Añadir muestra',
        html: `
            <div class="flex flex-col">
                <label for="codigo">Código de la muestra</label>
                <input type="text" id="codigo" class="swal2-input" placeholder="Codigo">
                
                <label for="fecha">Fecha de recolección</label>
                <input type="date" id="fecha" class="swal2-input">
                
                <label for="formato">Formato</label>
                <select id="formato" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                    ${
                        formato.map(f => (
                            `<option value="${f.id}">${f.nombre}</option>`
                        ))                  
                    }
                </select>

                <label for="naturaleza">Tipo de naturaleza</label>
                <select id="naturaleza" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                    ${
                        naturaleza.map(n => (
                            `<option value="${n.id}">${n.nombre}</option>`
                        ))                  
                    }
                </select>

                <label for="organo">Órgano</label>
                <input type="text" id="organo" class="swal2-input" placeholder="Órgano">

                <label for="estudio">Tipo de estudio</label>
                <select id="estudio" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                    ${
                        estudio.map(e => (
                            `<option value="${e.id}">${e.nombre}</option>`
                        ))                  
                    }
                </select>

                <label for="calidad">Calidad de la muestra</label>
                <select id="calidad" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                    ${
                        calidad.map(c => (
                            `<option value="${c.id}">${c.nombre}</option>`
                        ))                  
                    }
                </select>
                
                <label for="descripcion">Descripción de la calidad</label>
                <textarea type="text" id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>

                <label for="imagenes">Imagenes de la muestra</label>
                <input type="file" id="imagenes" class="swal2-file" accept="image/*" multiple />
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Añadir",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const codigo = document.getElementById("codigo").value;
            const fecha = document.getElementById("fecha").value;
            const id_formato = document.getElementById("formato").value;
            const id_tipo_naturaleza = document.getElementById("naturaleza").value;
            const organo = document.getElementById("organo").value;
            const estudio = document.getElementById("estudio").value;
            const id_calidad = document.getElementById("calidad").value;
            const descripcion_calidad = document.getElementById("descripcion").value;

            if (!codigo || !fecha || !id_formato || !id_tipo_naturaleza || !organo || !estudio || !id_calidad || !descripcion_calidad) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { codigo, fecha, id_formato, id_tipo_naturaleza, organo, estudio, id_calidad, descripcion_calidad }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            addMuestra(result.value,getMuestras); 
            console.log("Datos ingresados:", result.value)
        }
    })
}






const deleteMuestra = async (idMuestra, getMuestras) => {
    const response = await fetch(`/api/deleteMuestra?id=${idMuestra}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        getMuestras()
        console.log("Muestra eliminada correctamente:", data);
        Swal.fire("¡Muestra eliminada!", "La muestra se ha eliminada correctamente", "error")
    }
}

const updateMuestra = async (muestra, idMuestra, getMuestra) => {
    const response = await fetch(`/api/updateMuestra?id=${idMuestra}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(muestra)
    })

    const data = response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data)
    }else{
        getMuestra()
        console.log("Muestra actualizada correctamente:", data)
        Swal.fire("¡Muestra actualizada!", "La muestra se ha actualizado correctamente", "success")
    }
}

export const actualizarMuestra = async (muestra, getMuestras) => {
    await Promise.all([getFormato(), getNaturaleza(), getTipoEstudio(), getCalidad()])

    Swal.fire({
        title: `Editar Muestra`,
        html: `
            <div class="flex flex-col">
                <label for="codigo">Código de la muestra</label>
                <input type="text" id="codigo" class="swal2-input" placeholder="Codigo" value="${muestra.codigo}">
                
                <label for="fecha">Fecha de recolección</label>
                <input type="date" id="fecha" class="swal2-input" value="${muestra.fecha}">
                
                <label for="formato">Formato</label>
                <select id="formato" class="swal2-select" value="${muestra.formato}">
                    ${
                        formato.map(f => (
                            `<option value="${f.id}">${f.nombre}</option>`
                        ))                  
                    }
                </select>

                <label for="naturaleza">Tipo de naturaleza</label>
                <select id="naturaleza" class="swal2-select" value="${muestra.naturaleza}">
                    ${
                        naturaleza.map(n => (
                            `<option value="${n.id}">${n.nombre}</option>`
                        ))                  
                    }
                </select>

                <label for="organo">Órgano</label>
                <input type="text" id="organo" class="swal2-input" placeholder="Órgano" value="${muestra.organo}">

                <label for="estudio">Tipo de estudio</label>
                <select id="estudio" class="swal2-select" value="${muestra.estudio}">
                    ${
                        estudio.map(e => (
                            `<option value="${e.id}">${e.nombre}</option>`
                        ))                  
                    }
                </select>

                <label for="calidad">Calidad de la muestra</label>
                <select id="calidad" class="swal2-select" value="${muestra.calidad}">
                    ${
                        calidad.map(c => (
                            `<option value="${c.id}">${c.nombre}</option>`
                        ))                  
                    }
                </select>
                
                <label for="descripcion">Descripción de la calidad</label>
                <textarea type="text" id="descripcion" class="swal2-textarea" placeholder="Descripción">${muestra.descripcion_calidad}</textarea>

                <label for="imagenes">Imagenes de la muestra</label>
                <input type="file" id="imagenes" class="swal2-file" accept="image/*" multiple />
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        showDenyButton: true,
        denyButtonText: "Eliminar",
        preConfirm: () => {
            const codigo = document.getElementById("codigo").value;
            const fecha = document.getElementById("fecha").value;
            const id_formato = document.getElementById("formato").value;
            const id_tipo_naturaleza = document.getElementById("naturaleza").value;
            const organo = document.getElementById("organo").value;
            const estudio = document.getElementById("estudio").value;
            const id_calidad = document.getElementById("calidad").value;
            const descripcion_calidad = document.getElementById("descripcion").value;

            if (!codigo || !fecha || !id_formato || !id_tipo_naturaleza || !organo || !estudio || !id_calidad || !descripcion_calidad) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { codigo, fecha, id_formato, id_tipo_naturaleza, organo, estudio, id_calidad, descripcion_calidad }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            updateMuestra(result.value, muestra.id, getMuestras);
        } else if (result.isDenied) {
            deleteMuestra(muestra.id, getMuestras);
        }
    });
};