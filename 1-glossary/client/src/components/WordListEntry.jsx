import React from 'react'

const WordListEntry = ({ word, deleteEntry, update }) => {

  return (
    <li>
      <p>{word.term}</p>
      <p>{word.definition}</p>
      <button onClick={() => update(word)}>UPDATE</button>
      <button onClick={() => deleteEntry(word)}>DELETE</button>
    </li>
  )
}

export default WordListEntry