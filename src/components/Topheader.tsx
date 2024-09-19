import React from 'react';
import Link from 'next/link';
import LanguageDropdown from './LanguageDropdown';

export default function Topheader() {
    return (
        <div className='w-full bg-black flex justify-center items-center px-4'>
            <div className="w-full max-w-[1222px] flex flex-col md:flex-row justify-between items-center text-white text-xs md:text-sm py-2">
                <p className='text-center md:text-left'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <button className='border-b-2 ml-2'>
                        <Link href="/">Shop Now</Link>
                    </button>
                </p>
                <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0'>
                    <LanguageDropdown />
                </div>
            </div>
        </div>
    );
}
