import { useState, useEffect } from "react";

export default function CrearCuentaPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sedes, setSedes] = useState([]);           // Array de sedes
  const [selectedSede, setSelectedSede] = useState(""); // ID de la sede seleccionada

  return (
    <>
      <div className="content-wrapper bg-[url(/public/media/fondoMuestras3.webp)]">
        <div className="content">
          <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Crear cuenta
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                          focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="nombre@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                          focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sede"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Sede
                      </label>
                      <select
                        name="sede"
                        id="sede"
                        value={selectedSede}  // El id de la sede seleccionada
                        onChange={(e) => setSelectedSede(e.target.value)}
                      >
                        <option value="">Seleccione una sede:</option>
                        {sedes.length > 0 ? (
                          sedes.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.nombre}
                            </option>
                          ))
                        ) : (
                          <option>Loading...</option>
                        )}
                      </select>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="">
                      <button
                        onClick={() => handleAdd(obtenerUsuarios)}
                        className="bg-azulMedac text-white w-20 h-10 rounded-lg"
                        disabled={loading}
                      >
                        {loading ? "Creando..." : "Crear"}
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
