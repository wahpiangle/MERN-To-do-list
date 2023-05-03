import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
    const { workouts, dispatch } = useWorkoutsContext()
    const { state } = useAuthContext()
    const { user } = state

    useEffect(() => {
        const fetchWorkouts = async () => {
            // const response = await fetch('https://workout-buddy-api-smgt.onrender.com/api/workouts');
            const response = await fetch('http://localhost:4000/api/workouts',
                {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
            const json = await response.json();

            if (response.ok) {
                //to set the workouts in the context state
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }
        if (user) {
            fetchWorkouts();
        }

    }, [dispatch, user])

    return (
        <div className="flex gap-12 2xl:justify-between justify-center flex-wrap">
            <div className={`${workouts !== null ? `min-w-[600px] w-[70%]` : ""}`}>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}