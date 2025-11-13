const Hello = (props) => {
  return <div>
    <p>Hello {props.name}, you are {props.age} years old</p>
  </div>
}

const App = () => {
  const names = ['Peter', 'Noah']

  return <div>
    <h1>Greetings!</h1>
    <p>{names}</p>
  </div>
}

export default App;