'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Checkout = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650 },
    { id: 2, name: 'H1 Gamepad', price: 1100 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [couponCode, setCouponCode] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    console.log('Order placed');
  };

  return (
    <div className="container mx-auto p-4 w-[1330px] mt-[80px] mb-40">
      <h1 className="text-2xl font-bold mb-4">Billing Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">First Name*</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block font-medium">Company Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-medium">Street Address*</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block font-medium">Apartment, floor, etc. (optional)</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-medium">Town/City*</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block font-medium">Phone Number*</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block font-medium">Email Address*</label>
              <input type="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="font-medium">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>
        <div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {items.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <div className="flex items-center">
                  {item.name === 'LCD Monitor' && (

                    <Image src="/laptop.png" alt="H1 Gamepad" width={100} height={100}  className="w-10 h-10 object-cover mr-2" ></Image> 
                    
                    )} <br />
                  {item.name === 'H1 Gamepad' && (
              
              <Image src="/gamepad.png" alt="H1 Gamepad" width={100} height={100}  className="w-10 h-10 object-cover mr-2" ></Image> 
                    
                  )}
                  <p>{item.name}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))}
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <p>Total:</p>
              <p>${subtotal}</p>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Payment Method</label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="mr-2"
                />
                <label htmlFor="bank" className="mr-4">Bank</label>
                <Image src="/visa.png" width={100} height={100} alt="Payment Icons" className="w-20" ></Image>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                  className="mr-2"
                />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={e => setCouponCode(e.target.value)}
                className="w-full p-2 border rounded mr-2"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-red-500 text-white w-full py-2 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
