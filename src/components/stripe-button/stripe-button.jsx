import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful!')
  }

  // TODO: CHECK BITCOIN
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothin Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
