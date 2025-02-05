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

                <div className="grid grid-cols-2 gap-14 items-start pt-10 pb-12">
                    <div className="flex flex-col">
                        <label htmlFor="">Codigo de la muestra</label>
                        <input type="text" className="w-44"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Naturaleza de la muestra</label>
                        <select name="" id="" className="w-44"></select>                        
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Coservacion de muestra</label>
                        <select name="" id="" className="w-44"></select>                        
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Fecha de recoleccion</label>
                        <input type="date" name="" id="" className="w-44"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Formato</label>
                        <select name="" id="" className="w-44"></select>                        
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="">Órgano</label>
                        <input type="text" className="w-44"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Centro de procedencia</label>
                        <select name="" id="" className="w-44"></select>                        
                    </div>
                </div>

                <div className="flex flex-col">
                    <label for="imageFile">Imagenes de la muestra</label>
                    <input type="file" id="imageFile" accept="image/*" multiple />
                </div>
                



                </div>
            </div>
            
        </>
    )
}