'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaHeart, FaStar } from 'react-icons/fa';
import { LuEye } from 'react-icons/lu';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';

// Function to fetch products from API
async function fetchProducts() {
    const response = await fetch('https://e-commerce-apis-task3.vercel.app/product/all');
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

export default function OurProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products when the component mounts
        fetchProducts()
            .then(data => {
                setProducts(data.products); // Assuming the data structure has a `products` field
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className='w-full max-w-screen -xl mx-auto px-4 py-8 md:w-[1300px]'>
            {/* Time Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <div className="flex-1 flex flex-col gap-4">
                    <div className='flex items-center gap-4'>
                        <span className='w-5 h-5 rounded bg-[#DB4444]'></span>
                        <h1 className="text-lg font-semibold text-[#DB4444]">Our Products</h1>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold leading-[48px] tracking-wide text-left">
                        Explore Our Products
                    </h1>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <span className='w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center'>
                        <FaArrowLeft className='w-6 h-6' />
                    </span>
                    <span className='w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center'>
                        <FaArrowRight className='w-6 h-6' />
                    </span>
                </div>
            </div>
            {/* Time Section */}

            {/* Pics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {products.map((product) => (
                    <div key={product._id} className="bg-[#F5F5F5] rounded-md overflow-hidden flex flex-col">
                        <div className="relative flex items-center justify-center h-56">
                            <Image src={product.picture || '/dogfood.jpeg'} alt={product.name} layout='fill' objectFit='contain' />
                            <span className='absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center'>
                                <LuEye />
                            </span>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <h1 className="text-lg font-medium">{product.name}</h1>
                            <div className="flex items-center gap-2">
                                <span className='text-[#DB4444] text-lg font-semibold'>${product.price}</span>
                                <div className='flex items-center'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`w-5 h-5 ${i < product.rating ? 'text-[#FFAD33]' : 'text-[#989696]'}`} />
                                    ))}
                                    <span className='ml-2'>({product.rating * 10})</span>
                                </div>
                            </div>
                            <button className="mt-2 bg-black text-white py-2 rounded-md flex items-center justify-center gap-2">
                                <FaCartShopping />
                                <Link href={"/cart"}>Add To Cart</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pics */}

            {/* Btn */}
            <div className='flex justify-center mb-8'>
                <button className="bg-[#DB4444] text-white py-2 px-6 rounded-md">
                    <h1 className="text-lg font-medium">
                        <Link href={'/wishlist'}>View All Products</Link>
                    </h1>
                </button>
            </div>
            {/* Btn */}
        </div>
    );
}
