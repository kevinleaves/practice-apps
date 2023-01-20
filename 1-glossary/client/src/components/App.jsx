import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddWords from './AddWords.jsx'
import SearchBar from './SearchBar.jsx'

import WordList from './WordList.jsx'

const App = () => {

  const [words, setWords] = useState([]);
  // add input state
  const [addWord, setAddWord] = useState('');
  const [addDefinition, setAddDefinition] = useState('')

  const [search, setSearch] = useState('')

  const updateWords = () => {
    axios.get('/api/words')
      .then ((result) => {
        setWords(result.data)
      })
  }

  useEffect(() => {
    updateWords()
  },[])

  const handleSearchChange = () => {
    setSearch(event.target.value)
  }

  const searched = !search ? words : words.filter((word) => word.term.toLowerCase().includes(search.toLowerCase()))

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
    setAddWord('')
    setAddDefinition('')
    axios.post('/api/words', word)
      .then(() => {
        updateWords()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUpdateSubmit = (updated) => {
    // let updatedWord = prompt('edit the word')
    // let updatedDefinition = prompt('edit the definition')

    let updatedEntry = {
      _id: updated._id,
      term: updated.term,
      definition: updated.definition
    }

    axios.patch('/api/words', updatedEntry)
      .then(() => {
        updateWords()
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = (entry) => {
    axios.delete('/api/words', {
      data: {
        _id: entry._id
      }
    })
      .then(() => {
        updateWords()
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
     <h1>Glossary</h1>
     <AddWords addWord={addWord}
     handleAddChange={handleAddChange}
     handleDefinitionChange={handleDefinitionChange} addDefinition={addDefinition} onSubmit={handleSubmit}/>
     <SearchBar search={search}
     onChange={handleSearchChange}/>
     <WordList words={searched} deleteEntry={handleDelete} update={handleUpdateSubmit}/>
    </>
  )
}

export default App