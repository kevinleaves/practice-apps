import React from 'react'
import { useState, useEffect } from 'react'
import AccountInfo from './AccountInfo.jsx'
import ShippingInfo from './ShippingInfo.jsx'
import BillingInfo from './BillingInfo.jsx'

const App = () => {


  return (
    <>
      <button>CHECKOUT</button>
      <AccountInfo/>
      <ShippingInfo/>
      <BillingInfo/>
    </>
  )
}

export default App