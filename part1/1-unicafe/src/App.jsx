import { useState } from 'react'
import Button from './components/Button'
import Statistic from './components/Statistic'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  // the average for the 3 items is 3 / the total of all the items
  const average = 3 / all

  // only good is positive so the value should be (1 / all) * 100
  const positive = (good/all) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood((good) => good + 1)} text="good" />
      <Button handleClick={() => setNeutral((neutral) => neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad((bad) => bad + 1)} text="bad" />

      <h2>statistics</h2>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={all} />
      <Statistic text="positive" value={positive + ' %'} />
    </div>
  )
}

export default App