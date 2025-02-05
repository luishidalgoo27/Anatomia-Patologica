import { useEffect, useState } from "react"

export default function MuestrasPage(){
    const [formatos, setFormatos] = useState([])
    const [estudios, setEstudios] = useState([])
    const [naturalezas, setNaturalezas] = useState([])
    const [calidades, setCalidades] = useState([])

    const [estudioIsSelected, setEstudioIsSelected] = useState('')


    useEffect(()=>{
        getFormato(),
        getTipoEstudio(),
        getNaturaleza(),
        getCalidad()
    }, [])


    const getFormato = () => {
        fetch(`/api/formato`)
            .then(response => response.json())
            .then(data => setFormatos(data))
            .catch(error => console.error('Error al obtener los datos:', error))
    }  

    const getTipoEstudio = () => {
        fetch(`/api/tipoEstudio`)
            .then(response => response.json())
            .then(data => setEstudios(data))
            .catch(error => console.error('Error al obtener los datos:', error))
    } 

    const getNaturaleza = () => {
        fetch(`/api/naturaleza`)
            .then(response => response.json())
            .then(data => setNaturalezas(data))
            .catch(error => console.error('Error al obtener los datos:', error))
    } 

    const getCalidad = () => {
        fetch(`/api/calidad`)
            .then(response => response.json())
            .then(data => setCalidades(data))
            .catch(error => console.error('Error al obtener los datos:', error))
    } 

    return(
        <>
            <div className="content-wrapper">
                <div className="content">

                    <div className="text-right p-3 pb-3">
                        <button className="bg-azulMedac text-white w-36 h-12 rounded-lg ">
                            Siguiente
                        </button>
                    </div>


                    <div className="bg-white rounded-md h-4/5 pt-10 pb-10">
                        <div className="flex flex-row flex-wrap ml-28 gap-10 ">
                            <div className="flex gap-80">
                                <div className="flex flex-col">
                                    <label htmlFor="codigo">Codigo de la muestra</label>
                                    <input id="codigo" name="codigo" type="text" className="w-44"/>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="naturaleza">Tipo de naturaleza</label>
                                    <select name="naturaleza" id="naturaleza" className="w-44">
                                        {
                                            naturalezas.map((naturaleza,index)=>(
                                                <option key={index} value={naturaleza.id}>{naturaleza.nombre}</option>
                                            ))
                                        }
                                    </select>                        
                                </div>
            

                            </div>
                            

                            <div className="flex gap-80 flex-wrap">
                                <div className="flex flex-col">
                                    <label htmlFor="fecha">Fecha de recoleccion</label>
                                    <input type="date" name="fecha" id="fecha" className="w-44"/>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="formato">Formato</label>
                                    <select name="formato" id="formato" className="w-44">
                                        {
                                            formatos.map((formato,index)=>(
                                                <option key={index} value={formato.id}>{formato.nombre}</option>
                                            ))
                                        }
                                    </select>                        
                                </div>
                                
                                <div className="flex flex-col">
                                    <label htmlFor="organo">Órgano</label>
                                    <input id="organo" name="organo" type="text" className="w-44"/>
                                </div>
                            </div>
                            

                            <div className="flex gap-80 flex-wrap">
                                <div className="flex flex-col">
                                    <label htmlFor="estudio">Tipo de estudio</label>
                                    <select name="estudio" id="estudio" className="w-44">
                                        {
                                            estudios.map((estudio,index)=>(
                                                <option key={index} value={estudio.id}>{estudio.nombre}</option>
                                            ))
                                        }
                                    </select>                        
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="calidad">Calidad de la muestra</label>
                                    <select name="calidad" id="calidad" className="w-44">
                                        {   
                                            calidades.map((calidad,index)=>(
                                                
                                                <option key={index} value={calidad.id}>{calidad.nombre}</option>
                                            ))
                                        }    
                                    </select>                        
                                </div>
                            </div>
                        </div>
                        

                        <div className="flex flex-wrap  gap-10 pt-10">
                            <div className="flex flex-col mr-auto ml-28">
                                <label htmlFor="imageFile">Imagenes de la muestra</label>
                                <input type="file" id="imageFile" accept="image/*" multiple />
                            </div>

                            <div className="flex flex-col mr-32">
                                <label htmlFor="descripcion">Descripcion de calidad </label>
                                <textarea name="" id="descripcion" className="h-36"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}