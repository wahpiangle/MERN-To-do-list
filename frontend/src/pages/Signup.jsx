import { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, loading, error } = useSignup()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await signup(email, password)
    }

    return(
        <form onSubmit={handleSubmit} className="bg-white p-8 flex flex-col gap-2 w-[500px] mx-auto">
            <h3 className="my-2 font-bold text-[24px]">Sign Up</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="border-2" />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="border-2"/>
            <p className="text-gray-500 mt-2">Already have an account? <Link to="/login" className="underline text-blue-900">Login</Link></p>
            <button disabled={loading} className="bg-green-500 text-white py-2 px-4 mt-4 rounded-xl w-fit">Sign Up</button>
            {error && <div className="text-red-600 p-2 mt-2 bg-red-100 rounded-xl border-2 border-red-500">{error}</div>}
        </form>
    )
}