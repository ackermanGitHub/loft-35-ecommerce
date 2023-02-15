import CheckoutWizard from '@/components/CheckoutWizard';
import Layout from '@/containers/Layout';
import { Store } from '@/context/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const router = useRouter();

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Payment method is required');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );
    router.push('/placeorder');
  }

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
      return;
    }
    setSelectedPaymentMethod(paymentMethod || '');
  }, [shippingAddress.address, paymentMethod, router]);

  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />
      <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {['PayPal', 'Stripe', 'CheckoutWizard'].map((payment) => (
          <div key={payment} className="mb-4">
            <input
              type="radio"
              name="paymentMethod"
              className="p-2 outline-none focus:ring-0"
              id={payment}
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-5 flex justify-between">
          <button
            onClick={() => router.push('/shipping')}
            type="button"
            className="rounded bg-gray-100 py-2 px-4 shadow text-black outline-none hover:bg-gray-200 active:bg-gray-300"
          >
            Back
          </button>
          <button
            onClick={() => {
              //router.push('/shipping');
              console.log('/shipping');
            }}
            type="button"
            className="rounded bg-amber-300 py-2 px-4 shadow outline-none hover:bg-amber-400  active:bg-amber-500"
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Payment;
