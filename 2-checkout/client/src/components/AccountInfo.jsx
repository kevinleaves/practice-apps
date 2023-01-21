import React from 'react'
import { useState } from 'react'

const AccountInfo = () => {

  const [accountInputs, setAccountInputs] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
     [name]: value
    })
  }

  return (
    <>
    <h2>CREATE ACCOUNT HERE</h2>
      <form>
        {Object.entries(accountInputs).map(([key, value], index) =>
          <input key={index} placeholder={`enter your ${key} here`} name={key} value={value} onChange={handleChange}/>
        )}
      </form>
      <button>NEXT</button>
    </>
  )
}


export default AccountInfo