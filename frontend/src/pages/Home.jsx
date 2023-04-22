import { useEffect, useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts/');
            const json = await response.json();
            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[])

    return (
        <div className="flex gap-12 justify-between">
            <div className="min-w-[800px]">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}