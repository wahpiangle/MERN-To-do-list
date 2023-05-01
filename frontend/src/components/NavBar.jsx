import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

export default function NavBar() {

    const { logout } = useLogout()

    const handleLogout = () =>{
        logout()
    }

    return(
        <header className="bg-[#fff] flex justify-between">
            <div className="my-auto px-8 py-3 flex items-center font-bold text-[24px]">
                <Link to="/" className="text-[#333]">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
            <nav className="flex items-center mr-4 gap-4">
                <div>
                    <button className="text-green-500 border-2 border-green-500 bg-white p-2 font-semibold" onClick={handleLogout}>Logout</button>
                </div>
                <div className="font-semibold">
                    <Link to="/login" className="mr-4">Login</Link>
                </div>
            </nav>
        </header>
    )
}