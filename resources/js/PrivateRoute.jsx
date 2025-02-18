import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = sessionStorage.getItem("token"); // Verificamos si hay token
  const tokenUser = false;
  
  fetch('/api/token')
  .then(resultado => resultado.json())
  .then(datos => {
    if (datos.token === token){
      tokenUser = true;
    }
  })

  if(tokenUser){
    return <Outlet/>
  } else {
    return <Navigate to="/login" replace/>
  }
}
