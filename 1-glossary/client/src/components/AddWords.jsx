import React from "react"
import { useState } from 'react'

const AddWords = ({ handleAddChange, addWord, handleDefinitionChange, addDefinition, onSubmit, setWord, setDefinition }) => {

  const [clicked, setClicked] = useState(false)

  const handleAddClick = () => {
    if (clicked) {
      onSubmit()
      return setClicked(false)
    }

    setClicked(true)
  }

  const resetFields = () => {
    setClicked(false)
    setWord('')
    setDefinition('')
  }

  return (
    <div>
      {clicked &&
      <form onSubmit={onSubmit}>
        <input onChange={handleAddChange} value={addWord} placeholder='add a word here'/>
        <input onChange={handleDefinitionChange} value={addDefinition} placeholder='add its definition here'/>
      </form>}

      <button onClick={handleAddClick}>{!clicked ? 'Add a word!' : 'Save!'}</button>

      {clicked && <button onClick={() => resetFields()}>discard changes</button>}
    </div>
  )
}

export default AddWords