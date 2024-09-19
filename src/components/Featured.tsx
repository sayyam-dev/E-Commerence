import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Featured() {
    return (
        <div className='w-full max-w-[1518px] h-auto flex flex-col items-center mb-[140px] px-4'>
            {/* Time Section */}

            
            <div className="w-full max-w-[1300px] h-auto flex flex-col md:flex-row md:justify-between items-center mb-[40px]">
                <div className="flex flex-col gap-4 w-full md:w-[600px]">
                    <div className='flex items-center gap-4'>
                        <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
                        <h1 className="font-poppins text-lg font-semibold leading-5 text-[#DB4444]">Featured</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className="font-inter text-3xl font-semibold leading-[48px] tracking-[0.04em] text-left">
                            New Arrival
                        </h1>
                    </div>
                </div>
            </div>
            {/* Time Section */}

            <div className="w-full max-w-[1300px] h-auto flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-[630px] bg-black flex justify-center mb-8 md:mb-0">
                    <Image src="/playstation.png" alt='playstation' width={611} height={811} className='h-[511px] mt-[88px] object-cover' />
                    <span className='absolute text-white w-full md:w-[292px] h-auto md:h-[122px] bottom-[10%] left-[5%] md:bottom-[20%] md:left-[10%] flex flex-col gap-4'>
                        <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">PlayStation 5</h1>
                        <p className="font-poppins text-base font-normal leading-6 text-left">Black and White version of the PS5 coming out on sale.</p>
                        <Link href="/"><span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                            Shop Now
                        </span></Link>
                    </span>
                </div>
                <div className="w-full md:w-[630px] flex flex-col gap-8">
                    <div className="relative w-full h-[288px] bg-black rounded flex">
                        <Image
                            src="/women.png"
                            alt="women"
                            width={332}
                            height={286}
                            className="object-cover"
                        />
                        <span className='absolute text-white w-full md:w-[292px] h-auto md:h-[122px] bottom-[10%] left-[5%] flex flex-col gap-4'>
                            <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">
                                Women’s Collections
                            </h1>
                            <p className="font-poppins text-base font-normal leading-6 text-left">
                                Featured woman collections that give you another vibe.
                            </p>
                            <Link href="/">
                                <span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                                    Shop Now
                                </span>
                            </Link>
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <div className="relative w-full md:w-[300px] h-[284px] bg-black rounded">
                            <Image src="/speaker.png" alt='speaker' layout='fill' className='object-cover' />
                            <span className='absolute text-white w-full md:w-[292px] h-auto md:h-[122px] bottom-[10%] left-[5%] flex flex-col gap-2'>
                                <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">Speakers</h1>
                                <p className="font-poppins text-base font-normal leading-6 text-left">Amazon wireless speakers</p>
                                <Link href="/"><span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                                    Shop Now
                                </span></Link>
                            </span>
                        </div>

                        <div className="relative w-full md:w-[300px] h-[284px] bg-black rounded">
                            <Image src="/perfume.png" alt='perfume' layout='fill' className='object-cover' />
                            <span className='absolute text-white w-full md:w-[292px] h-auto md:h-[122px] bottom-[10%] left-[5%] flex flex-col gap-2'>
                                <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">Perfume</h1>
                                <p className="font-poppins text-base font-normal leading-6 text-left">GUCCI INTENSE OUD EDP</p>
                                <Link href="/"><span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                                    Shop Now
                                </span></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
