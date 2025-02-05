export default function MuestrasPage(){
    return(
        <>
            <div className="content-wrapper">
                <div className="content">

                <div className="text-right p-3 pb-3">
                        <button className="bg-azulMedac text-white w-36 h-12 rounded-lg ">
                            Siguiente
                        </button>
                </div>

                <div className="flex flex-wrap gap-60 ml-8 pt-10">
                    
                    <div className="flex flex-col gap-14">
                        <label htmlFor="codigo">Codigo de la muestra</label>
                        <input id="codigo" type="text" />
                        
                        <label htmlFor="naturaleza">Naturaleza de la muestra</label>
                        <input id="naturaleza" type="text" />
                        
                        <label htmlFor="conservacion">Coservacion de muestra</label>
                        <input id="conservacion" type="text" />
                    </div>

                    <div className="flex flex-col gap-14">
                        <label htmlFor="fecha">Fecha de recoleccion</label>
                        <input id="fecha" type="text" />
                        
                        <label htmlFor="biopsia">Opciones biopsia</label>
                        <input id="biopsia" type="text" />
                        
                        <label htmlFor="procedencia">Centro de procedencia</label>
                        <input id="procedencia" type="text" />
                    </div>

                    <div>
                        <label htmlFor="imageFile">Imagenes de la muestra</label>
                        <input type="file" id="imageFile" accept="image/*" multiple />
                    </div>
                </div>
                
                </div>
            </div>
            
        </>
    )
}