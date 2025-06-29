import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { handleAdd, actualizarMuestra } from "@/utils/muestrasCrud"
const API_URL = import.meta.env.VITE_API_URL;

export default function MuestrasPage(){    
    //Estados para pintar los input de muestras
    const [muestras,setMuestras] = useState([])
    const [imagenes,setImagenes] = useState([])
    const navigate = useNavigate()
        
    useEffect(()=>{
        getMuestras(),
        getImagenes()
    }, [])

    const getidUser = async () => {
        const response = await fetch(`${API_URL}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
            },
        });

        const data = await response.json()
        return data.id
    }

    const getMuestras = async () => {
        try {
            const id_user = await getidUser()
            const response = await fetch(`${API_URL}/muestra?id_user=${id_user}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                },
            });
    
            const data = await response.json();
            setMuestras(data);
    
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };  

    const getImagenes = async () => {
        const response = await fetch(`${API_URL}/imagenes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
            },
        })
        
        const data = await response.json()
        if (!response.ok) {
            console.error("Error en el servidor:", data);
            console.log("Error: " + data.message);
        } else {
            setImagenes(data)
        }
    }; 

    return(
        <>

            <div className="content-wrapper bg-[url(/public/media/fondoMuestras1.jpg)]  bg-cover ">
                <div className="content ">
                
                    <div>
                        <div className="text-right p-3 pb-3">
                            <button onClick={()=>{handleAdd(getMuestras)}} className="bg-azulMedac text-white p-3 rounded-lg ">
                                Añadir muestra
                            </button>
                        </div>
                    </div>


                    {/* Tabla de muestras */}                    
                    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border overflow-auto">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Código
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Fecha
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Descripción
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Imagenes
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        
                                    </th>
                                </tr>
                            </thead>
 
                            <tbody>
                                {
                                    muestras.map((muestra,index) => (
                                        <tr key={index} onClick={() => actualizarMuestra(muestra, getMuestras)} className="hover:cursor-pointer">
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {muestra.codigo}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {muestra.fecha}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {muestra.descripcion_calidad}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                {
                                                    imagenes.filter((imagen) => imagen.id_muestra === muestra.id).map((imagen,index) => ( 
                                                        <img width="32" height="32" key={index} src={imagen.ruta} />
                                                    ))
                                                }
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <Link to={`/interpretacion/${muestra.id}`} onClick={(event) => event.stopPropagation()}>
                                                    <i className="pr-3 fas fa-eye"></i>
                                                </Link>
                                                
                                                <a href={`/api/api/descargarMuestra?id=${muestra.id}`} target="_blank" onClick={(event) => event.stopPropagation()}>
                                                    <i className="pl-3 fas fa-download"></i>
                                                </a>
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