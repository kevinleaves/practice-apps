import React from 'react'
import axios from 'axios'

const Confirmation = ({ inputs, setInputs,formState, setFormState }) => {

  const body = {
    ...inputs,
    session_id: 11111
  }

  const handleSubmit = () => {
    event.preventDefault()

    axios.post('/api/checkout', body)
      .then(() => {
        setFormState({
          ...formState,
          displayCheckoutPage: true,
          displayConfirmationInfo: false
          })
      })
  }

  return (
    <>
      {Object.entries(inputs).map(([key, value]) => {
        return <p>{`${key}: ${value}`} </p>
      })}

      <form onSubmit={handleSubmit}>
        <button>COMPLETE YOUR PURCHASE</button>
      </form>
    </>
  )

}
export default Confirmation