import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <header className="bg-[#fff]">
            <div className="my-auto px-8 py-3 flex items-center font-bold text-[24px]">
                <Link to="/" className="text-[#333]">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}