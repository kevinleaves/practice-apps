import React from 'react'

const WordListEntry = ({ word }) => {

  return (
    <li>
      <p>{word.term}</p>
      <p>{word.definition}</p>
    </li>
  )
}

export default WordListEntry