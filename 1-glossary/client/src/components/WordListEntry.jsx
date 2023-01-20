import React from 'react'
import { useState } from 'react'

const WordListEntry = ({ word, deleteEntry, update }) => {

  const [clicked, setClicked] = useState(false);
  const [term, setTerm] = useState(word.term)
  const [definition, setDefinition] = useState(word.definition)

  const handleInputChange = (bool) => {
    if (bool) {
      setTerm(event.target.value)
    } else {
      setDefinition(event.target.value)
    }
  }

  const updateHandler = (word) => {
    if (clicked) {
      let updatedObj = {
        _id: word._id,
        term: term,
        definition: definition
      }
      update(updatedObj)
      return setClicked(false)
    }
    setClicked(true)
  }

  return (
    <li>
      {!clicked ?
      <div>
        <p>{word.term}</p>
        <p>{word.definition}</p>
      </div> :
      <div>
        <input onChange={() => handleInputChange(true)} value={term}/>
        <input onChange={() => handleInputChange(false)} value={definition}/>
      </div>}
      <button onClick={() => updateHandler(word)}>🫠</button>
      <button onClick={() => deleteEntry(word)}>🤢</button>
    </li>
  )
}

export default WordListEntry