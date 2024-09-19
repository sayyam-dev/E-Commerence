'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='w-full h-auto flex flex-col justify-center items-center'>
                <div className='w-full max-w-[1320px] h-auto flex justify-around items-center flex-col md:flex-row md:justify-between md:items-center px-4 sm:px-2'>
                    <span className='text-[24px] font-bold ml-[15px] mb-2 md:mb-0'>
                        Exclusive
                    </span>

                    {/* Toggle Button for Small Screens */}
                    <div className='md:hidden flex items-center'>
                        <button onClick={toggleMenu} className='text-[24px]'>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <ul className={`flex lg:flex-row md:flex-row gap-[24px] md:gap-[48px] md:ml-44 text-center md:text-left
                    ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/sign_up">Sign Up</Link></li>
                    </ul>

                    <div className='flex gap-[12px] md:gap-[36px] justify-center items-center mt-4 md:mt-0'>
                        <span className='flex bg-[#F5F5F5] px-2 py-2'>
                            <input type="search" placeholder='What are you looking for?' className='px-2 border-0 bg-[#F5F5F5]' />
                            <FaSearch className="ml-[8px] md:ml-[34px] h-[20px] md:h-[24px] w-[20px] md:w-[24px]" />
                        </span>

                        <FaHeart className="h-[20px] md:h-[24px] w-[20px] md:w-[24px]" />
                        <FaShoppingCart className="h-[20px] md:h-[24px] w-[20px] md:w-[24px]" />
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] border-[#000000] w-full max-w-[1518px] mx-auto'>
            </div>
        </>
    );
}
