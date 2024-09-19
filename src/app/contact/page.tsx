import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <div className="px-4 md:px-7 ml-4 md:ml-[88px] mt-8 md:mt-[120px]">
        <Link href="/">Home</Link> / Contact
      </div>
      <div className="flex flex-col gap-8 md:gap-[80px] items-center justify-center mb-8 md:mb-[140px] mt-8 md:mt-[80px]">
        <div className="form w-full md:w-[1280px] h-auto md:h-[497px] flex flex-col md:flex-row justify-center md:justify-between p-4 md:p-[40px]">

          {/* Content Section of Form */}
          <div className="content w-full md:w-[290px] h-auto md:h-[457px] flex flex-col p-4 md:p-2">
            <div className="call_to_us flex items-center gap-3 md:gap-5">
              <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#DB4444] rounded-full flex justify-center items-center">
                <FaPhone className="text-white" />
              </div>
              <h1 className="font-poppins text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-left">
                Call To Us
              </h1>
            </div>
            <p className="mt-2 md:mt-[16px] font-poppins text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[21px] text-left">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mt-2 md:mt-[16px] font-poppins text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[21px] text-left">
              Phone: +8801611112222
            </p>
            <div className="w-full h-[2px] border-b-2 border-black mt-4 md:mt-[32px] mb-4 md:mb-[32px]" />
            <div className="call_to_us flex items-center gap-3 md:gap-5">
              <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#DB4444] rounded-full flex justify-center items-center">
                <FaMessage className="text-white" />
              </div>
              <h1 className="font-poppins text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-left">
                Write To Us
              </h1>
            </div>
            <p className="mt-2 md:mt-[16px] font-poppins text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[21px] text-left">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-2 md:mt-[16px] font-poppins text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[21px] text-left">
              Emails: customer@exclusive.com
            </p>
            <p className="mt-2 md:mt-[16px] font-poppins text-[12px] md:text-[14px] font-normal leading-[18px] md:leading-[21px] text-left">
              Emails: support@exclusive.com
            </p>
          </div>
          {/* Content Section of Form */}

          {/* Text Section of Form */}
          <div className="w-full md:w-[800px] h-auto md:h-[457px] p-4 md:p-[40px_32px_40px_31px] rounded-tl-[4px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] flex flex-col gap-4 md:gap-8 mt-4 md:mt-[-30px] flex-wrap">

            {/* Row 1 */}
            <div className="row1 flex flex-col md:flex-row justify-between gap-4">
              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-full md:w-auto'>
                <input type="text" placeholder='Your Name *' className='px-2 border-0 bg-[#F5F5F5] rounded-sm w-full' />
              </span>
              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-full md:w-auto'>
                <input type="email" placeholder='Your Email *' className='px-2 border-0 bg-[#F5F5F5] rounded-sm w-full' />
              </span>
              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-full md:w-auto'>
                <input type="number" placeholder='Your Phone *' className='px-2 border-0 bg-[#F5F5F5] rounded-sm w-full' />
              </span>
            </div>
            {/* Row 1 */}

            {/* Row 2 */}
            <div className="row2 w-full h-auto md:h-[207px] rounded-tl-[4px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px]">
              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-md'>
                <textarea placeholder='Your Message' className='text-top bg-[#F5F5F5] w-full h-full rounded-sm' />
              </span>
            </div>
            {/* Row 2 */}

            <div className="btn w-full md:w-[215px] h-[56px] bg-[#DB4444] text-white flex justify-center items-center rounded-sm mt-4 md:mt-0">
              <p className="font-poppins text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] text-center">
                Send Message
              </p>
            </div>
          </div>
          {/* Text Section of Form */}
        </div>
      </div>
    </>
  );
}
