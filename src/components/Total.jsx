
const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return(
    <section>
      <p>total of {totalExercises} exercises</p>
    </section>
  )
}
export default Total;  