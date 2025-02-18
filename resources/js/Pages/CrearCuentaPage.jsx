import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearCuentaPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sedes, setSedes] = useState([]);
  const [selectedSede, setSelectedSede] = useState(""); 


 const getSede = async () => {
    try {
      const response = await fetch("/api/sede", {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setSedes(data);
    } catch (error) {
      console.error("Error al obtener los datos de las sedes:", error);
    }
  }

  useEffect(() => {
    getSede();
  }, []);

  
  const handleRegister = async (e) => {
    e.preventDefault();
  
    const response = await fetch("/api/register", {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({ email, password, id_sede: selectedSede }),
    });
    
    const data = await response.json();
    if (!response.ok) {
      console.error("Error en el servidor:", data);
      alert("Error: " + data.message);
    } else {
      navigate("/", { replace: true });
      console.log(data);
      // Guardar token en sessionStorage
      sessionStorage.setItem("token", data.token);
    }
  };

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
                  <form className="space-y-4 md:space-y-6"  onSubmit={handleRegister}>
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
                        value={selectedSede}
                        onChange={(e) => setSelectedSede(e.target.value)}
                      >
                        <option value="">Seleccione una sede:</option>
                        {
                          sedes.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.nombre}
                            </option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="">
                      <button className="bg-azulMedac text-white w-20 h-10 rounded-lg">
                        Crear
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
