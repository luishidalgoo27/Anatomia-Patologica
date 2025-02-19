export default function ActualizarUsuarioPage() {
    return (

        <>
        <div className="content-wrapper bg-[url(/public/media/fondoMuestras1.jpg)]  bg-cover ">
        <div className="content">
                    <section className="">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    
                                    <div className="flex">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Editar Cuenta
                                        </h1>
                                        <div className=" ml-auto">
                                            <img src="/public/media/user2-160x160.jpg" className="img-circle elevation-2 w-12" alt="User Image"/>
                                        </div>
                                    </div>      
                                    <form
                                        className="space-y-4 md:space-y-6 mt-0"
                                        action="#"
                                    >
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Nuevo nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder=""
                                                required=""
                                            ></input>
                                        </div>
                                        <div>
                                            <label
                                                for="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Nuevo email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="nombre@gmail.com"
                                                required=""
                                            ></input>
                                        </div>
                                        <div>
                                            <label
                                                for="password"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Nueva contraseña
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required=""
                                            ></input>
                                        </div>
                                        <div>
                                            <label for="">Nueva foto de perfil</label>
                                            <input type="file" id="imagenes" class="" accept="image/*" multiple />
                                        </div>
                                        <div className="">
                                            <button className="bg-azulMedac text-white w-20 h-10 rounded-lg ">
                                                Actualizar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
