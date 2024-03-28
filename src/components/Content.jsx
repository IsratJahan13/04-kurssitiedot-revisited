 import Part from "./Part";

const Content = (props) => {
  const {parts} = props
  return(
    <section>
      {parts.map(part => (<Part key={part.id} part={part} />))}
    </section>
  )
}
export default Content; 