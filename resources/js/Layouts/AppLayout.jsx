import AppAside from "@/Components/AppAside";
import AppFooter from "@/Components/AppFooter";
import AppNavBar from "@/Components/AppNavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout(){
    return(
        <>
            <AppNavBar />
            <AppAside />
            <Outlet />
            <AppFooter />
        </>
    )
}