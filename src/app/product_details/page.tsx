'use client'
import { useState } from 'react';
import Todays from '@/components/Todays';
import Image from 'next/image';
import ThisMonth from '@/components/ThisMonth';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState<string>('/phone4.png');
  const [quantity, setQuantity] = useState<number>(2); // Quantity state

  const images = [
    '/phone.jpeg',
    '/phone1.png',
    '/phone2.png',
    '/phone3.png',
  ];

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Function to handle the Buy Now button click
  const handleBuyNow = () => {
    console.log('Buy Now clicked!');
    // Add your buying logic here
  };

  // Function to handle the Add to Wishlist button click
  const handleAddToWishlist = () => {
    console.log('Added to Wishlist!');
    // Add your wishlist logic here
  };

  return (
    <div className="container mx-auto p-4 md:w-[1300px]">
      <div className="flex flex-col md:flex-row mb-10">
        {/* Left Side - Small Images */}
        <div className="flex flex-row md:flex-col md:w-1/4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer border p-1 mb-2 md:mb-4"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Center - Main Image */}
        <div className="md:w-1/2 p-4">
          <Image
            src={selectedImage}
            alt="Main Product"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="md:w-1/4 p-4">
          <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-gray-600">(150 Reviews)</span>
            <span className="ml-4 text-green-500">In Stock</span>
          </div>
          <p className="text-xl font-bold">$192.00</p>
          <p className="text-gray-600 mt-2">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
          </p>
          <div className="mt-4">
            <p className="font-semibold">Colours:</p>
            <div className="flex items-center">
              <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
              <button className="w-6 h-6 rounded-full bg-red-500"></button>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Size:</p>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border rounded">XS</button>
              <button className="px-4 py-2 border rounded">S</button>
              <button className="px-4 py-2 border rounded bg-red-500 text-white">M</button>
              <button className="px-4 py-2 border rounded">L</button>
              <button className="px-4 py-2 border rounded">XL</button>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center">
              <button className="px-4 py-2 border" onClick={decrementQuantity}>-</button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center border-t border-b"
                readOnly
              />
              <button className="px-4 py-2 border" onClick={incrementQuantity}>+</button>
            </div>
            <button
              className="px-6 py-2 bg-red-500 text-white rounded"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button className="px-4 py-2 border rounded" onClick={handleAddToWishlist}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-8 space-y-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9l7.5-7.5m0 0h7.5m-7.5 0V21M3.75 15h5.25a3 3 0 003-3V7.5a3 3 0 013-3h1.5"
                />
              </svg>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18v2.25A1.5 1.5 0 007.5 21.75h9A1.5 1.5 0 0018 20.25V18m0-6h3a2 2 0 012 2v5.25A1.5 1.5 0 0121 20.25H3A1.5 1.5 0 011.5 18.25V13a2 2 0 012-2h3V4.5a1.5 1.5 0 011.5-1.5h9A1.5 1.5 0 0118 4.5V12z"
                />
              </svg>
              <span>Return Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <ThisMonth />
    </div>
  );
};

export default ProductDetails;
