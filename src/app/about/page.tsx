import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TbTruckDelivery } from "react-icons/tb";
FaShop
import { CiDollar } from "react-icons/ci";
import { FaSackDollar, FaShop } from "react-icons/fa6";
import { RiCustomerServiceFill, RiSecurePaymentFill } from "react-icons/ri";

export default function Page() {
  return (
    <>
      <div className='px-7 ml-4 sm:ml-6 md:ml-8 lg:ml-[80px] mt-[120px]'>
        <Link href="/">Home</Link> <b>/ About</b>
      </div>

      {/* Row1 */}
      <div className="row1 w-full max-w-screen-xl mx-auto h-auto mt-[120px] mb-[60px] px-4">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className="text flex-1">
            <h1 className="font-inter text-4xl md:text-5xl lg:text-[54px] font-semibold leading-tight tracking-wider text-justify">
              Our Story
            </h1>
            <p className="font-poppins text-base md:text-lg leading-6 mt-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <p className="font-poppins text-base md:text-lg leading-6 mt-6">
              Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="img flex-1 relative w-full h-[400px] lg:h-[609px]">
            <Image src="/aboutpic.jpeg" alt="pic" layout="fill" objectFit="cover" className="absolute" />
          </div>
        </div>
      </div>
      {/* Row1 */}

      {/* Row2 */}
      <div className="row2 w-full max-w-screen-xl mx-auto h-auto mt-[140px] mb-[140px] px-4">
        <div className='flex flex-wrap justify-between gap-6'>
          <div className="box1 w-full sm:w-1/2 md:w-1/3 lg:w-[270px] h-auto rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center gap-5 p-4 transition-colors duration-300 hover:bg-[#2F2E30] hover:text-white hover:border-[#2F2E30]">
            <span className='w-20 h-20 rounded-full bg-[#2F2E30] flex justify-center items-center'>
              <FaShop className='w-12 h-12 text-white' />
            </span>
            <span className='text-center'>
              <h1 className="font-inter text-2xl lg:text-[32px] font-bold leading-[30px]">
                10.5k
              </h1>
              <p className="font-poppins text-base lg:text-lg leading-6">
                Sellers active on our site
              </p>
            </span>
          </div>

          <div className="box2 w-full sm:w-1/2 md:w-1/3 lg:w-[270px] h-auto rounded-[4px] border-[1px] border-black bg-[#DB4444] flex flex-col justify-center items-center gap-5 p-4 transition-colors duration-300 hover:bg-[#f68686] hover:text-black hover:border-[#f68686]">
            <span className='w-20 h-20 rounded-full bg-[#f68686] flex justify-center items-center'>
              <CiDollar className='w-12 h-12 text-black' />
            </span>
            <span className='text-center'>
              <h1 className="font-inter text-2xl lg:text-[32px] font-bold leading-[30px] text-white">
                33k
              </h1>
              <p className="font-poppins text-base lg:text-lg leading-6 text-white">
                Monthly Product Sale
              </p>
            </span>
          </div>

          <div className="box3 w-full sm:w-1/2 md:w-1/3 lg:w-[270px] h-auto rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center gap-5 p-4 transition-colors duration-300 hover:bg-[#2F2E30] hover:text-white hover:border-[#2F2E30]">
            <span className='w-20 h-20 rounded-full bg-[#2F2E30] flex justify-center items-center'>
              <RiShoppingBagLine className='w-12 h-12 text-white' />
            </span>
            <span className='text-center'>
              <h1 className="font-inter text-2xl lg:text-[32px] font-bold leading-[30px]">
                45.5k
              </h1>
              <p className="font-poppins text-base lg:text-lg leading-6">
                Customer active on our site
              </p>
            </span>
          </div>

          <div className="box4 w-full sm:w-1/2 md:w-1/3 lg:w-[270px] h-auto rounded-[4px] border-[1px] border-black flex flex-col justify-center items-center gap-5 p-4 transition-colors duration-300 hover:bg-[#2F2E30] hover:text-white hover:border-[#2F2E30]">
            <span className='w-20 h-20 rounded-full bg-[#2F2E30] flex justify-center items-center'>
              <FaSackDollar className='w-12 h-12 text-white' />
            </span>
            <span className='text-center'>
              <h1 className="font-inter text-2xl lg:text-[32px] font-bold leading-[30px]">
                25k
              </h1>
              <p className="font-poppins text-base lg:text-lg leading-6">
                Annual gross sale on our site
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* Row2 */}


      {/* Row3 */}
      <div className="row3 w-full max-w-screen-xl mx-auto h-auto mt-[140px] mb-[40px] px-4">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="img2 w-full sm:w-1/2 md:w-1/3 lg:w-[370px] flex flex-col gap-8">
            <div className="men1 w-full rounded-[4px] bg-[#F5F5F5] relative flex justify-center items-center h-[430px]">
              <Image src="/men1.png" alt="pic" width={320} height={100} className="absolute w-[280px] h-[350px] mt-14" />
            </div>
            <div className="contend flex flex-col gap-4 text-center">
              <h1 className="font-inter text-2xl md:text-3xl font-medium leading-7 tracking-wide">Tom Cruise</h1>
              <p className="font-poppins text-sm md:text-base font-normal leading-6">Founder & Chairman</p>
              <div className='flex justify-center gap-4'>
                <FaTwitter className='text-black' />
                <FaInstagram className='text-black' />
                <FaLinkedin className='text-black' />
              </div>
            </div>
          </div>

          <div className="img2 w-full sm:w-1/2 md:w-1/3 lg:w-[370px] flex flex-col gap-8">
            <div className="men1 w-full rounded-[4px] bg-[#F5F5F5] relative flex justify-center items-center h-[430px]">
              <Image src="/womem1.png" alt="pic" width={320} height={100} className="absolute w-[280px] h-[350px] mt-14" />
            </div>
            <div className="contend flex flex-col gap-4 text-center">
              <h1 className="font-inter text-2xl md:text-3xl font-medium leading-7 tracking-wide">Emma Watson</h1>
              <p className="font-poppins text-sm md:text-base font-normal leading-6">Managing Director</p>
              <div className='flex justify-center gap-4'>
                <FaTwitter className='text-black' />
                <FaInstagram className='text-black' />
                <FaLinkedin className='text-black' />
              </div>
            </div>
          </div>

          <div className="img2 w-full sm:w-1/2 md:w-1/3 lg:w-[370px] flex flex-col gap-8">
            <div className="men3 w-full rounded-[4px] bg-[#F5F5F5] relative flex justify-center items-center h-[430px]">
              <Image src="/men3.png" alt="pic" width={320} height={100} className="absolute w-[280px] h-[350px] mt-14" />
            </div>
            <div className="contend flex flex-col gap-4 text-center">
              <h1 className="font-inter text-2xl md:text-3xl font-medium leading-7 tracking-wide">Will Smith</h1>
              <p className="font-poppins text-sm md:text-base font-normal leading-6">Product Designer</p>
              <div className='flex justify-center gap-4'>
                <FaTwitter className='text-black' />
                <FaInstagram className='text-black' />
                <FaLinkedin className='text-black' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Row3 */}

      {/* Row4 */}
      <div className='row4 w-full max-w-screen-xl mx-auto h-[54px] flex justify-center items-center mb-[116px] px-4'>
        <span className='flex justify-center items-center gap-1'>
          <span className='w-4 h-4 border-2 opacity-30 bg-[#000000] rounded-full'></span>
          <span className='w-4 h-4 border-2 opacity-30 bg-[#000000] rounded-full'></span>
          <span className='w-4 h-4 border-2 border-[#939191] bg-[#DB4444] rounded-full'></span>
          <span className='w-4 h-4 border-2 opacity-30 bg-[#000000] rounded-full'></span>
          <span className='w-4 h-4 border-2 opacity-30 bg-[#000000] rounded-full'></span>
        </span>
      </div>
      {/* Row4 */}

      {/* Row5 */}
      <div className="row5 w-full max-w-screen-xl mx-auto h-auto gap-8 flex flex-col md:flex-row justify-center items-center mb-[140px] px-4">
        <div className="services flex flex-wrap gap-6 justify-center items-center">
          {/* box1 */}
          <div className="box1 w-full sm:w-1/2 lg:w-72 h-auto flex flex-col justify-center items-center gap-6 p-4">
            <span className='w-20 h-20 rounded-full bg-[#c2c1c2] flex justify-center items-center'>
              <TbTruckDelivery className='text-black w-14 h-14' />
            </span>
            <span className='text-center'>
              <h1 className='text-lg md:text-[20px] font-Poppins font-[600] leading-[28px]'>FREE AND FAST DELIVERY</h1>
              <p className='text-sm md:text-[14px] font-Poppins font-[400] leading-[21px]'>Free delivery for all orders over $140</p>
            </span>
          </div>
          {/* box1 */}

          {/* box2 */}
          <div className="box1 w-full sm:w-1/2 lg:w-72 h-auto flex flex-col justify-center items-center gap-6 p-4">
            <span className='w-20 h-20 rounded-full bg-[#c2c1c2] flex justify-center items-center'>
              <RiCustomerServiceFill className='text-black w-14 h-14' />
            </span>
            <span className='text-center'>
              <h1 className='text-lg md:text-[20px] font-Poppins font-[600] leading-[28px]'>24/7 CUSTOMER SERVICE</h1>
              <p className='text-sm md:text-[14px] font-Poppins font-[400] leading-[21px]'>Friendly 24/7 customer support</p>
            </span>
          </div>
          {/* box2 */}

          {/* box3 */}
          <div className="box1 w-full sm:w-1/2 lg:w-72 h-auto flex flex-col justify-center items-center gap-6 p-4">
            <span className='w-20 h-20 rounded-full bg-[#c2c1c2] flex justify-center items-center'>
              <RiSecurePaymentFill className='text-black w-14 h-14' />
            </span>
            <span className='text-center'>
              <h1 className='text-lg md:text-[20px] font-Poppins font-[600] leading-[28px]'>MONEY BACK GUARANTEE</h1>
              <p className='text-sm md:text-[14px] font-Poppins font-[400] leading-[21px]'>We return money within 30 days</p>
            </span>
          </div>
          {/* box3 */}
        </div>
      </div>
      {/* Row5 */}
    </>
  );
}
