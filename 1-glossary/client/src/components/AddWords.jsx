import React from "react"
import { useState } from 'react'

const AddWords = ({ handleAddChange, addWord, handleDefinitionChange, addDefinition, onSubmit }) => {

  const [clicked, setClicked] = useState(false)

  const handleAddClick = () => {
    if (clicked) {
      onSubmit()
      return setClicked(false)
    }

    setClicked(true)
  }

  return (
    <div>
      {clicked &&
      <form onSubmit={onSubmit}>
        <input onChange={handleAddChange} value={addWord} placeholder='add a word here'/>
        <input onChange={handleDefinitionChange} value={addDefinition} placeholder='add its definition here'/>
      </form>}

      <button onClick={handleAddClick}>Add a word!</button>
    </div>
  )
}

export default AddWords