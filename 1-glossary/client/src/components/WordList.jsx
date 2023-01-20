import React from 'react'
import WordListEntry from './WordListEntry.jsx'


const WordList = ({ words, deleteEntry, update }) => {

  return (
    <ul>
      {words.map((word, index) =>
        <WordListEntry word={word} key={index} deleteEntry={deleteEntry} update={update}/>
      )}
    </ul>
  )
}

export default WordList