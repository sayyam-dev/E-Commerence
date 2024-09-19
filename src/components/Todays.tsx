'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaHeart, FaStar, FaCartShopping } from 'react-icons/fa6';
import { LuEye } from "react-icons/lu";
import Image from 'next/image';

// Fetch products from API
async function fetchProducts() {
    const response = await fetch('https://e-commerce-apis-task3.vercel.app/product/all');
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

// Add product to cart
async function addToCart(productId) {
    const token = localStorage.getItem('authToken'); 
    if (!token) {
        throw new Error('No authentication token found');
    }

    const response = await fetch(`https://e-commerce-apis-task3.vercel.app/carts/add/${productId}`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}` // Include token in headers
        },
        body: JSON.stringify({ productId }) 
    });

    if (!response.ok) throw new Error('Failed to add product to cart');
    return response.json();
}

export default function Todays() {
    // Calculate time left for the sale
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-09-05') - +new Date(); // Replace with your actual end date
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [products, setProducts] = useState([]);
    const [cartMessage, setCartMessage] = useState('');
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        fetchProducts().then(data => {
            setProducts(data.products);
        }).catch(error => {
            console.error('Error fetching products:', error);
        });

        return () => clearInterval(timer);
    }, []);

    // Handle adding product to cart
    const handleAddToCart = async (productId) => {
        try {
            await addToCart(productId);
            setCartMessage('Product added to cart successfully!');
            router.push('/cart'); // Redirect to the cart page
        } catch (error) {
            setCartMessage('Failed to add product to cart.');
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <>
            <div className='w-full max-w-[1518px] h-auto flex flex-col items-center mb-20 px-4'>
                {/* Time Section */}
                <div className="row1 w-full max-w-[1300px] h-auto flex justify-between items-center mb-10 flex-col md:flex-row">
                    <div className="left w-full md:w-[600px] h-auto flex flex-col gap-4">
                        <div className='flex justify-between gap-4 items-center md:w-[1300px] md:mb-5'>
                            <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
                            <h1 className="font-poppins text-lg font-semibold text-[#DB4444]">Today’s</h1>
                        </div>
                        <div className='flex justify-between gap-4 items-center'>
                            <h1 className="font-inter text-2xl md:text-3xl font-semibold leading-tight mt-4">
                                Flash Sales
                            </h1>
                            <div>
                                <div className="flex space-x-4 justify-center items-center">
                                    <div className="text-center">
                                        <span className="block text-xs md:text-sm font-medium">Days</span>
                                        <span className="text-lg md:text-3xl font-semibold">{timeLeft.days}</span>
                                    </div>
                                    <span className="text-red-400 text-lg md:text-3xl">:</span>
                                    <div className="text-center">
                                        <span className="block text-xs md:text-sm font-medium">Hours</span>
                                        <span className="text-lg md:text-3xl font-semibold">{timeLeft.hours}</span>
                                    </div>
                                    <span className="text-red-400 text-lg md:text-3xl">:</span>
                                    <div className="text-center">
                                        <span className="block text-xs md:text-sm font-medium">Minutes</span>
                                        <span className="text-lg md:text-3xl font-semibold">{timeLeft.minutes}</span>
                                    </div>
                                    <span className="text-red-400 text-lg md:text-3xl">:</span>
                                    <div className="text-center">
                                        <span className="block text-xs md:text-sm font-medium">Seconds</span>
                                        <span className="text-lg md:text-3xl font-semibold">{timeLeft.seconds}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right flex gap-2 mt-4 md:mt-0">
                        <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'>
                            <FaArrowLeft className='w-6 h-6' />
                        </span>
                        <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'>
                            <FaArrowRight className='w-6 h-6' />
                        </span>
                    </div>
                </div>
                {/* Time Section */}

                {/* Pics */}
                <div className="row2 w-full max-w-[1300px] h-auto flex justify-between items-center mb-14 flex-wrap gap-6">
                    {products.map(product => (
                        <div key={product._id} className="bag w-full sm:w-[280px] h-auto flex flex-col items-center">
                            <div className="cart w-full h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col">
                                <div className="btns flex justify-between px-2 mt-3 items-center">
                                    <span className="w-[55px] h-[26px] bg-[#DB4444] rounded text-white flex justify-center items-center">
                                        -40%
                                    </span>
                                    <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'>
                                        <FaHeart />
                                    </span>
                                </div>
                                <div className='flex justify-center items-center mt-[-20px] relative'>
                                    <Link href={`/product_details/${product._id}`}> 
                                        <Image src={product.picture || "/gamepad.png"} alt={product.name} width={178} height={130} />
                                    </Link>
                                    <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'>
                                        <LuEye />
                                    </span>
                                </div>
                                <div className="add_cart w-full h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2 cursor-pointer" onClick={() => handleAddToCart(product._id)}>
                                    <FaCartShopping />
                                    Add To Cart
                                </div>
                            </div>
                            <div className="price w-full h-auto mt-[16px] flex flex-col justify-between items-start">
                                <h1 className="font-poppins text-16px font-medium">
                                    {product.name}
                                </h1>
                                <span className='flex justify-left items-center gap-3'>
                                    <h1 className='text-[#DB4444] text-sm md:text-lg'>${product.price}</h1>
                                    <h1 className="line-through text-xs md:text-sm">${product.originalPrice}</h1>
                                </span>
                                <span className='flex justify-left items-center gap-2'>
                                    <span className='flex'>
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar key={index} className='text-[#FFAD33]' />
                                        ))}
                                    </span>
                                    (65)
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Message */}
                {cartMessage && <div className="w-full max-w-[1300px] text-center text-green-500 font-semibold">{cartMessage}</div>}
            </div>
        </>
    );
}
