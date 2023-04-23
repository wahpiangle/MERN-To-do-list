import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('https://workout-buddy-api-smgt.onrender.com/api/workouts');
            const json = await response.json();
            if (response.ok) {
                //to set the workouts in the context state
                dispatch({ type: 'SET_WORKOUTS', payload: json})
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