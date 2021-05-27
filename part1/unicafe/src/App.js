import React, { useState } from 'react'


const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, total } = props;
  if (total !== 0) {
    return (
      <table>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="total" value={total}/>
      <Statistic text="average" value={(good-bad)/total}/>
      <Statistic text="positive" value={good*100/total + "%"}/>
    </table>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  )
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + bad + neutral

  return (
    <div>
      <div>
      <h2>give feedback</h2>
        <Button handleClick={() => setGood(good + 1)} text="good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )



  
}

export default App;
