import { useState } from "react"

export default function WorkoutForm() {
    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const workout = {title, weight, reps}
        const response = await fetch('http://localhost:4000/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (response.ok) {
            setError(json.error)
        }
        if (response.ok){
            setTitle('')
            setWeight('')
            setReps('')
            setError(null)
            console.log('New workout added!')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-[24px] mb-4">Add a New Workout</h1>
            <label className="text-[16px]">Exercise Name:</label>
            <br/>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="my-2 p-1 min-w-[300px]"
            />
            <br/>

            <label className="text-[16px]">Weight (in kg):</label>
            <br/>
            <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="my-2 p-1 min-w-[300px]"
            />
            <br/>

            <label className="text-[16px]">Reps:</label>
            <br/>
            <input
                type="text"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="my-2 p-1 min-w-[300px]"
            />
            <br/>
            <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg">Add Workout</button>
            {error && <div>{error}</div>}
        </form>
    )
}