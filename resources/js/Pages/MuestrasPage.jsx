export default function MuestrasPage(){
    return(
        <>
            <div class="content-wrapper">
                <div class="content">

                <div className="text-right p-3 pb-3">
                        <button className="bg-azulMedac text-white w-36 h-12 rounded-lg ">
                            Siguiente
                        </button>
                </div>

                <div className="flex flex-wrap gap-60 ml-8 pt-10">
                    
                    <div className="flex flex-col gap-14">
                        <label htmlFor="">Codigo de la muestra</label>
                        <input type="text" />
                        
                        <label htmlFor="">Naturaleza de la muestra</label>
                        <input type="text" />
                        
                        <label htmlFor="">Coservacion de muestra</label>
                        <input type="text" />
                    </div>

                    <div className="flex flex-col gap-14">
                        <label htmlFor="">Fecha de recoleccion</label>
                        <input type="text" />
                        
                        <label htmlFor="">Opciones biopsia</label>
                        <input type="text" />
                        
                        <label htmlFor="">Centro de procedencia</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label for="imageFile">Imagenes de la muestra</label>
                        <input type="file" id="imageFile" accept="image/*" multiple />
                    </div>
                </div>
                





















                </div>
            </div>
            
        </>
    )
}