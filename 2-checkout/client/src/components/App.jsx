import React from 'react'
import { useState, useEffect } from 'react'
import AccountInfo from './AccountInfo.jsx'
import ShippingInfo from './ShippingInfo.jsx'
import BillingInfo from './BillingInfo.jsx'
import Confirmation from './Confirmation.jsx'

const App = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
    creditcard:'',
    expdate:'',
    cvv:'',
    billingzip:''
  })

  console.log(inputs, 'inputs')
  const [formState, setFormState] = useState({
    displayCheckoutPage: true,
    displayAccountInfo: false,
    displayShippingInfo: false,
    displayBillingInfo: false,
    displayConfirmationInfo: false,
  })

  const handleFormChange = () => {
    setFormState({
      ...formState,
      displayCheckoutPage: false,
      displayAccountInfo: true,
    })
  }

  return (
    <>
      {formState.displayCheckoutPage &&
        <button onClick={handleFormChange}>CHECKOUT</button>}

      {formState.displayAccountInfo &&
        <AccountInfo inputs={inputs} setInputs={setInputs} formState={formState} setFormState={setFormState}/>}

      {formState.displayShippingInfo &&
      <ShippingInfo inputs={inputs} setInputs={setInputs} formState={formState} setFormState={setFormState}/>}

      {formState.displayBillingInfo &&
      <BillingInfo inputs={inputs} setInputs={setInputs} formState={formState} setFormState={setFormState}/>}

      {formState.displayConfirmationInfo &&
      <Confirmation inputs={inputs} setInputs={setInputs} formState={formState} setFormState={setFormState}/>}
    </>
  )
}

export default App