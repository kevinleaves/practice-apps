import React from 'react'

const SearchBar = ({ search, onChange }) => {

  return (
    <form>
      <input placeholder='search a word here!'
      type='text' onChange={onChange} value={search}/>
    </form>
  )
}

export default SearchBar