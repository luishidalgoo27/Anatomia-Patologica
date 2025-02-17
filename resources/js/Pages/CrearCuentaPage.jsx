import { useState, useEffect } from "react";

export default function CrearCuentaPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sedes, setSedes] = useState([]);
  const [selectedSede, setSelectedSede] = useState("");

  const getSede = async () => {
    try {
      const response = await fetch("/api/sede");
      const data = await response.json();
      setSedes(data);
    } catch (error) {
      console.error("Error al obtener los datos de las sedes:", error);
    }
  };

  useEffect(() => {
    getSede();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      if (!selectedSede) {
        setError("Debes seleccionar una sede");
        setLoading(false);
        return;
      }
  
      console.log("Enviando solicitud a:", "/api/register");
  
      const response = await fetch("/api/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          password, 
          id_sede: selectedSede 
        }),
      });
  
      const text = await response.text(); // Captura la respuesta como texto
      console.log("Respuesta en texto:", text);
  
      const data = JSON.parse(text); // Intenta convertirlo a JSON
  
      if (!response.ok) {
        setError(data.message || "Error desconocido al registrar.");
      } else {
        console.log("Registro exitoso, redirigiendo...");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error completo:", error);
      setError("Hubo un problema en la solicitud.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="content-wrapper bg-[url(/public/media/fondoMuestras3.webp)]">
      <div className="content">
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Crear cuenta
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                      placeholder="nombre@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="sede" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Sede
                    </label>
                    <select
                      id="sede"
                      value={selectedSede}
                      onChange={(e) => setSelectedSede(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    >
                      <option value="">Seleccione una sede:</option>
                      {sedes.length > 0 ? (
                        sedes.map((s) => (
                          <option key={s.id} value={s.id}>{s.nombre}</option>
                        ))
                      ) : (
                        <option>Loading...</option>
                      )}
                    </select>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    className="bg-azulMedac text-white w-20 h-10 rounded-lg"
                    disabled={loading}
                  >
                    {loading ? "Creando..." : "Crear"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
