import Swal from "sweetalert2";

const addUser = async (usuario,obtenerUsuarios) => {
    const response = await fetch('/api/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(usuario)
    }); 
    
    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        console.log("Usuario añadido correctamente:", data);
        obtenerUsuarios();
    }
} 

const updateUser = async (name, email, usuarioId, obtenerUsuarios) => {
    const response = await fetch(`/api/updateUser?id=${usuarioId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify({ name, email }) // Enviar como objeto
    });

    const data = await response.json();
    if (!response.ok) {
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    } else {
        console.log("Usuario actualizado correctamente:", data);
        obtenerUsuarios();
    }
};
 

export const deleteUser = async (usuarioId,obtenerUsuarios) => {
    const response = await fetch(`/api/deleteUser?id=${usuarioId}`, {
        method: "DELETE", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
    });

    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        console.log("Usuario eliminado correctamente:", data);
        obtenerUsuarios();
    }  
}

export const handleAdd = async (obtenerUsuarios) => {
    try {
        // Obtener las sedes antes de mostrar el Swal.fire
        const response = await fetch('/api/sede');
        const sedes = await response.json();

        // Generar opciones para el select
        const opcionesSedes = sedes
            .map(s => `<option value="${s.id}">${s.nombre}</option>`)
            .join(""); // Unir todas las opciones en un solo string

        Swal.fire({
            title: 'Añadir usuarios',
            html: `
                <input type="text" id="name" class="swal2-input" placeholder="Nombre">
                <input type="email" id="email" class="swal2-input" placeholder="Correo electrónico">
                <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
                <select class="swal2-select" id="sede">
                    <option value="">Seleccione una sede:</option>
                    ${opcionesSedes} 
                </select>
            `,
            showCancelButton: true,
            confirmButtonText: "Añadir",
            cancelButtonText: "Cancelar",
            preConfirm: () => {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                const id_sede = document.getElementById("sede").value;

                if (!name || !email || !password || !id_sede) {
                    Swal.showValidationMessage("Todos los campos son obligatorios");
                    return false;
                }

                return { name, email, password, id_sede };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                addUser(result.value, obtenerUsuarios);
                console.log("Datos ingresados:", result.value);
                Swal.fire("¡Usuario añadido!", "El usuario se ha registrado correctamente", "success");
            }
        });
    } catch (error) {
        console.error("Error obteniendo las sedes:", error);
        Swal.fire("Error", "No se pudieron cargar las sedes", "error");
    }
};

export const handleUpdate = (usuario, obtenerUsuarios) => {
    Swal.fire({
        title: 'Editar usuario',
        html: `
            <input type="text" id="name" name="name" class="swal2-input" value="${usuario.name}" placeholder="Nombre">
            <input type="email" id="email" name="email" class="swal2-input" value="${usuario.email}" placeholder="Correo electrónico">
        `,
        showCancelButton: true,
        confirmButtonText: "Editar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (!name || !email) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { name, email };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const { name, email } = result.value; // Extraer valores
            updateUser(name, email, usuario.id, obtenerUsuarios); // Pasar valores correctamente
            console.log("Datos ingresados:", result.value);
            Swal.fire("¡Usuario actualizado!", "El usuario se ha actualizado correctamente", "success");
        }
    });
};
