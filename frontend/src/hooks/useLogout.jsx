import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    //destructure disptach as dispatchWorkout
    const { dispatch: dispatchWorkout } = useWorkoutsContext()

    const logout = () =>{
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        dispatchWorkout({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}