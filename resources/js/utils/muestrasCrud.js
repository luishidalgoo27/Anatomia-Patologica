import Swal from "sweetalert2";

let formato,estudio,naturaleza,calidad 

const getFormato = async () => {
    const response = await fetch(`/api/formato`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    })
    const data = await response.json()
    if(!response.ok){
        window.location.href = '/login'
    }else{
        formato = data
    }
}  

const getTipoEstudio = async () => {
    const response = await fetch(`/api/formato`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    })
    const data = await response.json()
    if(!response.ok){
        window.location.href = '/login'
    }else{
        estudio = data
    }
} 

const getNaturaleza = async () => {
    const response = await fetch(`/api/formato`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    })
    const data = await response.json()
    if(!response.ok){
        window.location.href = '/login'
    }else{
        naturaleza = data
    }
} 

const getCalidad = async () => {
    const response = await fetch(`/api/formato`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    })
    const data = await response.json()
    if(!response.ok){
        window.location.href = '/login'
    }else{
        calidad = data
    }
} 

const addMuestra = async (muestra, getMuestras) => {
    const response = await fetch(`/api/addMuestra`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(muestra)
    })

    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
        window.location.href = '/login'
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
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-6  text-azulMedac font-sans">           
                <div class="flex flex-col   w-96">
                    <label for="codigo">Código de la muestra</label>
                    <input type="text" id="codigo" class=" rounded-xl" placeholder="Codigo">
                </div>

                <div class="flex flex-col   w-96">
                    <label for="fecha">Fecha de recolección</label>
                    <input type="date" id="fecha" class=" rounded-xl">
                </div>
                    
                <div class="flex flex-col  w-96 ">
                    <label for="formato">Formato</label>
                    <select id="formato" class=" rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${
                            formato.map(f => (
                                `<option value="${f.id}">${f.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>

                <div class="flex flex-col   w-96">
                    <label for="naturaleza">Tipo de naturaleza</label>
                    <select id="naturaleza" class=" rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${
                            naturaleza.map(n => (
                                `<option value="${n.id}">${n.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>

                <div class="flex flex-col  w-96 ">
                    <label for="organo">Órgano</label>
                    <input type="text" id="organo" class=" rounded-xl" placeholder="Órgano">
                </div>

                <div class="flex flex-col  w-96 ">
                    <label for="estudio">Tipo de estudio</label>
                    <select id="estudio" class=" rounded-xl">
                        <option value="">Seleccione una opción</option>
                        ${
                            estudio.map(e => (
                                `<option value="${e.id}">${e.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>

                
                <div class="flex flex-col w-96  ">
                    <label for="calidad">Calidad de la muestra</label>
                    <select id="calidad" class="rounded-xl ">
                        <option value="">Seleccione una opción</option>
                        ${
                            calidad.map(c => (
                                `<option value="${c.id}">${c.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>
 
                <div class="flex flex-col  w-96 ">
                    <label for="descripcion">Descripción de la calidad</label>
                    <textarea type="text" id="descripcion" class="h-36 rounded-lg" placeholder="Descripción"></textarea>
                </div>

                <div class="flex flex-col  w-96 ">
                    <label for="imagenes">Imagenes de la muestra</label>
                    <input type="file" id="imagenes" class="" accept="image/*" multiple />
                </div>

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

const updateMuestra = async (muestra, idMuestra, getMuestra) => {
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
                    <select id="formato" class=" rounded-xl" value="${muestra.formato}">
                        ${
                            formato.map(f => (
                                `<option value="${f.id}">${f.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>

                <div class="flex flex-col w-96">
                    <label for="naturaleza">Tipo de naturaleza</label>
                    <select id="naturaleza" class=" rounded-xl" value="${muestra.naturaleza}">
                        ${
                            naturaleza.map(n => (
                                `<option value="${n.id}">${n.nombre}</option>`
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
                    <select id="estudio" class=" rounded-xl" value="${muestra.estudio}">
                        ${
                            estudio.map(e => (
                                `<option value="${e.id}">${e.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>

                
                <div class="flex flex-col w-96">
                    <label for="calidad">Calidad de la muestra</label>
                    <select id="calidad" class="rounded-xl" value="${muestra.calidad}">
                        ${
                            calidad.map(c => (
                                `<option value="${c.id}">${c.nombre}</option>`
                            ))                  
                        }
                    </select>
                </div>
 
                <div class="flex flex-col w-96">
                    <label for="descripcion">Descripción de la calidad</label>
                    <textarea type="text" id="descripcion" class="h-36 rounded-lg" placeholder="Descripción">${muestra.descripcion_calidad}</textarea>
                </div>

                <div class="flex flex-col w-96">
                    <label for="imagenes">Imagenes de la muestra</label>
                    <input type="file" id="imagenes" class="" accept="image/*" multiple />
                </div>

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