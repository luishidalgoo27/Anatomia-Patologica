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



                <div className="bg-white rounded-md h-4/5 pt-10 pb-10">
                    <div className="flex flex-row flex-wrap ml-28 gap-10 ">
                        <div className="flex gap-80">
                            <div className="flex flex-col">
                                <label htmlFor="">Codigo de la muestra</label>
                                <input type="text" className="w-44"/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Tipo de naturaleza</label>
                                <select name="" id="" className="w-44"></select>                        
                            </div>
                            


                        </div>
                        
                        <div className="flex gap-80 flex-wrap">
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


                        </div>
                        
                        <div className="flex gap-80 flex-wrap">
                            <div className="flex flex-col">
                                <label htmlFor="">Tipo de estudio</label>
                                <select name="" id="" className="w-44"></select>                        
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Calidad de la muestra</label>
                                <select name="" id="" className="w-44"></select>                        
                            </div>


                        </div>
                    </div>
                    





                    <div className="flex flex-wrap  gap-10 pt-10">

                        <div className="flex flex-col mr-auto ml-28">
                            <label for="imageFile">Imagenes de la muestra</label>
                            <input type="file" id="imageFile" accept="image/*" multiple />
                        </div>

                        <div className="flex flex-col mr-32">
                            <label htmlFor="">Descripcion de calidad </label>
                            <textarea name="" id="" className="h-36"></textarea>
                        </div>


                    </div>

                </div>









                





















                </div>
            </div>
            
        </>
    )
}