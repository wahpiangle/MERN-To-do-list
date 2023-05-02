import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, loading } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await login(email, password)
        navigate('/')
    }

    return(
        <form onSubmit={handleSubmit} className="bg-white p-8 flex flex-col gap-2 w-[500px] mx-auto">
            <h3 className="my-2 font-bold text-[24px]">Login</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="border-2 p-2" />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="border-2 p-2"/>
            <p className="text-gray-500 mt-2">Don't have an account? <Link to="/signup" className="underline text-blue-900">Sign Up Now!</Link></p>
            <button disabled={loading} className="bg-green-500 text-white py-2 px-4 mt-2 rounded-xl w-fit" onClick={handleSubmit}>Login</button>
            {error && <div className="text-red-600 p-2 mt-2 bg-red-100 rounded-xl border-2 border-red-500">{error}</div>}
        </form>
    )
}