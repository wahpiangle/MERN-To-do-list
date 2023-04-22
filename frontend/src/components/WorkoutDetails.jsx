
export default function WorkoutDetails({ workout}) {
    return (
        <div className="bg-white mb-8 p-4 rounded-lg">
            <h1 className="font-bold text-[24px] text-green-500">{workout.title}</h1>
            <p><span className="font-semibold">Weight (kg): </span>{workout.weight}</p>
            <p><span className="font-semibold">Reps: </span>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}