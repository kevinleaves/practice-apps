import React from 'react'
import WordListEntry from './WordListEntry.jsx'


const WordList = ({ words }) => {

  return (
    <ul>
      {words.map((word, index) =>
        <WordListEntry word={word} key={index}/>
      )}
    </ul>
  )
}

export default WordList