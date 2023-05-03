import { ImCross } from 'react-icons/im'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'

export default function WorkoutDetails({ workout }) {
    const { dispatch } = useWorkoutsContext()

    const {state} = useAuthContext()
    const { user } = state

    const handleClick = async() => {
        if(!user){
            return
        }

        // const response = await fetch(`https://workout-buddy-api-smgt.onrender.com/api/workouts/${workout._id}`, {
        //     method: 'DELETE',
        //     headers:{
        //         'Authorization': `Bearer ${user.token}`
        //     }
        // })

        const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }
    return (
        <div className="bg-white mb-8 py-4 px-10 mx-auto rounded-lg flex justify-between items-center">
            <div>
                <h1 className="font-bold text-[24px] text-green-500">{workout.title}</h1>
                <p><span className="font-semibold">Weight (kg): </span>{workout.weight}</p>
                <p><span className="font-semibold">Reps: </span>{workout.reps}</p>
                <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix:true })}</p>
            </div>
            <ImCross className="text-red-500 text-md cursor-pointer" onClick={handleClick}/>
        </div>
    )
}