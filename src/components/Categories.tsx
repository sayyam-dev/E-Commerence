import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuCamera, LuGamepad } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";

export default function Categories() {
    return (
        <>
            <div className='w-full max-w-[1518px] h-auto flex flex-col items-center mb-20 px-4'>
                {/* Time Section */}
                <div className="row1 w-full max-w-[1300px] h-auto flex justify-between items-center mb-10 flex-col md:flex-row">
                    <div className="left w-full md:w-[600px] h-auto flex flex-col gap-10">
                        <div className='flex justify-between items-center md:w-[1300px] md:mb-5'>
                            <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
                            <h1 className="font-poppins text-lg font-semibold text-[#DB4444] ml-44">Categories</h1>
                        </div>
                        <div className='flex justify-between gap-4 items-center'>
                            <h1 className="font-inter text-2xl md:text-3xl font-semibold leading-tight mt-4">
                                Browse By Category
                            </h1>
                        </div>
                    </div>

                    <div className="right flex gap-2 mt-4 md:mt-0">
                        <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'><FaArrowLeft className='w-6 h-6' /></span>
                        <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'><FaArrowRight className='w-6 h-6' /></span>
                    </div>
                </div>
                {/* Time Section */}

                {/* Pics */}
                <div className="row2 w-full max-w-[1300px] h-auto flex justify-center items-center mb-14 flex-wrap gap-14">
                    <span className='w-[70%] sm:w-[48%] md:w-[170px] h-[160px] sm:h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'>
                        <IoIosPhonePortrait className='w-16 h-16 sm:w-14 sm:h-14' />
                        <h1 className="font-poppins text-lg font-normal leading-6 text-center">
                            Phones
                        </h1>
                    </span>
                    <span className='w-[70%] sm:w-[48%] md:w-[170px] h-[160px] sm:h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'>
                        <HiOutlineComputerDesktop className='w-16 h-16 sm:w-14 sm:h-14' />
                        <h1 className="font-poppins text-lg font-normal leading-6 text-center">
                            Computers
                        </h1>
                    </span>
                    <span className='w-[70%] sm:w-[48%] md:w-[170px] h-[160px] sm:h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'>
                        <TbDeviceWatchStats className='w-16 h-16 sm:w-14 sm:h-14' />
                        <h1 className="font-poppins text-lg font-normal leading-6 text-center">
                            SmartWatch
                        </h1>
                    </span>
                    <span className='w-[70%] sm:w-[48%] md:w-[170px] h-[160px] sm:h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center bg-[#DB4444] text-white'>
                        <LuCamera className='w-16 h-16 sm:w-14 sm:h-14' />
                        <h1 className="font-poppins text-lg font-normal leading-6 text-center">
                            Camera
                        </h1>
                    </span>
                    <span className='w-[70%] sm:w-[48%] md:w-[170px] h-[160px] sm:h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'>
                        <FiHeadphones className='w-16 h-16 sm:w-14 sm:h-14' />
                        <h1 className="font-poppins text-lg font-normal leading-6 text-center">
                            Headphones
                        </h1>
                    </span>
                    <span className='w-[70%] sm:w-[48%] md:w-[170px] h-[160px] sm:h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center hover:bg-[#DB4444] hover:text-white transition duration-300'>
                        <LuGamepad className='w-16 h-16 sm:w-14 sm:h-14' />
                        <h1 className="font-poppins text-lg font-normal leading-6 text-center">
                            Gaming
                        </h1>
                    </span>
                </div>
                {/* Pics */}

                {/* Line */}
                <div className="w-full max-w-[1330px] h-0.5 border-t border-black opacity-30 rotate-180"></div>
                {/* Line */}
            </div>
        </>
    );
}
