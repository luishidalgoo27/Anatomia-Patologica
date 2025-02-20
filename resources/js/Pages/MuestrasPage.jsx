import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { handleAdd, actualizarMuestra } from "@/utils/muestrasCrud"

export default function MuestrasPage(){    
    //Estados para pintar los input de muestras
    const [id_user, setidUser] = useState()
    const [muestras,setMuestras] = useState([])
    const navigate = useNavigate()
        
    useEffect(()=>{
        getMuestras()
    }, [])

    const descargarPdf = async (id, event) => {
        event.stopPropagation();
    
        const url = `/api/descargarMuestra?id=${id}`;
        window.open(url, '_blank'); 
    };

    const getidUser = async () => {
        const response = await fetch('/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
            },
        });

        const data = await response.json()
        setidUser(data.id)
        return data.id
    }

    const getMuestras = async () => {
        try {
            const id_user = await getidUser()
            const response = await fetch(`/api/muestra?id_user=${id_user}`, {
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
                                            Interpretaciones
                                        </p>
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
                                                <Link to={`/interpretacion/${muestra.id}`} onClick={(event) => event.stopPropagation()}>
                                                    <i className="pr-3 fas fa-eye"></i>
                                                </Link>
                                                
                                                <Link onClick={(event) => descargarPdf(muestra.id, event)}>
                                                    <i className="pl-3 fas fa-download"></i>
                                                </Link>
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