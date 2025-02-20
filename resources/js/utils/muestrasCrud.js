import Swal from "sweetalert2";
let formato,estudio,naturaleza,calidad
const API_URL = import.meta.env.VITE_API_URL;
    
const getFormato = async () => {
    const response = await fetch(`${API_URL}/formato`, {
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
    }else{
        formato = data
    }
}  

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
    }else{
        estudio = data
    }
} 

const getNaturaleza = async () => {
    const response = await fetch(`${API_URL}/naturaleza`, {
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
    }else{
        naturaleza = data
    }
} 

const getCalidad = async () => {
    const response = await fetch(`${API_URL}/calidad`, {
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
    }else{
        calidad = data
    }
} 

const addMuestra = async (muestra, getMuestras) => {
    const response = await fetch(`${API_URL}/muestra`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(muestra)
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("Error en el servidor:", data);
    } else {
        getMuestras();
        Swal.fire("Muestra añadida!", "La muestra se ha creado correctamente", "success");
    }
};

export const handleAdd = async (getMuestras) => {
    await Promise.all([getFormato(), getNaturaleza(), getTipoEstudio(), getCalidad()]);

    const response = await fetch(`${API_URL}/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    });

    const userData = await response.json();

    if (!response.ok) {
        console.error("Error obteniendo usuario:", userData);
        return;
    }

    const id_user = userData.id;
    const id_sede = userData.id_sede;

    Swal.fire({
        title: 'Añadir muestra',
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-4 text-azulMedac font-sans">
                <div class="flex flex-col w-96">
                    <label for="codigo">Código de la muestra</label>
                    <input type="text" id="codigo" class="rounded-xl" placeholder="Código">
                </div>

                <div class="flex flex-col w-96">
                    <label for="fecha">Fecha de recolección</label>
                    <input type="date" id="fecha" class="rounded-xl">
                </div>

                <div class="flex flex-col w-96">
                    <label for="formato">Formato</label>
                    <select id="formato" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${formato.map(f => `<option value="${f.id}">${f.nombre}</option>`).join("")}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="naturaleza">Tipo de naturaleza</label>
                    <select id="naturaleza" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${naturaleza.map(n => `<option value="${n.id}">${n.nombre}</option>`).join("")}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="organo">Órgano</label>
                    <input type="text" id="organo" class="rounded-xl" placeholder="Órgano">
                </div>

                <div class="flex flex-col w-96">
                    <label for="estudio">Tipo de estudio</label>
                    <select id="estudio" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${estudio.map(e => `<option value="${e.id}">${e.nombre}</option>`).join("")}
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="calidad">Calidad de la muestra</label>
                    <select id="calidad" class="rounded-xl">
                        <option value="">Seleccione una opción</option>
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="descripcion">Descripción de la calidad</label>
                    <textarea id="descripcion" class="h-36 rounded-lg" placeholder="Descripción"></textarea>
                </div>

                <div class="flex flex-col w-96">
                    <label for="imagenes">Imágenes de la muestra</label>
                    <input type="file" id="imagenes" accept="image/*" multiple />
                </div>

            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Añadir",
        cancelButtonText: "Cancelar",
        didOpen: () => {
            const selectEstudio = document.getElementById('estudio')
            const selectCalidad = document.getElementById('calidad')
            
            selectEstudio.addEventListener('change', ()=>{
                const idEstudioSeleccionado = selectEstudio.value

                const calidadesFiltradas = calidad.filter(c => c.id_tipo_estudio == idEstudioSeleccionado).map(c => `<option value="${c.id}">${c.nombre}</option>`).join()

                selectCalidad.innerHTML = calidadesFiltradas || '<option value="">No hay calidades disponibles</option>';
            })
        },
        preConfirm: async () => {
            const codigo = document.getElementById("codigo").value;
            const fecha = document.getElementById("fecha").value;
            const id_formato = document.getElementById("formato").value;
            const id_tipo_naturaleza = document.getElementById("naturaleza").value;
            const organo = document.getElementById("organo").value;
            const id_calidad = document.getElementById("calidad").value;
            const descripcion_calidad = document.getElementById("descripcion").value;
            const imagenesInput = document.getElementById("imagenes").files;

            if (!codigo || !fecha || !id_formato || !id_tipo_naturaleza || !organo || !id_calidad || !descripcion_calidad || !imagenesInput) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            let rutas = [];

            for (let i = 0; i < imagenesInput.length; i++) {
                const archivo = imagenesInput[i];
                const formData = new FormData();
                formData.append("file", archivo);
                formData.append("upload_preset", "ml_default");

                const cloudinaryRes = await fetch("https://api.cloudinary.com/v1_1/dotw4uex6/image/upload", {
                    method: "POST",
                    body: formData,
                });

                const cloudinaryData = await cloudinaryRes.json();
                rutas.push(cloudinaryData.secure_url);
            }

            return { codigo, fecha, id_formato, id_tipo_naturaleza, organo, id_calidad, descripcion_calidad, rutas, id_user, id_sede }

        }
    }).then((result) => {
        if (result.isConfirmed) {
            addMuestra(result.value, getMuestras);
        }
    });
};



const deleteMuestra = async (idMuestra, getMuestras) => {
    const response = await fetch(`${API_URL}/muestra?id=${idMuestra}`, {
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
        getMuestras()
        console.log("Muestra eliminada correctamente:", data);
        Swal.fire("¡Muestra eliminada!", "La muestra se ha eliminada correctamente", "error")
    }
}

const updateMuestra = async (muestra, idMuestra, getMuestra) => {
    const response = await fetch(`${API_URL}/muestra?id=${idMuestra}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(muestra)
    })

    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data)
    }else{
        console.log("Muestra actualizada correctamente:", data)
        Swal.fire("¡Muestra actualizada!", "La muestra se ha actualizado correctamente", "success")
        getMuestra()
    }
}

