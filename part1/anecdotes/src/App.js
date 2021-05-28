import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.quote}</p>
      <p>has {props.votes} points</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'The best way to get a project done faster is to start sooner',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Program testing can be used to show the presence of bugs, but never to show their absence!',
    'Prolific programmers contribute to certain disaster.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState({ 
    0: 0, 
    1: 0, 
    2: 0, 
    3: 0, 
    4: 0, 
    5: 0 
  })

  const randomNum = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const voteHandleClick = () => {
    const newPoints = {...points}
    newPoints[selected] =  points[selected] + 1
    setPoints(newPoints)
  }

  const mostVoted = () => {
    let highestVotes = 0
    let mostPopular = points[0]
    for (let anecd in points) {
      if (points[anecd] > highestVotes) {
        highestVotes = points[anecd]
        mostPopular = anecd
      }
    }
    return mostPopular
  }

  return (
    <div>
      <Anecdote 
        title="Anecdote of the day" 
        quote={anecdotes[selected]} 
        votes={points[selected]}
      />
      <Button 
        handleClick={voteHandleClick} 
        text="vote" 
        selected={selected}
      />
      <Button 
        handleClick={() => setSelected(randomNum)} 
        text="next anecdote"/>
      <Anecdote 
        title="Anecdote with most votes" 
        quote={anecdotes[mostVoted()]} 
        votes={points[mostVoted()]} 
      />
    </div>
  );
}

export default App;
