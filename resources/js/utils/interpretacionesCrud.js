import Swal from "sweetalert2";
let estudio, interpretacion
    
const getTipoEstudio = async () => {
    const response = await fetch(`/api/tipoEstudio`, {
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
        estudio = data
    }
} 

const getInterpretacion = async () => {
    const response = await fetch(`/api/mostrarinterpretaciones`, {
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
        interpretacion = data
    }
} 

const addInterpretacion = async (interpretacion, getInterpretacionesMuestra) => {
    const response = await fetch(`/api/interpretacion`, {
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
                        ${estudio.map(e => `<option value="${e.id}">${e.nombre}</option>`)}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="interpretacion">Interpretación de la muestra</label>
                    <select id="interpretacion" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${interpretacion.map(i => `<option value="${i.id}">${i.texto}</option>`)}
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

const deleteInterpretacion = async (idMuestra, getMuestras) => {
    const response = await fetch(`/api/deleteMuestra?id=${idMuestra}`, {
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
        window.location.href = '/login'
    }else{
        getMuestras()
        console.log("Muestra eliminada correctamente:", data);
        Swal.fire("¡Muestra eliminada!", "La muestra se ha eliminada correctamente", "error")
    }
}

const updateInterpretacion = async (muestra, idMuestra, getMuestra) => {
    const response = await fetch(`/api/updateMuestra?id=${idMuestra}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(muestra)
    })

    const data = response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data)
        window.location.href = '/login'
    }else{
        getMuestra()
        console.log("Muestra actualizada correctamente:", data)
        Swal.fire("¡Muestra actualizada!", "La muestra se ha actualizado correctamente", "success")
    }
}

export const actualizarInterpretacion = async (id, interpretacion, getInterpretacionesMuestra) => {
    await Promise.all([getTipoEstudio(), getInterpretacion()]);

    Swal.fire({
        title: `Editar Interpretacion`,
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-4 text-azulMedac font-sans">
                <div class="flex flex-col w-96">
                    <label for="estudio">Tipo de estudio</label>
                    <select id="estudio" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${estudio.map(e => `<option value="${e.id}">${e.nombre}</option>`)}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="interpretacion">Interpretación de la muestra</label>
                    <select id="interpretacion" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${interpretacion.map(i => `<option value="${i.id}">${i.texto}</option>`)}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="descripcion">Descripción de la interpretación</label>
                    <textarea id="descripcion" class="h-36 rounded-lg" placeholder="Descripción"></textarea>
                </div>

            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        showDenyButton: true,
        denyButtonText: "Eliminar",
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
            updateMuestra(result.value, muestra.id, getMuestras);
        } else if (result.isDenied) {
            deleteMuestra(muestra.id, getMuestras);
        }
    });
};