export const actualizarMuestra = async (muestra, getMuestras) => {
    await Promise.all([getFormato(), getNaturaleza(), getTipoEstudio(), getCalidad()])

    Swal.fire({
        title: `Editar Muestra`,
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-6  text-azulMedac font-sans">           
                <div class="flex flex-col  w-96">
                    <label for="codigo">Código de la muestra</label>
                    <input type="text" id="codigo" class=" rounded-xl" placeholder="Codigo" value="${muestra.codigo}">
                </div>

                <div class="flex flex-col w-96">
                    <label for="fecha">Fecha de recolección</label>
                    <input type="date" id="fecha" class=" rounded-xl" value="${muestra.fecha}">
                </div>
                    
                <div class="flex flex-col w-96 ">
                    <label for="formato">Formato</label>
                    <select id="formato" class=" rounded-xl">
                        ${
                            formato.map(f => (
                                `<option value="${f.id}" ${f.id === muestra.id_formato ? 'selected' : ''}>
                                    ${f.nombre}
                                </option>`
                            ))                  
                        }
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="naturaleza">Tipo de naturaleza</label>
                    <select id="naturaleza" class=" rounded-xl">
                        ${
                            naturaleza.map(n => (
                                `<option value="${n.id}" ${n.id === muestra.id_tipo_naturaleza ? 'selected' : ''}>
                                    ${n.nombre}
                                </option>`
                            ))                  
                        }
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="organo">Órgano</label>
                    <input type="text" id="organo" class=" rounded-xl" placeholder="Órgano" value="${muestra.organo}">
                </div>

                <div class="flex flex-col w-96">
                    <label for="estudio">Tipo de estudio</label>
                    <select id="estudio" class=" rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${
                            estudio.map(e => (
                                `<option value="${e.id}">
                                    ${e.nombre}
                                </option>`
                            ))                  
                        }
                    </select>
                </div>

                
                <div class="flex flex-col w-96">
                    <label for="calidad">Calidad de la muestra</label>
                    <select id="calidad" class="rounded-xl">
                        ${
                            calidad.map(c => (
                                `<option value="${c.id}" ${c.id === muestra.id_calidad ? 'selected' : ''}>
                                    ${c.nombre}
                                </option>`
                            ))                  
                        }
                    </select>
                </div>
 
                <div class="flex flex-col w-96">
                    <label for="descripcion">Descripción de la calidad</label>
                    <textarea type="text" id="descripcion" class="h-36 rounded-lg" placeholder="Descripción">${muestra.descripcion_calidad}</textarea>
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
            const selectCalidad = document.getElementById('calidad')
            
            selectEstudio.addEventListener('change', ()=>{
                const idEstudioSeleccionado = selectEstudio.value

                const calidadesFiltradas = calidad.filter(c => c.id_tipo_estudio == idEstudioSeleccionado).map(c => `<option value="${c.id}">${c.nombre}</option>`).join()

                selectCalidad.innerHTML = calidadesFiltradas || '<option value="">No hay calidades disponibles</option>';
            })
        },
        preConfirm: () => {
            const codigo = document.getElementById("codigo").value;
            const fecha = document.getElementById("fecha").value;
            const id_formato = document.getElementById("formato").value;
            const id_tipo_naturaleza = document.getElementById("naturaleza").value;
            const organo = document.getElementById("organo").value;
            const id_calidad = document.getElementById("calidad").value;
            const descripcion_calidad = document.getElementById("descripcion").value;

            if (!codigo || !fecha || !id_formato || !id_tipo_naturaleza || !organo || !id_calidad || !descripcion_calidad) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { codigo, fecha, id_formato, id_tipo_naturaleza, organo, id_calidad, descripcion_calidad }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            updateMuestra(result.value, muestra.id, getMuestras);
        } else if (result.isDenied) {
            deleteMuestra(muestra.id, getMuestras);
        }
    });
};