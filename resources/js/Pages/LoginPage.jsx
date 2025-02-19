import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
      
        const response = await fetch("/api/login", {
          method: "POST",
          credentials: "include",
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
        },
          body: JSON.stringify({ email, password }),
        });
      
        const data = await response.json();
      
        if (!response.ok || !data.status) {
          console.error("Error en el servidor:", data);
          alert("Error: " + data.message);
        } else {
            navigate("/", { replace: true });

            // Guardar token en sessionStorage
            sessionStorage.setItem("token", data.token);
        }
      };
      

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

                                    {error && (
                                        <p className="text-red-500 text-sm">{error}</p>
                                    )}
                                    {message && (
                                        <p className="text-green-500 text-sm">{message}</p>
                                    )}

                                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="nombre@gmail.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="remember"
                                                        type="checkbox"
                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                                        Recuérdame
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
