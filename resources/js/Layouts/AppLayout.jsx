import AppFooter from "@/Components/AppFooter";
import AppNavBar from "@/Components/AppNavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout(){
    return(
        <>
            <AppNavBar />
            <Outlet />
            <AppFooter />
        </>
    )
}