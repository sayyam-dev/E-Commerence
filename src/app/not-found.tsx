import Link from 'next/link';
import React from 'react';

export default function Not_Found() {
    return (
        <>
            <div className=' px-7 ml-[80px] mt-[120px]'><Link href="/">Home</Link> / 404 Error</div>
            <div className='w-[1518px] h-[400px]  flex flex-col items-center justify-center gap-[80px] mt-24'>
                <div className='w-[930px] h-[180px] flex flex-col justify-center items-center gap-[40px]'>
                    <h1 className="text-[110px] font-medium leading-[115px] tracking-[0.03em] text-left">
                        404 Not Found
                    </h1>
                    <p className="text-[16px] font-normal leading-[24px] text-left">
                        Your visited page not found. You may go to the home page.
                    </p>


                </div>
                <div className="text-[16px] font-medium leading-[24px] text-left bg-[#DB4444] px-[48px] py-[16px] rounded-md text-white">
                    <Link href="/">Back to home page</Link>
                </div>

            </div><br /><br /><br /><br />
        </>
    )
}
