import React from 'react'
import { useState } from 'react'

const AccountInfo = ({ formState, setFormState }) => {

  const [accountInputs, setAccountInputs] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value)
    setAccountInputs({
      ...accountInputs,
     [name]: value
    })
  }

  const handleFormChange = () => {
    setFormState({
      ...formState,
      displayAccountInfo: false,
      displayShippingInfo: true,
    })
  }

  return (
    <>
      {
      formState.displayAccountInfo &&
      <>
      <h2>CREATE ACCOUNT HERE</h2>
      <form>
        {Object.entries(accountInputs).map(([key, value], index) =>
          <input key={index} placeholder={`enter your ${key} here`} name={key} value={value} onChange={handleChange}/>
        )}
      </form>
      <button onClick={handleFormChange}>NEXT</button>
      </>
      }
    </>
  )
}


export default AccountInfo