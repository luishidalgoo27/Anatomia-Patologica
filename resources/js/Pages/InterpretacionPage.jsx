import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"

export async function loader({params}){
    const id = params.id
    return { id }
}

export default function InterpretacionPage(){
    const [interpretacion, setInterpretacion] = useState([])
    const { id } = useLoaderData()

    const getInterpretacion = async () => {
        fetch(`/api/interpretacion`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
            },
        })
        .then(response => response.json())
        .then(data => setInterpretacion(data))
        .catch(error => console.error('Error al obtener los datos:', error))
    }

    useEffect(()=>{
        getInterpretacion()
    }, [])
    
    return(
        <>
            <div className="content-wrapper bg-[url(/public/media/fondoMuestras3.webp)]">
                <div className="content ">
                
                    <div>
                        <div className="text-right p-3 pb-3">
                            <button onClick={()=>{handleAdd(getMuestras)}} className="bg-azulMedac text-white w-36 h-12 rounded-lg ">
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
                                </tr>
                            </thead>
    
                            <tbody>
                                {
                                    muestras.map((muestra,index) => (
                                        <tr key={index} onClick={() => actualizarMuestra(muestra, getMuestras)}>
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