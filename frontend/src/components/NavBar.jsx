import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <header className="bg-[#fff] flex justify-between">
            <div className="my-auto px-8 py-3 flex items-center font-bold text-[24px]">
                <Link to="/" className="text-[#333]">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
            <nav className="flex items-center mr-4">
                <div className="font-semibold">
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </header>
    )
}