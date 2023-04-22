import { ImCross } from 'react-icons/im'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export default function WorkoutDetails({ workout }) {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async() => {
        const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }
    return (
        <div className="bg-white mb-8 py-4 px-12 rounded-lg flex justify-between items-center">
            <div>
                <h1 className="font-bold text-[24px] text-green-500">{workout.title}</h1>
                <p><span className="font-semibold">Weight (kg): </span>{workout.weight}</p>
                <p><span className="font-semibold">Reps: </span>{workout.reps}</p>
                <p>{workout.createdAt}</p>
            </div>
            <ImCross className="text-red-500 text-md cursor-pointer" onClick={handleClick}/>
        </div>
    )
}