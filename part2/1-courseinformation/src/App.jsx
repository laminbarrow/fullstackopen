const Course = ({ course }) => {
  const parts = course.parts

  // destructuring parts to extract exercises
  const total = parts.reduce((acc, {exercises}) => {
    return acc + exercises
  }, 0)

  return (
    <>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total sum={total} />
    </>
  )
}

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {
  return(
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => parts.map((part) => <Part key={part.id} part={part} />)

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />;
}

export default App
