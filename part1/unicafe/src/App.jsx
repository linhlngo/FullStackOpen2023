import { useState } from 'react'



const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => <button onClick={onClick}> {text} </button>

const Display = ({text, score}) => <div>{text} {score}</div>


const StatisticLine = ({text,value, showPercentage}) => <div>{text} {value}  {showPercentage && '%'}</div>

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral == 0) 
  return <p>No feedback given</p>
  else 
  return (
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text="good" value={good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value={bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all" value={good + bad + neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average" value={(good - bad) / (good + bad + neutral)} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive" value={(good / (good + bad + neutral)) * 100} showPercentage={true} /></td>
        </tr>
      </tbody>
    </table>
  );
};


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  
  return (
    <div>
      <Header text = "give feedback" />
      <Button onClick={() => setGood(good+1)} text="good"></Button>
      <Button onClick={() => setNeutral(neutral+1)} text="neutral"></Button>
      <Button onClick={() => setBad(bad+1)} text="bad"></Button>
      <Header text = "statistics" />
      <Statistics good={good} bad={bad} neutral={neutral}/>


    </div>
  )
}

export default App