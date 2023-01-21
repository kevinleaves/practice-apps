import React from 'react'
import { useState } from 'react'

const BillingInfo = () => {

  const [billingInputs, setBillingInputs] = useState({
    creditcard:'',
    expdate:'',
    cvv:'',
    zip:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setBillingInputs({
      ...billingInputs,
      [name]: value,
    })
  }

  return (
    <>
      <form>
        {Object.entries(billingInputs).map(([inputType, value], index) => {
          return <input key={index} placeholder={`enter your ${inputType} here`} name={inputType} value={value} onChange={handleChange}/>
        })}
      </form>

    </>
  )

}


export default BillingInfo