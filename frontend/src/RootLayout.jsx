import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <NavBar/>
            <main className="bg-[#f1f1f1] p-8">
                <Outlet />
            </main>
        </div>
    )
}