import React from 'react'
import { useState } from 'react'

const BillingInfo = ({ formState, setFormState }) => {

  const [billingInputs, setBillingInputs] = useState({
    creditcard:'',
    expdate:'',
    cvv:'',
    billingzip:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setBillingInputs({
      ...billingInputs,
      [name]: value,
    })
  }

  const handleFormChange = () => {
    setFormState({
      ...formState,
      displayBillingInfo: false,
      displayConfirmationInfo: true
    })
  }

  return (
    <>
    {formState.displayBillingInfo &&
      <>
        <form>
          {Object.entries(billingInputs).map(([inputType, value], index) => {
            return <input key={index} placeholder={`enter your ${inputType} here`} name={inputType} value={value} onChange={handleChange}/>
          })}
        </form>
        <button onClick={handleFormChange}>NEXT</button>
      </>
    }
    </>
  )
}


export default BillingInfo