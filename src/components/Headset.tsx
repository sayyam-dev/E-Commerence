'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Headset() {
    // Set the initial countdown time (in seconds)
    const initialTime = 23 * 3600 + 5 * 86400 + 59 * 60 + 35; // 23 hours, 5 days, 59 minutes, 35 seconds

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        // Update the time every second
        const intervalId = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Calculate days, hours, minutes, and seconds from time
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <>
            <div className='w-full flex justify-center items-center mb-[80px] px-4'>
                {/* Time Section */}
                <div className="w-full max-w-[1300px] md:h-[500px] flex flex-col md:flex-row justify-center items-center bg-black py-[37px] px-[20px] md:px-[44px] gap-[27px]">
                    <div className="text w-full md:w-[500px] h-auto flex flex-col gap-8 py-10 px-5">
                        <h4 className="font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#00FF66]">
                            Categories
                        </h4>
                        <h1 className="font-inter text-[36px] md:text-[48px] font-semibold leading-[45px] md:leading-[60px] tracking-[0.04em] text-left text-[#FAFAFA]">
                            Enhance Your Music Experience
                        </h1>
                        <div className="time flex justify-start items-center gap-4 md:gap-6">
                            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] md:w-[62px] md:h-[62px] rounded-full bg-[#FFFFFF]'>
                                <b className="font-poppins text-[14px] md:text-[16px] font-semibold leading-[20px] text-left">{hours.toString().padStart(2, '0')}</b>
                                <b className="font-poppins text-[10px] md:text-[11px] font-normal leading-[18px] text-left">Hours</b>
                            </span>
                            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] md:w-[62px] md:h-[62px] rounded-full bg-[#FFFFFF]'>
                                <b className="font-poppins text-[14px] md:text-[16px] font-semibold leading-[20px] text-left">{days.toString().padStart(2, '0')}</b>
                                <b className="font-poppins text-[10px] md:text-[11px] font-normal leading-[18px] text-left">Days</b>
                            </span>
                            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] md:w-[62px] md:h-[62px] rounded-full bg-[#FFFFFF]'>
                                <b className="font-poppins text-[14px] md:text-[16px] font-semibold leading-[20px] text-left">{minutes.toString().padStart(2, '0')}</b>
                                <b className="font-poppins text-[10px] md:text-[11px] font-normal leading-[18px] text-left">Minutes</b>
                            </span>
                            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] md:w-[62px] md:h-[62px] rounded-full bg-[#FFFFFF]'>
                                <b className="font-poppins text-[14px] md:text-[16px] font-semibold leading-[20px] text-left">{seconds.toString().padStart(2, '0')}</b>
                                <b className="font-poppins text-[10px] md:text-[11px] font-normal leading-[18px] text-left">Seconds</b>
                            </span>
                        </div>

                        <div className="btn w-full max-w-[165px] bg-[#00FF66] h-[56px] flex justify-center items-center rounded py-4">
                            <p className='text-white'><Link href="/cart">Buy Now!</Link></p>
                        </div>
                    </div>

                    <div className="img w-full md:w-[700px] h-auto flex items-center justify-center relative">
                        <Image
                            src="/headset.png"
                            alt="headset"
                            height={420}
                            width={700}
                            className="w-auto h-auto object-contain"
                            style={{ transform: 'rotateY(195deg)' }}
                        />
                    </div>
                </div>
                {/* Time Section */}
            </div>
        </>
    )
}
