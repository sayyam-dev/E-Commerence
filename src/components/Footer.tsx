import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaArrowRight, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='w-full bg-black flex flex-col justify-center items-center py-8 md:py-16'>
            <div className='w-full max-w-[1280px] flex flex-col md:flex-row gap-8 md:gap-[87px] p-4'>
                {/* Exclusive  */}
                <div className='w-full md:w-[217px] flex flex-col gap-4 p-2'>
                    <h1 className="font-poppins text-[24px] font-bold text-white">
                        Exclusive
                    </h1>
                    <h2 className="font-poppins text-[20px] font-bold text-white">
                        Subscribe
                    </h2>
                    <p className="font-poppins text-base text-white">
                        Get 10% off your first order
                    </p>
                    <div className="relative bg-black text-white rounded border-white border-2 px-4 py-2 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent outline-none w-full"
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Support */}
                <div className='w-full md:w-[200px] flex flex-col gap-4 p-2'>
                    <h1 className="font-poppins text-[24px] font-bold text-white">
                        Support
                    </h1>
                    <p className="font-poppins text-[16px] text-white">
                        111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
                    </p>
                    <p className="font-poppins text-[16px] text-white">
                        exclusive@gmail.com
                    </p>
                    <p className="font-poppins text-[16px] text-white">
                        +88015-88888-9999
                    </p>
                </div>

                {/* Account */}
                <div className='w-full md:w-[133px] flex flex-col gap-4 p-2'>
                    <h1 className="font-poppins text-[24px] font-bold text-white">
                        Account
                    </h1>
                    <p className="font-poppins text-base text-white">
                        Login / Register
                    </p>
                    <p className="font-poppins text-base text-white">
                        Cart
                    </p>
                    <p className="font-poppins text-base text-white">
                        Wishlist
                    </p>
                    <p className="font-poppins text-base text-white">
                        Shop
                    </p>
                </div>

                {/* Quick Link */}
                <div className='w-full md:w-[129px] flex flex-col gap-4 p-2'>
                    <h1 className="font-poppins text-[20px] font-bold text-white">
                        Quick Link
                    </h1>
                    <p className="font-poppins text-base text-white">
                        Privacy Policy
                    </p>
                    <p className="font-poppins text-base text-white">
                        Terms Of Use
                    </p>
                    <p className="font-poppins text-base text-white">
                        FAQ
                    </p>
                    <p className="font-poppins text-base text-white">
                        Contact
                    </p>
                </div>

                {/* Download */}
                <div className='w-full md:w-[300px] flex flex-col gap-4 p-2'>
                    <h1 className="font-poppins text-[20px] font-bold text-white">
                        Download App
                    </h1>
                    <p className="font-poppins text-base text-white">
                        Save $3 with App New User Only
                    </p>
                    <div className='flex gap-4'>
                        <Image src="/qrcode.jpeg" alt="qrcode" width={80} height={80} className="w-[80px] h-[80px]" />
                        <span className="flex flex-col gap-4">
                            <div className="relative w-[124px] h-[30px]">
                                <Image
                                    src="/playstore.png"
                                    alt="playstore"
                                    width={124}
                                    height={30}
                                />
                            </div>
                            <div className="relative w-[114px] h-[30px]">
                                <Image
                                    src="/appstore.png"
                                    alt="appstore"
                                    width={114}
                                    height={30}
                                />
                            </div>
                        </span>
                    </div>

                    <span className='w-[170px] h-[30px] px-3'>
                        <ul className='flex gap-4'>
                            <li><Link href="/"><FaFacebook className='text-white w-[24px] h-[24px]' /></Link></li>
                            <li><Link href="/"><FaTwitter className='text-white w-[24px] h-[24px]' /></Link></li>
                            <li><Link href="/"><FaInstagram className='text-white w-[24px] h-[24px]' /></Link></li>
                            <li><Link href="/"><FaLinkedin className='text-white w-[24px] h-[24px]' /></Link></li>
                        </ul>
                    </span>
                </div>
            </div>
            <p className='text-white text-center mt-8'>
                @Copyright Sayyam Shahid 2024. All right reserved
            </p>
        </div>
    )
}
