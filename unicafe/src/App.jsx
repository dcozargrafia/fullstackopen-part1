import { useState } from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />

      {all === 0 ? 
        <p>No feedback given</p> 
        : (
        <Statistics good={good} neutral={neutral} bad={bad} />
        )}
    </div>
  )
};

export default App;