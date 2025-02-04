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

                <div className="flex gap-60  pt-10">
                    <div className="flex flex-col  pl-40 gap-14">
                        <label htmlFor="">Calidad de la muestra</label>
                        <input type="text" />

                        <label htmlFor="">Interpretacion de la muestra </label>
                        <input type="text" />
                    </div>

                    <div className="flex flex-col ml-auto pr-40 gap-14 mb-14">
                        <label htmlFor="">Descripcion de calidad </label>
                        <input type="text" className="h-36"/>


                    
                        <label htmlFor="">Descripcion de interpretacion </label>
                        <input type="text" className="h-36"/>
                        
                        <button className="bg-azulMedac text-white w-36 h-12 rounded-lg ml-10    ">
                            Agregar otra interpretacion
                        </button>
                    </div>
                </div>


                
















                </div>
            </div>
            
        </>
    )
}