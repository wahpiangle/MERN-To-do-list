import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(email,password)
    }

    return(
        <form onSubmit={handleSubmit} className="bg-white p-8 flex flex-col gap-2 w-[500px] mx-auto">
            <h3 className="my-2 font-bold text-[24px]">Login</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="border-2" />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="border-2"/>
            <p className="text-gray-500 mt-2">Don't have an account? <Link to="/signup" className="underline text-blue-900">Sign Up Now!</Link></p>
            <button className="bg-green-500 text-white py-2 px-4 mt-2 rounded-xl w-fit">Login</button>
        </form>
    )
}