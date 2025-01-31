export default function HomePage() {
    return (
        <>
            <div class="content-wrapper">
                <div class="content">
                    
                    <form action="" className="max-w-sm mx-auto ">

                        <div className="pb-11  pt-4" >
                            <label for="">Correo</label>
                            <input type="password" name="" id="" />
                        </div>
                        <div className="pb-11" >
                            <label for="">Contraseña</label>
                            <input type="password" name="" id="" />
                        </div>


                        <div className="p-4 flex gap-4 justify-center">

                            <button className="bg-blue-600 text-white w-36 h-12 rounded-lg ">
                                Añadir usuario
                            </button>

                            <button className="bg-blue-600 text-white w-36 h-12 rounded-lg ">
                                Editar usuario
                            </button>


                            <button className="bg-blue-600 text-white w-36 h-12 rounded-lg ">
                                Borrar usuario
                            </button>
                        </div>
                    </form>


                    
                    
                    
                    <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                        <table class="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Correo
                                        </p>
                                    </th>
                                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                            Contraseña
                                        </p>
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            rafa@gmail.com
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            12345
                                        </p>
                                    </td>


                                </tr>
                                <tr>

                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            luis@gmail.com
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            12345
                                        </p>
                                    </td>


                                </tr>
                                <tr>

                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            pedro@gmail.com
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            12345
                                        </p>
                                    </td>


                                </tr>
                                <tr>

                                    
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            angel@gmail.com
                                        </p>
                                    </td>
                                    <td class="p-4 border-b border-blue-gray-50">
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            12345
                                        </p>
                                    </td>


                                </tr>

                            </tbody>
                        </table>
                    </div>
















                    
                </div>
            </div>
        </>
    );
}
