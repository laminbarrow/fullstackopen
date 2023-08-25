import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  // create a zero filled JavaScript array of arbitrary length 
  const [votes, setVotes] = useState(Array(8).fill(0))

  /**
   * Set Selected quote
   * to a random value
   */
  const handleNextAnecdote = () => {
    // Get random int between 0 and 7
    let randomInt = Math.floor(Math.random() * 8)
    // Set selected to a random int between 0 and 8
    setSelected(randomInt)
  }

  /**
   * handle vote to a new copy of the votes state
   */
  const handleSetVote = () => {
    // create copy of votes so we don't mutate the state directly
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }


  return (
    <div>
      <p>
        {anecdotes[selected]} has {votes[selected]} votes
      </p>
      
      <button onClick={handleSetVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
    </div>
  )
}

export default App