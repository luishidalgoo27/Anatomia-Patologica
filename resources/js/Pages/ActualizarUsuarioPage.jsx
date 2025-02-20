import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export default function ActualizarUsuarioPage() {
  const [user, setUser] = useState(null);
  const [imagenUser, setImagenUser] = useState("");
  const [rutaImagenUser, setRutaImagenUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [imagenDefault, setimagenDefault] = useState("../../assets/img/user2-160x160.jpg")

  // Manejo de subida de imagen
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dotw4uex6/image/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setRutaImagenUser(data.secure_url);
      setImagenUser(data.secure_url);
      setIsUploading(false);
    } catch (error) {
      console.error("Error subiendo la imagen a Cloudinary:", error);
      setIsUploading(false);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al subir la imagen.',
      });
      
    }
  };

  // Cargar el usuario al montar el componente
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
      });

      const data = await response.json();
      setUser(data);
      setName(data.name || "");
      setEmail(data.email || "");
      setImagenUser(data.imagen || imagenDefault);
    };

    getUser();
  }, []);

  // Función para actualizar usuario
  const updateUser = async () => {
    if (isUploading) {
      Swal.fire({
        icon: 'warning',
        title: 'Espere por favor',
        text: 'La imagen aún se está subiendo.',
      });
      return;
    }

    const updatedUser = {
      id: user.id,
      name,
      email,
      imagen: rutaImagenUser || user.imagen, // Usar la imagen actual si no se cambia
    };

    try {
      const response = await fetch(`/api/users`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(updatedUser)
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error en el servidor:", data);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar el usuario.',
        });
      } else {
        console.log("Usuario actualizado correctamente");
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Usuario actualizado correctamente.',
        }).then(() => {
          window.location.reload();
        });
        // Actualizar el estado del usuario con los nuevos datos
        setUser({...user, ...updatedUser});
      }
    } catch (error) {
      console.error("Error actualizando usuario:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error en la actualización.',
      });
    }
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="content-wrapper bg-[url(/public/media/fondoMuestras1.jpg)] bg-cover">
      <div className="content">
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Editar Cuenta
                  </h1>
                  <div className="ml-auto">
                    <img src={imagenUser || "/placeholder.svg"} className="img-circle elevation-2 w-12" alt="User Image" />
                  </div>
                </div>
                <form className="space-y-4 md:space-y-6 mt-0" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nuevo nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nuevo email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="imagenes">Nueva foto de perfil</label>
                    <input type="file" id="imagenes" accept="image/*" onChange={handleImageUpload} />
                    {isUploading && <p>Subiendo imagen...</p>}
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      onClick={updateUser} 
                      className="bg-azulMedac text-white w-20 h-10 rounded-lg"
                      disabled={isUploading}
                    >
                      Actualizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}