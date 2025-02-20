import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function InterpretacionPage(){
    const [interpretacion, setInterpretacion] = useState([])
    const navigate = useNavigate()

    const getInterpretacion = async () => {
        const response = await fetch(`/api/api/allInterpretaciones`, {
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
            navigate('/', {replace:true})
        } else {
            setInterpretacion(data)
        }
    }

    useEffect(()=>{
        getInterpretacion()
    }, [])
    
    return(
        <>
            <div className="content-wrapper bg-[url(/public/media/fondoMuestras3.webp)]">
                <div className="content pt-5">
                
                    {/* Tabla de interpretaciones */}                    
                    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border overflow-auto">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Id
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Descripción
                                    </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Id Muestra
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Id Interpretacion
                                        </p>
                                    </th>
                                </tr>
                            </thead>
    
                            <tbody>
                                {
                                    interpretacion.map((i,index) => (
                                        <tr key={index}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {i.id}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {i.descripcion}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {i.id_muestra}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {i.id_interpretacion}
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