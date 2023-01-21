import React from 'react'
import { useState, useEffect } from 'react'
import AccountInfo from './AccountInfo.jsx'
import ShippingInfo from './ShippingInfo.jsx'
import BillingInfo from './BillingInfo.jsx'

const App = () => {

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
        <button onClick={handleFormChange}>CHECKOUT</button>
      }
      <AccountInfo formState={formState} setFormState={setFormState}/>
      <ShippingInfo formState={formState} setFormState={setFormState}/>
      <BillingInfo formState={formState} setFormState={setFormState}/>
    </>
  )
}

export default App