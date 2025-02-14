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

const deleteMuestra = async (idMuestra) => {
    const response = await fetch('/api/deleteMuestra', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(idMuestra)
    })

    const data = response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        getMuestras()
        console.log("Muestra eliminada correctamente:", data);
        Swal.fire("Muestra eliminada!", "La muestra se ha eliminada correctamente", "error")
    }
}

export const handleAdd = async (getMuestras) => {
    await Promise.all([getFormato(), getNaturaleza(), getTipoEstudio(), getCalidad()])

    Swal.fire({
        title:'Añadir muestra',
        html: `
<<<<<<< HEAD
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-6  text-azulMedac font-sans">
                
                <label for="fecha">Fecha de recolección</label>
                <input type="date" id="fecha" class="swal2-input">
                
                <label for="formato">Formato</label>
                <select id="formato" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                </select>

                <label for="naturaleza">Tipo de naturaleza</label>
                <select id="naturaleza" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                </select>

                <div class="flex flex-col   w-96">
                    <label for="naturaleza">Tipo de naturaleza</label>
                    <select id="naturaleza" class=" rounded-xl">
                        <option value="">Seleccione una opción</option>
                    </select>
                </div>

                <label for="estudio">Tipo de estudio</label>
                <select id="estudio" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                </select>

                <label for="calidad">Calidad de la muestra</label>
                <select id="calidad" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                </select>
                
                <label for="descripcion">Descripción de la calidad</label>
                <textarea type="text" id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>

                
                <div class="flex flex-col w-96  ">
                    <label for="calidad">Calidad de la muestra</label>
                    <select id="calidad" class="rounded-xl ">
                        <option value="">Seleccione una opción</option>
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

            </div
=======

>>>>>>> origin/frontend-rafa
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

export const actualizarMuestra = (muestra) => {
    Swal.fire({
        title: `Editar Muestra`,
        html: `
            <div class="flex flex-row items-center justify-center">
                <button id="editar-muestra" class="swal2-input">Editar</button>
                <button id="eliminar-muestra" class="swal2-input">Eliminar</button>        
            </div>
        `,
        icon: "info",
        confirmButtonText: "Cerrar",
    });
};
