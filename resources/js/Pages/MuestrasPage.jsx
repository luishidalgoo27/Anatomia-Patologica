import { addMuestra } from "@/utils/muestrasApiRest"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export default function MuestrasPage(){
    //Estados para pintar los input de muestras
    const [formatos, setFormatos] = useState([])
    const [estudios, setEstudios] = useState([])
    const [naturalezas, setNaturalezas] = useState([])
    const [calidades, setCalidades] = useState([])

    //Estados para añadir una muestra
    const [codigo,setCodigo] = useState('')
    const [fecha,setFecha] = useState('')
    const [id_formato, setid_Formato] = useState('')
    const [id_tipo_naturaleza, setid_tipo_Naturaleza] = useState('')
    const [organo,setOrgano] = useState('')
    const [estudio, setEstudio] = useState('')
    const [id_calidad, setid_Calidad] = useState('')
    const [descripcion_calidad, setDescripcion_calidad] = useState('')


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

    const handleAddMuestra = async () => {
        const nuevaMuestra = {
            codigo,
            fecha,
            organo,
            id_formato,
            id_tipo_naturaleza,
            id_calidad,
            descripcion_calidad
        };
    
        try {
            await addMuestra(nuevaMuestra);
        } catch (error) {
            console.error("Error al añadir la muestra:", error);
            Swal.fire("Cancelled!", "Error al añadir la muestra", "error")
        }
    };

    return(
        <>
            <div className="content-wrapper">
                <div className="content bg-slate-200">

                    <div className="pb-28"></div>
                    

                    <div className="flex flex-col bg-white rounded-xl w-2/5 pt-10 pb-10 ml-auto mr-auto items-center gap-9 text-azulMedac">          
                        <div className="flex flex-col w-96 ">
                            <label htmlFor="CodigoDeLaMuestra">Codigo de la muestra</label>
                            <input required value={codigo} onChange={(e)=> setCodigo(e.target.value)} name="CodigoDeLaMuestra" id="CodigoDeLaMuestra" type="text" className=" rounded-lg"/>
                        </div>

                        <div className="flex flex-col w-96">
                            <label htmlFor="fechaDeRecoleccion">Fecha de recolección</label>
                            <input value={fecha} onChange={(e)=> setFecha(e.target.value)} type="date" name="fechaDeRecoleccion" id="fechaDeRecoleccion" className=" rounded-lg"/>
                        </div>

                        <div className="flex flex-col w-96">
                            <label htmlFor="formato">Formato</label>
                            <select value={id_formato} onChange={(e)=> setid_Formato(e.target.value)} name="formato" id="formato" className=" rounded-lg">
                                <option value="">Seleccione una opción</option>
                            {
                                formatos.map((formato,index)=>(
                                    <option key={index} value={formato.id}>{formato.nombre}</option>
                                ))
                            }
                            </select>                        
                        </div>
                        
                        <div className="flex flex-col w-96">
                            <label htmlFor="TipoDeNaturaleza">Tipo de naturaleza</label>
                            <select value={id_tipo_naturaleza} onChange={(e)=> setid_tipo_Naturaleza(e.target.value)} name="TipoDeNaturaleza" id="TipoDeNaturaleza" className=" rounded-lg">
                                <option value="">Seleccione una opción</option>
                            {
                                naturalezas.map((naturaleza,index)=>(
                                    <option key={index} value={naturaleza.id}>{naturaleza.nombre}</option>
                                ))
                            }    
                            </select>                        
                        </div>

                        <div className="flex flex-col w-96">
                            <label htmlFor="organo">Órgano</label>
                            <input value={organo} onChange={(e)=> setOrgano(e.target.value)} id="organo" name="organo" type="text" className=" rounded-lg"/>
                        </div>
                    
                        <div className="flex flex-col w-96">
                            <label htmlFor="TipoDeEstudio">Tipo de estudio</label>
                            <select value={estudio} onChange={(e)=> setEstudio(e.target.value)} name="TipoDeEstudio" id="TipoDeEstudio" className=" rounded-lg">
                                <option value="">Seleccione una opción</option>
                            {
                                estudios.map((estudio,index)=>(
                                    <option key={index} value={estudio.id}>{estudio.nombre}</option>
                                ))
                            }    
                            </select>                        
                        </div>
                        <div className="flex flex-col w-96">
                            <label htmlFor="CalidadDeLaMuestra">Calidad de la muestra</label>
                            <select value={id_calidad} onChange={(e)=> setid_Calidad(e.target.value)} name="CalidadDeLaMuestra" id="CalidadDeLaMuestra" className=" rounded-lg">
                                <option value="">Seleccione una opción</option>
                            {   
                                calidades.map((calidad,index)=>(
                                    <option key={index} value={calidad.id}>{calidad.nombre}</option>   
                                ))
                            }     
                            </select>                        
                        </div>

                        <div className="flex flex-col  w-96">
                            <label htmlFor="DescripcionDeCalidad">Descripción de calidad </label>
                            <textarea value={descripcion_calidad} onChange={(e)=> setDescripcion_calidad(e.target.value)} name="DescripcionDeCalidad" id="DescripcionDeCalidad" className="h-36 rounded-lg"></textarea>
                        </div>

                        <div className="flex flex-col w-96">
                            <label htmlFor="imagenesDeLaMuestra">Imagenes de la muestra</label>
                            <input type="file" name="imagenesDeLaMuestra" id="imagenesDeLaMuestra" accept="image/*" multiple />
                        </div>
                    </div>

                    <div className="text-right p-3 pb-3">
                        <button onClick={handleAddMuestra} className="bg-azulMedac text-white w-36 h-12 rounded-lg ">
                            Siguiente
                        </button>
                    </div>

                </div>
            </div>
            
        </>
    )
}