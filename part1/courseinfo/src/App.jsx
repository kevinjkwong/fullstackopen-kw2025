const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part, exercise }) => {
  return <p>{part} {exercise}</p>
}

const Content = ({ exercises }) => {
  return <>
    <Part part={exercises.part1} exercise={exercises.exercise1}/>
    <Part part={exercises.part2} exercise={exercises.exercise2}/>
    <Part part={exercises.part3} exercise={exercises.exercise3}/>
  </>
}

const Total = ({ exerciseTotal }) => {
  return <p>Number of exercises {exerciseTotal}</p>
}

const App = () => {

  const course = 'Half Stack application development'
  const exercises = {
    part1: 'Fundamentals of React',
    exercise1: 10,
    part2: 'Using props to pass data',
    exercise2: 7,
    part3: 'State of a component',
    exercise3: 14
  }

  return <div>
    <Header course={course} />
    <Content exercises={exercises} />
    <Total exerciseTotal={exercises.exercise1 + exercises.exercise2 + exercises.exercise3} />
  </div>
}

export default App;