import Swal from "sweetalert2";

const addUser = async (usuario,obtenerUsuarios) => {
    const response = await fetch('/api/api/addUser', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
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

const updateUser = async (usuarioEmail, usuarioId, obtenerUsuarios) => {
    const response = await fetch(`/api/api/updateUser?id=${usuarioId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioEmail)
    });
    
    const data = await response.json()
    if(!response.ok){
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    }else{
        console.log("Usuario actualizado correctamente:", data);
        obtenerUsuarios();
    }
}  

export const deleteUser = async (usuarioId,obtenerUsuarios) => {
    const response = await fetch(`/api/api/deleteUser?id=${usuarioId}`, {
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
        console.log("Usuario eliminado correctamente:", data);
        obtenerUsuarios();
    }  
}

export const handleAdd = (obtenerUsuarios) => {
    Swal.fire({
        title:'Añadir usuarios',
        html: `
            <input type="text" id="email" class="swal2-input" placeholder="Correo electrónico">
            <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
        `,
        showCancelButton: true,
        confirmButtonText: "Añadir",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!email || !password) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { email, password }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            addUser(result.value,obtenerUsuarios); 
            console.log("Datos ingresados:", result.value)
            Swal.fire("¡Usuario añadido!", "El usuario se ha registrado correctamente", "success")
        }
    })
}

export const handleUpdate = (usuario,obtenerUsuarios) => {
    Swal.fire({
        title:'Editar usuarios',
        html: `
            <input type="text" id="email" name="email" class="swal2-input" value=${usuario.email} placeholder="Correo electrónico">
        `,
        showCancelButton: true,
        confirmButtonText: "Editar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const email = document.getElementById("email").value;

            if (!email) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { email }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            updateUser(result.value,usuario.id,obtenerUsuarios); 
            console.log("Datos ingresados:", result.value)
            Swal.fire("¡Usuario actualizado!", "El usuario se ha actualizado correctamente", "success")
        }
    })
}