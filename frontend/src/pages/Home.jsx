import { useEffect, useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'

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
        <div>
            <div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}