export default function MuestrasPage(){
    return(
        <>
            <div className="content-wrapper">
                <div className="content bg-slate-200">

                <div className="pb-28"></div>
                

                <div className=" flex flex-col bg-white rounded-xl w-2/5 pt-10 pb-10  ml-auto mr-auto items-center gap-9 text-azulMedac">

                            
                    <div className="flex flex-col w-96 ">
                        <label htmlFor="CodigoDeLaMuestra">Codigo de la muestra</label>
                        <input name="CodigoDeLaMuestra" id="CodigoDeLaMuestra" type="text" className=" rounded-lg"/>
                    </div>

                    


                
                    <div className="flex flex-col w-96">
                        <label htmlFor="fechaDeRecoleccion">Fecha de recolección</label>
                        <input type="date" name="fechaDeRecoleccion" id="fechaDeRecoleccion" className=" rounded-lg"/>
                    </div>

                    <div className="flex flex-col w-96">
                        <label htmlFor="formato">Formato</label>
                        <select name="organo" id="organo" className=" rounded-lg"></select>                        
                    </div>
                    
                    <div className="flex flex-col w-96">
                        <label htmlFor="TipoDeNaturaleza">Tipo de naturaleza</label>
                        <select name="TipoDeNaturaleza" id="TipoDeNaturaleza" className=" rounded-lg"></select>                        
                    </div>

                    <div className="flex flex-col w-96">
                        <label htmlFor="organo">Órgano</label>
                        <input id="organo" name="organo" type="text" className=" rounded-lg"/>
                    </div>


                
                    <div className="flex flex-col w-96">
                        <label htmlFor="TipoDeEstudio">Tipo de estudio</label>
                        <select name="TipoDeEstudio" id="TipoDeEstudio" className=" rounded-lg"></select>                        
                    </div>
                    <div className="flex flex-col w-96">
                        <label htmlFor="CalidadDeLaMuestra">Calidad de la muestra</label>
                        <select name="CalidadDeLaMuestra" id="CalidadDeLaMuestra" className=" rounded-lg"></select>                        
                    </div>


                    <div className="flex flex-col  w-96">
                        <label htmlFor="DescripcionDeCalidad">Descripción de calidad </label>
                        <textarea name="DescripcionDeCalidad" id="DescripcionDeCalidad" className="h-36 rounded-lg"></textarea>
                    </div>

                    <div className="flex flex-col w-96">
                        <label for="imagenesDeLaMuestra">Imagenes de la muestra</label>
                        <input type="file" name="imagenesDeLaMuestra" id="imagenesDeLaMuestra" accept="image/*" multiple />
                    </div>


                </div>

                <div className="text-right p-3 pb-3">
                        <button className="bg-azulMedac text-white w-36 h-12 rounded-lg ">
                            Siguiente
                        </button>
                </div>



                </div>
            </div>
            
        </>
    )
}