import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

interface PaymentFormProps {
  totalPrice: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Inter", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }
    
    setProcessing(true);
    
    // In a real application, you would confirm the payment intent here
    // For demo purposes, we'll simulate a successful payment after a delay
    setTimeout(() => {
      setProcessing(false);
      setSucceeded(true);
      
      // Redirect to confirmation page after successful payment
      setTimeout(() => {
        router.push('/booking-confirmation');
      }, 2000);
    }, 2000);
    
    // Example of how you would confirm a real payment:
    /*
    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      setError('Card element not found');
      setProcessing(false);
      return;
    }
    
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name',
        },
      },
    });
    
    if (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSucceeded(true);
      setProcessing(false);
      
      // Redirect to confirmation page
      router.push('/booking-confirmation');
    }
    */
  };
  
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-beige-light p-6 rounded-lg mb-6">
        <h3 className="font-bold text-xl mb-4">Payment Summary</h3>
        <div className="flex justify-between font-bold">
          <span>Total Amount:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-medium">Card Details</label>
          <div className="border border-gray-300 rounded p-4">
            <CardElement options={cardStyle} />
          </div>
          {error && (
            <div className="text-red-500 mt-2">{error}</div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={processing || !stripe || succeeded}
          className={`btn w-full ${(processing || !stripe || succeeded) ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {processing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : succeeded ? (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Payment Successful
            </span>
          ) : (
            `Pay $${totalPrice}`
          )}
        </button>
        
        {succeeded && (
          <div className="text-green-600 text-center mt-4">
            Payment successful! Redirecting to confirmation page...
          </div>
        )}
      </form>
      
      <div className="mt-6 text-sm text-gray-600">
        <p>This is a test payment integration. No actual charges will be made.</p>
        <p className="mt-2">For testing, you can use the following card details:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Card number: 4242 4242 4242 4242</li>
          <li>Expiry: Any future date</li>
          <li>CVC: Any 3 digits</li>
          <li>ZIP: Any 5 digits</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentForm;
