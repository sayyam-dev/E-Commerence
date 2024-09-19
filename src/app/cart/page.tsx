'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1 },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2 },
  ]);

  const handleQuantityChange = (id:any, quantity:any) => {
    setItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id:any) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 w-[1330px]">
      <h1 className="text-2xl font-bold mb-[80px] mt-[100px]">Home / Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-center gap-[300px] items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold">Product</h2>
            <h2 className="text-xl font-semibold ml-24">Price</h2>
            <h2 className="text-xl font-semibold">Quantity</h2>
            <h2 className="text-xl font-semibold">Subtotal</h2>
          </div>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div className="flex items-center">
                {item.name === 'LCD Monitor' && (
                  <Image src="/laptop.png" alt="LCD Monitor" width={100} height={100} className="w-16 h-16 object-cover mr-4"  ></Image>  
                )}
                {item.name === 'H1 Gamepad' && (
                  <Image src="/gamepad.png" alt="Game Pad" width={100} height={100} className="w-16 h-16 object-cover mr-4"  ></Image>  
                )}
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-16 p-2 border rounded"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 ml-4"
                >
                  ✕
                </button>
              </div>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center p-4 border-t">
          <button className="bg-gray-200 px-4 py-2 rounded">Return To Shop</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Cart</button>
        </div>
      </div>
      <div className="flex justify-between items-start mt-8">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full p-4 border rounded mb-4"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
        </div>
        <div className="w-1/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total:</p>
            <p>${subtotal}</p>
          </div>
          <button className="bg-red-500 text-white w-full py-2 mt-4 rounded">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
