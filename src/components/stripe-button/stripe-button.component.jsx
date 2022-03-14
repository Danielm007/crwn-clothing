import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HcvkkLzDMDl1QSPZlkQzbNQFFR6CtupILWu2taSq5UZhCafQbHLwCfGZnQBaSILSxLh1VrajErwSUaSQdJCyaU500TXaKwIA5";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"
    />
  );
};

export default StripeCheckoutButton;
