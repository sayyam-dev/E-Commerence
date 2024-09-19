'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaAngleRight, FaHeart, FaStar,  } from 'react-icons/fa';
import { LuEye } from "react-icons/lu";
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';

async function fetchProducts() {
    const response = await fetch('https://e-commerce-apis-task3.vercel.app/product/all');
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

const ThisMonth: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(data => {
            setProducts(data.products);
        }).catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    return (
        <div className='w-full flex flex-col items-center mb-20 bg--400'>
            {/* Time Section */}
            <div className="w-full max-w-[1300px] flex justify-between items-center mb-10 px-4 md:px-0">
                <div className="flex flex-col gap-4">
                    <div className='flex gap-4 items-center'>
                        <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
                        <h1 className="font-poppins text-lg font-semibold text-[#DB4444]">This Month</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className="font-inter text-3xl md:text-4xl font-semibold tracking-wide mt-4">Best Selling Products</h1>
                    </div>
                </div>
                <div className="mt-8">
                    <span className='w-[160px] h-[56px] rounded bg-[#DB4444] flex justify-center items-center text-white cursor-pointer'>View All</span>
                </div>
            </div>
            {/* Time Section */}

            {/* Pics Section */}
            <div className="w-full max-w-[1300px] flex flex-wrap justify-between items-center gap-8 px-4 md:px-0">
                {products.map((product:any) => (
                    <div key={product._id} className="w-full sm:w-[48%] md:w-[31%] lg:w-[22%] flex flex-col items-center">
                        <div className="w-full h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col">
                            <div className="flex justify-between px-2 mt-3 items-center">
                                <span className="w-[55px] h-[26px] bg-[#DB4444] rounded flex justify-center items-center text-white">-40%</span>
                                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                            </div>
                            <div className='flex justify-center items-center mt-[-20px] relative'>
                               <Link href={"/product_details"}> <Image src={product.picture || "/keybord.png"} alt={product.name} width={178} height={130} className='' /></Link>
                                <span className='w-[34px] h-[34px] absolute right-2 top-2 rounded-full bg-white flex justify-center items-center'><LuEye /></span>
                            </div>
                            <div className="w-full h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2 cursor-pointer">
                                <FaCartShopping /> <Link href={`/cart`}>Add To Cart</Link>
                            </div>
                        </div>
                        <div className="w-full mt-4 flex flex-col items-center text-center">
                            <h1 className="font-poppins text-[16px] font-medium">{product.name}</h1>
                            <div className='flex items-center gap-3 mt-1'>
                                <h1 className='text-[#DB4444]'>${product.price}</h1>
                                <h1 className="line-through">$160</h1>
                            </div>
                            <div className='flex items-center gap-2 mt-1'>
                                <span className='flex'>
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} className='w-[20px] h-[20px] text-[#FFAD33]' />
                                    ))}
                                </span>
                                <span>(65)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThisMonth;
