import React from "react"

const AddWords = ({ handleAddChange, addWord,handleDefinitionChange, addDefinition, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <input onChange={handleAddChange} value={addWord} placeholder='add a word here'/>
      <input onChange={handleDefinitionChange} value={addDefinition} placeholder='add its definition here'/>
      <button type='submit'>ADD TO GLOSSARY</button>
    </form>
  )
}

export default AddWords