import Swal from "sweetalert2";

const addUser = async (usuario,getUsuarios) => {
    const response = await fetch('/api/api/users', {
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
        getUsuarios();
        console.log("Usuario añadido correctamente:", data);
        Swal.fire("¡Usuario añadido!", "El usuario se ha registrado correctamente", "success");
    }
} 

const updateUser = async (usuario, idUsuario, getUsuarios) => {
    const response = await fetch(`/api/api/users?id=${idUsuario}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(usuario)
    });

    const data = await response.json();
    if (!response.ok) {
        console.error("Error en el servidor:", data);
        console.log("Error: " + data.message);
    } else {
        getUsuarios();
        console.log("Usuario actualizado correctamente:", data);
        Swal.fire("¡Usuario actualizado!", "El usuario se ha actualizado correctamente", "success");
    }
};
 

const deleteUser = async (idUsuario, getUsuarios) => {
    const response = await fetch(`/api/api/users?id=${idUsuario}`, {
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
        getUsuarios();
        console.log("Usuario eliminado correctamente:", data);
        Swal.fire("¡Usuario eliminado!", "El usuario se ha eliminado correctamente", "error");
    }  
}

export const handleAdd = async (getUsuarios) => {
    const response = await fetch('/api/api/sede');
    const sedes = await response.json();

    Swal.fire({
        title: 'Añadir usuarios',
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-6  text-azulMedac font-sans">           
                <div class="flex flex-col  w-96">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" class="rounded-xl" placeholder="Nombre">
                </div>

                <div class="flex flex-col  w-96">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="rounded-xl" placeholder="Correo electrónico">
                </div>

                <div class="flex flex-col  w-96">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" class="rounded-xl" placeholder="Contraseña">
                </div>

                <div class="flex flex-col  w-96">
                    <label for="sede">Sede</label>
                    <select id="sede" class="rounded-xl">
                        <option value="">Seleccione una opcion</option>
                        ${sedes.map(s => `<option value="${s.id}">${s.nombre}</option>`)} 
                    </select>
                </div> 
            </div>
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
            addUser(result.value, getUsuarios);
        }
    });  
};

export const handleUpdate = async (usuario, getUsuarios) => {
    const response = await fetch('/api/api/sede');
    const sedes = await response.json();

    Swal.fire({
        title: 'Editar usuario',
        html: `
            <div class="flex flex-col bg-white rounded-3xl text-left items-center gap-6  text-azulMedac font-sans">           
                <div class="flex flex-col  w-96">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" class="rounded-xl" placeholder="Nombre" value="${usuario.name}">
                </div>

                <div class="flex flex-col  w-96">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="rounded-xl" placeholder="Correo electrónico" value="${usuario.email}">
                </div>

                <div class="flex flex-col  w-96">
                    <label for="sede">Sede</label>
                    <select id="sede" class="rounded-xl">
                        ${sedes.map(s => 
                            `<option value="${s.id}" ${s.id === usuario.id_sede ? 'selected' : ''}>
                                ${s.nombre}
                            </option>`)} 
                    </select>
                </div> 
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        showDenyButton: true,
        denyButtonText: "Eliminar",
        preConfirm: () => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const id_sede = document.getElementById("sede").value;

            if (!name || !email || !id_sede) {
                Swal.showValidationMessage("Todos los campos son obligatorios");
                return false;
            }

            return { name, email, id_sede };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            updateUser(result.value, usuario.id, getUsuarios);
        } else if (result.isDenied) {
            deleteUser(usuario.id, getUsuarios);
        }
    });
};
