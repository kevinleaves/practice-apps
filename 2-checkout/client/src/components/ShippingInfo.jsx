import React from 'react'
import { useState } from 'react'

const ShippingInfo = ({ formState, setFormState }) => {

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
    displayBillingInfo: true
  })
}

  return (
    <>
      {formState.displayShippingInfo &&
      <>
        <form>
          {Object.entries(shippingInputs).map(([inputType, value], index) => {
            return <input key={index} placeholder={`enter your ${inputType} here`} name={inputType} value={value} onChange={handleChange}/>
          })}
        </form>
        <button onClick={handleFormChange}>NEXT</button>
      </>
      }
    </>
  )

}


export default ShippingInfo