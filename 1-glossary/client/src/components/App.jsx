import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddWords from './AddWords.jsx'

import WordList from './WordList.jsx'

const App = () => {

  const [words, setWords] = useState([]);
  // add input state
  const [addWord, setAddWord] = useState('');
  const [addDefinition, setAddDefinition] = useState('')

  const updateWords = () => {
    axios.get('/api/words')
      .then ((result) => {
        setWords(result.data)
      })
  }

  useEffect(() => {
    updateWords()
  },[])

  const handleAddChange = () => {
    setAddWord(event.target.value)
  }
  const handleDefinitionChange = () => {
    setAddDefinition(event.target.value)
  }
  const handleSubmit = () => {
    event.preventDefault()
    let word = {
      term: addWord,
      definition: addDefinition
    }
    axios.post('/api/words', word)
      .then(() => {
        updateWords()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdate = (entry) => {
    let updatedWord = prompt('edit the word')
    let updatedDefinition = prompt('edit the definition')

    let updatedEntry = {
      _id: entry._id,
      term: updatedWord,
      definition: updatedDefinition
    }

    axios.patch('/api/words', updatedEntry)
      .then(() => {
        updateWords()
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = (entry) => {
    console.log('delete')
    console.log(entry)
  }

  return (
    <>
     <h1>WE HAVE SOME STRUCTURE NOW</h1>
     <WordList words={words} deleteEntry={handleDelete} update={handleUpdate}/>
     <AddWords addWord={addWord} handleAddChange={handleAddChange}
     handleDefinitionChange={handleDefinitionChange} addDefinition={addDefinition} onSubmit={handleSubmit}
     />
    </>
  )
}


export default App