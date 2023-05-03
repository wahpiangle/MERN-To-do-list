import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

export default function WorkoutForm() {
    const { dispatch } = useWorkoutsContext()

    const {state} = useAuthContext()
    const { user } = state

    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const workout = {title, weight, reps}

        if(!user){
            setError('You must be logged in.');
            return
        }

        // const response = await fetch('https://workout-buddy-api-smgt.onrender.com/api/workouts', {
        const response = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok){
            setTitle('')
            setWeight('')
            setReps('')
            setError(null)
            setEmptyFields([])
            dispatch({ type: 'CREATE_WORKOUT', payload: json.workout})
        }
    }

    return(
        <form onSubmit={handleSubmit} className="mx-auto">
            <h1 className="font-bold text-[24px] mb-4">Add a New Workout</h1>
            <label className="text-[16px]">Exercise Name:</label>
            <br/>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`my-2 p-1 min-w-[300px] ${emptyFields.includes('title') ? 'border-red-500' : ''}`}
            />
            <br/>

            <label className="text-[16px]">Weight (in kg):</label>
            <br/>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={`my-2 p-1 min-w-[300px] ${emptyFields.includes('title') ? 'border-red-500' : ''}`}
            />
            <br/>

            <label className="text-[16px]">Reps:</label>
            <br/>
            <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className={`my-2 p-1 min-w-[300px] ${emptyFields.includes('title') ? 'border-red-500' : ''}`}
            />
            <br/>
            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg">Add Workout</button>
            {error && <div className="bg-red-200 border-red-400 border-2 mt-4 rouned-lg px-4 py-2">{error}</div>}
        </form>
    )
}