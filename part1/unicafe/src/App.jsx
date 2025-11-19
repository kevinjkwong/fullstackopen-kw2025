import { useState } from 'react'

const App = () => {
  const [goodTotal, setGoodTotal] = useState(0)
  const [neutralTotal, setNeutralTotal] = useState(0)
  const [badTotal, setBadTotal] = useState(0)

  const handleGoodClick = () => setGoodTotal(prevGoodTotal => prevGoodTotal + 1)
  const handleNeutralClick = () => setNeutralTotal(prevNeutralTotal => prevNeutralTotal + 1)
  const handleBadClick = () => setBadTotal(preeBadTotal => preeBadTotal + 1)

  return <div>
    <h1>give feedback</h1>
    <button onClick={handleGoodClick}>good</button>
    <button onClick={handleNeutralClick}>neutral</button>
    <button onClick={handleBadClick}>bad</button>
    <h2>statistics</h2>
    <p>good {goodTotal}</p>
    <p>neutral {neutralTotal}</p>
    <p>bad {badTotal}</p>
  </div>
}

export default App;