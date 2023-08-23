import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  // the average for the 3 items is 3 / the total of all the items
  const average = 3 / all;

  // only good is positive so the value should be (1 / all) * 100
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood((good) => good + 1)} text="good" />
      <Button
        handleClick={() => setNeutral((neutral) => neutral + 1)}
        text="neutral"
      />
      <Button handleClick={() => setBad((bad) => bad + 1)} text="bad" />

      <div>
        <h2>statistics</h2>
        {all ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            positive={positive}
          />
        ) : (
          "No feedback given"
        )}
      </div>
    </div>
  );
};

export default App;
