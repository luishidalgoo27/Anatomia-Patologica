import { useEffect, useState } from "react"
import { showSwal } from "@/utils/SweetForm"

export default function HomePage() {
    const [usuarios,setUsuarios] = useState([])
    
    useEffect(()=>{
        obtenerUsuarios()
    }, [])

    const obtenerUsuarios = () => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Error al obtener los datos:', error))
    }

    const handleSubmit = async (usuario) => {
        const response = await fetch('/api/anadirUser', {
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

    return (
        <>
            <div className="content-wrapper">
                <div className="content">
               
                    <div className="p-4 flex gap-4 justify-center">
                        <button onClick={() => showSwal(handleSubmit)} className="bg-blue-600 text-white w-36 h-12 rounded-lg ">
                            Añadir usuario
                        </button>
                    </div>

                    {/* Tabla de usuarios */}                    
                    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Correo
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Contraseña
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Modificar
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Eliminar
                                        </p>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    usuarios.map((usuario,index) => (
                                        <tr key={index}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {usuario.email}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {usuario.password}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <button id={usuario.id} className="bg-blue-600 text-white w-36 h-12 rounded-lg ">
                                                    Editar usuario
                                                </button>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <button id={usuario.id} className="bg-blue-600 text-white w-36 h-12 rounded-lg ">
                                                    Borrar usuario
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>      



                </div>
            </div>
        </>
    )
}
