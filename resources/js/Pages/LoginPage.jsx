import { Link } from "react-router-dom"
export default function LoginPage() {
    return (

        <>
        <div className="content-wrapper bg-[url(/public/media/fondoMuestras1.jpg)]  bg-cover ">
        <div className="content">
                    <section className="">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Iniciar sesión
                                    </h1>
                                    <form
                                        className="space-y-4 md:space-y-6"
                                        action="#"
                                    >
                                        <div>
                                            <label
                                                for="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Email
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
                                                Contraseña
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
                                            
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    required=""
                                                ></input>
                                            </div>
                                            <div className=" text-sm">
                                                <label
                                                    for="remember"
                                                    className="text-gray-500 dark:text-gray-300 ml-3"
                                                >
                                                    Recuerdame
                                                </label>
                                            </div>
                                        </div>




                                        <div className="flex  justify-between">

                                            <div className="text-sm text-gray-500 flex gap-2 mt-2">
                                                <label for="">¿No tienes una cuenta?</label>
                                                <Link to="/CrearCuenta">Crear cuenta</Link>                                                  
                                            </div>


                                            <div className="">
                                                <button className="bg-azulMedac text-white w-20 h-10 rounded-lg ">
                                                    Entrar
                                                </button>
                                            </div>
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
