import React from 'react'
import axios from 'axios'

const Confirmation = ({ inputs, setInputs,formState, setFormState }) => {

  const handleSubmit = () => {
    event.preventDefault()

    let body = {
      ...inputs,
      session_id: 11111
    }

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
      <form onSubmit={handleSubmit}>
        <button>COMPLETE</button>
      </form>
    </>
  )

}
export default Confirmation