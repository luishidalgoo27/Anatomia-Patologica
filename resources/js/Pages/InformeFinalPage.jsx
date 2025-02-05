export default function MuestrasPage(){
    return(
        <>
            <div class="content-wrapper">
                <div class="content">
                    <div className="flex flex-wrap flex-col pt-4 pb-4">

                        
                        <div className="flex gap-52 ml-80 pb-10">
                            <div><p>Codigo: 12345</p></div>
                            <div><p>Fecha de muestra: 3/02/25</p></div>
                            <div><p>ejemplo@gmail.com</p></div>
                        </div>

                        <div className="flex">
                            <div className="ml-12">
                                <label htmlFor="">Naturaleza de la muestra</label>
                                <input type="text" />
                            </div>

                            <div className="ml-auto mr-32">
                                <label htmlFor="">Coservacion de muestra</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center ">
                            <div><label htmlFor="">Descripcion citologica</label></div>
                            <div><input type="text" className="mb-2 w-96"/></div>
                            <div><input type="text" className="w-96 h-80"/></div>

                        </div>

                        
                        <div className="ml-auto mt-10 ">
                            <h1>hola</h1>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}