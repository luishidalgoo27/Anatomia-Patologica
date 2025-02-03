import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const showSwal = (handleSubmit) => {
    withReactContent(Swal).fire({
        title: <i>Añadir Usuario</i>,
        html: (
            <div>
                <input
                    type="text"
                    id="email"
                    className="swal2-input"
                    placeholder="Correo electrónico"
                />
                <input
                    type="password"
                    id="password"
                    className="swal2-input"
                    placeholder="Contraseña"
                />
            </div>
        ),
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

            return { email, password };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            handleSubmit(result.value)
            console.log("Datos ingresados:", result.value);
            Swal.fire("¡Usuario añadido!", "El usuario se ha registrado correctamente", "success");
        }
    });
}