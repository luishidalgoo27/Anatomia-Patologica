import Swal from "sweetalert2";

const getFormato = () => {
    fetch(`/formato`)
        .then(response => response.json())
        .then(data => ()=>{

        })
        .catch(error => console.error('Error al obtener los datos:', error))
}  

const getTipoEstudio = () => {
    fetch(`/api/tipoEstudio`)
        .then(response => response.json())
        .then(data => ()=>{

        })
        .catch(error => console.error('Error al obtener los datos:', error))
} 

const getNaturaleza = () => {
    fetch(`/api/naturaleza`)
        .then(response => response.json())
        .then(data => ()=>{

        })
        .catch(error => console.error('Error al obtener los datos:', error))
} 

const getCalidad = () => {
    fetch(`/api/calidad`)
        .then(response => response.json())
        .then(data => ()=>{
            
        })
        .catch(error => console.error('Error al obtener los datos:', error))
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
    await Promise.all([getFormato(), getNaturaleza(), getCalidad()])

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
                </select>

                <label for="naturaleza">Tipo de naturaleza</label>
                <select id="naturaleza" class="swal2-select">
                    <option value="">Seleccione una opción</option>
                </select>

                <label for="organo">Órgano</label>
                <input type="text" id="organo" class="swal2-input" placeholder="Órgano">

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

                <label for="imagenes">Imagenes de la muestra</label>
                <input type="file" id="imagenes" class="swal2-file" accept="image/*" multiple />
            </div
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
            addUser(result.value,getMuestras); 
            console.log("Datos ingresados:", result.value)
            Swal.fire("Muestra añadida!", "La muestra se ha registrado correctamente", "success")
        }
    })
}