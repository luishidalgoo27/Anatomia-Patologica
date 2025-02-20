import Swal from "sweetalert2";
let estudios, interpretaciones
const API_URL = import.meta.env.VITE_API_URL;
    
const getTipoEstudio = async () => {
    const response = await fetch(`${API_URL}/tipoEstudio`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    })
    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
        window.location.href = '/login'
    }else{
        estudios = data
    }
} 

const getInterpretacion = async () => {
    const response = await fetch(`${API_URL}/mostrarinterpretaciones`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    })
    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
        window.location.href = '/login'
    }else{
        interpretaciones = data
    }
} 

const addInterpretacion = async (interpretacion, getInterpretacionesMuestra) => {
    const response = await fetch(`${API_URL}/interpretacion`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(interpretacion)
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Error en el servidor:", data);
        window.location.href = '/login';
    } else {
        getInterpretacionesMuestra();
        Swal.fire("Interpretación añadida!", "La interpretación se ha creado correctamente", "success");
    }
};


export const handleAdd = async (id,getInterpretacionesMuestra) => {
    await Promise.all([getTipoEstudio(), getInterpretacion()]);

    Swal.fire({
        title: 'Añadir interpretación',
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-4 text-azulMedac font-sans">
                <div class="flex flex-col w-96">
                    <label for="estudio">Tipo de estudio</label>
                    <select id="estudio" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${estudios.map(e => `<option value="${e.id}">${e.nombre}</option>`)}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="interpretacion">Interpretación de la muestra</label>
                    <select id="interpretacion" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="descripcion">Descripción de la interpretación</label>
                    <textarea id="descripcion" class="h-36 rounded-lg" placeholder="Descripción"></textarea>
                </div>

            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Añadir",
        cancelButtonText: "Cancelar",
        didOpen: () => {
            const selectEstudio = document.getElementById('estudio')
            const selectInterpretacion = document.getElementById('interpretacion')
            
            selectEstudio.addEventListener('change', ()=>{
                const idEstudioSeleccionado = selectEstudio.value

                const interpretacionesFiltradas = interpretaciones.filter(i => i.id_tipo_estudios == idEstudioSeleccionado).map(i => `<option value="${i.id}">${i.texto}</option>`).join()

                selectInterpretacion.innerHTML = interpretacionesFiltradas || '<option value="">No hay interpretaciones disponibles</option>';
            })
        },
        preConfirm: () => {
            const id_muestra = id
            const id_interpretacion = document.getElementById("interpretacion").value;
            const descripcion = document.getElementById("descripcion").value;

            if (!id_interpretacion || !descripcion) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { id_muestra, id_interpretacion, descripcion };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            addInterpretacion(result.value, getInterpretacionesMuestra);
        }
    });
};

const deleteInterpretacion = async (idInterpretacion, getInterpretacionesMuestra) => {
    const response = await fetch(`${API_URL}/interpretacion?id=${idInterpretacion}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        }
    })

    const data = response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        getInterpretacionesMuestra()
        console.log("Interpretación eliminada correctamente:", data);
        Swal.fire("Interpretación eliminada!", "La interpretación se ha eliminada correctamente", "error")
    }
}

const updateInterpretacion = async (interpretacion, idInterpretacion, getInterpretacionesMuestra) => {
    const response = await fetch(`${API_URL}/interpretacion?id=${idInterpretacion}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(interpretacion)
    })

    const data = response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data)
    }else{
        getInterpretacionesMuestra()
        console.log("Interpretación actualizada correctamente:", data)
        Swal.fire("Interpretación actualizada!", "La interpretación se ha actualizado correctamente", "success")
    }
}

export const actualizarInterpretacion = async (interpretacion, getInterpretacionesMuestra) => {
    await Promise.all([getTipoEstudio(), getInterpretacion()]);

    Swal.fire({
        title: `Editar Interpretación`,
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-4 text-azulMedac font-sans">
                <div class="flex flex-col w-96">
                    <label for="estudio">Tipo de estudio</label>
                    <select id="estudio" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${estudios.map(e => `<option value="${e.id}">${e.nombre}</option>`)}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="interpretacion">Interpretación de la muestra</label>
                    <select id="interpretacion" class="rounded-xl">
                        ${interpretaciones.map(i => 
                            `<option value="${i.id}" ${i.id === interpretacion.id_interpretacion ? 'selected' : ''}>
                                ${i.texto}
                            </option>`)}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="descripcion">Descripción de la interpretación</label>
                    <textarea id="descripcion" class="h-36 rounded-lg" placeholder="Descripción">${interpretacion.descripcion}</textarea>
                </div>

            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        showDenyButton: true,
        denyButtonText: "Eliminar",
        didOpen: () => {
            const selectEstudio = document.getElementById('estudio')
            const selectInterpretacion = document.getElementById('interpretacion')
            
            selectEstudio.addEventListener('change', ()=>{
                const idEstudioSeleccionado = selectEstudio.value

                const interpretacionesFiltradas = interpretaciones.filter(i => i.id_tipo_estudios == idEstudioSeleccionado).map(i => `<option value="${i.id}">${i.texto}</option>`).join()

                selectInterpretacion.innerHTML = interpretacionesFiltradas || '<option value="">No hay interpretaciones disponibles</option>';
            })
        },
        preConfirm: () => {
            const id_interpretacion = document.getElementById("interpretacion").value;
            const descripcion = document.getElementById("descripcion").value;

            if (!id_interpretacion || !descripcion) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { id_interpretacion, descripcion };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            updateInterpretacion(result.value, interpretacion.id, getInterpretacionesMuestra);
        } else if (result.isDenied) {
            deleteInterpretacion(interpretacion.id, getInterpretacionesMuestra);
        }
    });
};