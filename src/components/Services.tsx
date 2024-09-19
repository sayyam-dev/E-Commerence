import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill, RiSecurePaymentFill } from "react-icons/ri";

export default function Services() {
  return (
    <div className="w-full max-w-[1518px] mx-auto mb-[140px] px-4">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20">
        {/* box1 */}
        <div className="w-full max-w-[300px] flex flex-col justify-center items-center gap-4 md:w-72 lg:w-80">
          <span className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c2c1c2] relative flex justify-center items-center'>
            <span className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-black absolute flex justify-center items-center'>
              <TbTruckDelivery className='text-white w-8 h-8 md:w-10 md:h-10' />
            </span>
          </span>
          <span className='text-center'>
            <h1 className='text-lg md:text-xl font-Poppins font-[600] leading-[24px] md:leading-[28px]'>FREE AND FAST DELIVERY</h1>
            <p className='text-sm md:text-base font-Poppins font-[400] leading-[18px] md:leading-[21px]'>Free delivery for all orders over $140</p>
          </span>
        </div>
        {/* box1 */}
        
        {/* box2 */}
        <div className="w-full max-w-[300px] flex flex-col justify-center items-center gap-4 md:w-72 lg:w-80">
          <span className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c2c1c2] relative flex justify-center items-center'>
            <span className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-black absolute flex justify-center items-center'>
              <RiCustomerServiceFill className='text-white w-8 h-8 md:w-10 md:h-10' />
            </span>
          </span>
          <span className='text-center'>
            <h1 className='text-lg md:text-xl font-Poppins font-[600] leading-[24px] md:leading-[28px]'>24/7 CUSTOMER SERVICE</h1>
            <p className='text-sm md:text-base font-Poppins font-[400] leading-[18px] md:leading-[21px]'>Friendly 24/7 customer support</p>
          </span>
        </div>
        {/* box2 */}
        
        {/* box3 */}
        <div className="w-full max-w-[300px] flex flex-col justify-center items-center gap-4 md:w-72 lg:w-80">
          <span className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c2c1c2] relative flex justify-center items-center'>
            <span className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-black absolute flex justify-center items-center'>
              <RiSecurePaymentFill className='text-white w-8 h-8 md:w-10 md:h-10' />
            </span>
          </span>
          <span className='text-center'>
            <h1 className='text-lg md:text-xl font-Poppins font-[600] leading-[24px] md:leading-[28px]'>MONEY BACK GUARANTEE</h1>
            <p className='text-sm md:text-base font-Poppins font-[400] leading-[18px] md:leading-[21px]'>We return money within 30 days</p>
          </span>
        </div>
        {/* box3 */}
      </div>
    </div>
  );
}
