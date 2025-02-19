import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { handleAdd, handleUpdate } from "@/utils/usuariosCrud"

export default function HomePage() {
    const [usuarios,setUsuarios] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        getUsuarios()
    }, []) 

    const getUsuarios = async () => {
        try {
            const response = await fetch(`/api/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                },
            });
    
            if (!response.ok) {
                console.error("Error en el servidor:", response.status, response.statusText);
                navigate("/login", { replace: true }); 
                return; 
            }
    
            const data = await response.json();
            setUsuarios(data);
    
        } catch (error) {
            console.error("Error en la solicitud:", error);
            navigate("/login", { replace: true }); 
        }
    };

    return (
        <>
            <div className="content-wrapper bg-[url(/public/media/fondoMuestras1.jpg)]  bg-cover ">
            <div className="content">
               
                    <div className="text-right p-3 pb-3">
                        <button onClick={() => handleAdd(getUsuarios)} className="bg-azulMedac text-white  w-36 h-12 rounded-lg ">
                            Añadir usuario
                        </button>
                    </div>

                    {/* Tabla de usuarios */}                    
                    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border overflow-auto">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Nombre
                                        </p>
                                    </th>
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
                                            Sede
                                        </p>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    usuarios.map((usuario,index) => (
                                        <tr key={index} onClick={() => handleUpdate(usuario, getUsuarios)}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {usuario.name}
                                                </p>
                                            </td>
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
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {usuario.id_sede}
                                                </p>
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
