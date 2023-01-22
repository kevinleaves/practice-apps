import React from 'react'
import { useState } from 'react'

const ShippingInfo = ({  inputs, setInputs,formState, setFormState }) => {

  const [shippingInputs, setShippingInputs] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setShippingInputs({
      ...shippingInputs,
      [name]: value,
    })
  }

  const handleFormChange = () => {
  setFormState({
    ...formState,
    displayShippingInfo: false,
    displayBillingInfo: true,
  })
  setInputs({
    ...inputs,
    line1: shippingInputs.line1,
    line2: shippingInputs.line2,
    city: shippingInputs.city,
    state: shippingInputs.state,
    zipcode: shippingInputs.zipcode,
    phoneNumber: shippingInputs.phoneNumber
  })
}

  const handleBack = () => {
    setFormState({
      ...formState,
      displayShippingInfo: false,
      displayAccountInfo: true,
    })
  }

  return (
    <>
      <h2>ENTER SHIPPING INFO</h2>
      <form>
        {Object.entries(shippingInputs).map(([inputType, value], index) => {
          return <input key={index} placeholder={`enter your ${inputType} here`} name={inputType} value={value} onChange={handleChange}/>
        })}
      </form>
      <button onClick={handleBack}>BACK</button>
      <button onClick={handleFormChange}>NEXT</button>
    </>
  )
}

export default ShippingInfo