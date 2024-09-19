'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaAngleRight, FaArrowRight, FaBars } from "react-icons/fa6";
import Image from 'next/image';

export default function HeroSection() {
    const [activeSlide, setActiveSlide] = useState(0); // Start from the first slide
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const slides = [
        {
            title: "iPhone 14 Series",
            discount: "Up to 10% off Voucher",
            imgSrc: "/phone.jpeg",
            logo: "/apple.png"
        },
        {
            title: "Samsung Galaxy S21",
            discount: "Save 15% on your order",
            imgSrc: "/phone4.png",
            logo: "/samsung.png"
        },
        {
            title: "Google Pixel 6",
            discount: "Up to 20% off on trade-in",
            imgSrc: "/phone3.png",
            logo: "/google.png"
        },
        {
            title: "OnePlus 9 Pro",
            discount: "Get an extra 5% off",
            imgSrc: "/phone2.png",
            logo: "/phone2.png"
        },
        {
            title: "Xiaomi Mi 11",
            discount: "Special offer on accessories",
            imgSrc: "/phone1.png",
            logo: "/phone1.png"
        },
    ];

    useEffect(() => {
        const interval = setTimeout(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change every 5 seconds

        return () => clearTimeout(interval); // Cleanup the interval on component unmount
    }, [activeSlide]);

    return (
        <>
            <div className='w-full md:w-[1518px] h-auto md:h-[390px] flex justify-center mb-[140px]'>

                {/* Row1 */}
                <div className="row1 w-full md:w-[1300px] h-auto md:h-[345px] flex flex-col md:flex-row justify-between items-center gap-16 mt-10">

                    {/* left_box */}
                    <div className="left_box w-full md:w-[210px] h-auto md:h-[345px] flex flex-col gap-4">
                        {/* Toggle Button for Small Screens */}
                        <div className="md:hidden flex justify-between items-center px-2 py-1 bg-gray-200 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className="font-poppins text-lg">Categories</span>
                            <FaBars />
                        </div>
                        {/* Menu for Small Screens */}
                        {(isMenuOpen || !isMenuOpen && !isMenuOpen) && (
                            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                                {['Woman’s Fashion', 'Men’s Fashion'].map((category) => (
                                    <h1 key={category} className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center ">
                                        <Link href="/" className=''> {category}</Link>
                                        <FaAngleRight />
                                        
                                    </h1>
                                ))}
                                {['Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby’s & Toys', 'Groceries & Pets', 'Health & Beauty'].map((category) => (
                                    <h1 key={category} className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center ">
                                        <Link href="/" className=''>{category}</Link>
                                    </h1>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* left_box */}

                    {/* Line */}
                    <span className='hidden md:block w-[1px] h-[384px] bg-black mt-[-40px] ml-[-60px]'></span>
                    {/* Line */}

                    {/* Right Box */}
                    <div className="right_box w-full md:w-[1015px] h-auto md:h-[345px] bg-black flex flex-col md:flex-row justify-center relative">
                        <div className="content w-full md:w-[450px] h-auto md:h-[345px] flex flex-col px-[24px] md:px-[64px] py-[20px] md:py-[55px] gap-[12px] mb-[47px]">
                            <span className='flex items-center gap-6'>
                                <Image src={slides[activeSlide].logo} alt='apple' width={40} height={40} className='bg-black' />
                                <h1 className="font-poppins text-lg font-normal leading-6 text-left text-white">
                                    {slides[activeSlide].title}
                                </h1>
                            </span>
                            <h1 className="font-inter text-3xl md:text-5xl font-semibold leading-[40px] md:leading-[60px] tracking-[0.04em] text-left text-white">
                                {slides[activeSlide].discount}
                            </h1>
                            <p className='flex items-center gap-3'>
                                <Link href="/" className='border-b-[1px] border-white text-white'>Shop Now</Link>
                                <FaArrowRight className='text-white' />
                            </p>
                        </div>
                        <div className="img w-full md:w-[615px] h-[200px] md:h-[345px] bg-black relative">
                            <Image src={slides[activeSlide].imgSrc} alt="mobile" layout='fill' className='absolute object-cover' />
                        </div>
                    </div>
                    {/* Right Box */}
                </div>

                {/* Circles for slide navigation */}
                <div className='star mt-[30px] md:mt-[350px] ml-16 md:ml-0 absolute flex justify-center w-full bottom-0 md:bottom-auto'>
                    <span className='flex justify-center items-center gap-2 md:gap-1 '>
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 md:w-4 h-3 md:h-4  rounded-full ${index === activeSlide ? 'bg-[#ff0a0a] border-[#939191]' : 'bg-[#FFFFFF]'}`}
                                onClick={() => setActiveSlide(index)}
                                style={{
                                    cursor: 'pointer',
                                }}
                            ></span>
                        ))}
                    </span>
                </div>

            </div>
        </>
    );
}
