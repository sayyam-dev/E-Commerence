import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft, FaHeart, FaMobile } from 'react-icons/fa';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaShop } from 'react-icons/fa6';
import { TbTruckDelivery } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaDelicious, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiDeleteBinLine } from "react-icons/ri";
import { LuEye, LuCamera } from "react-icons/lu";
import { LuGamepad } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';


export default function page() {
  return (
    <>
      {/* Hero Section Frame 560 */}
      <div className='w-[1518px] h-[390px]  flex  justify-center mb-[140px]'>

        {/* Row1 */}
        <div className="row1 w-[1300px] h-[345px] flex justify-between items-center gap-16  mt-10">

          {/* left_box */}
          <div className="left_box w-[210px] h-[345px]  flex flex-col gap-4">
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Woman’s Fashion</Link>
              <FaAngleRight />
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Men’s Fashion</Link>
              <FaAngleRight />
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Electronics</Link>
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Home & Lifestyle</Link>
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Medicine</Link>
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Sports & Outdoor</Link>
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Baby’s & Toys</Link>
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Groceries & Pets</Link>
            </h1>
            <h1 className="flex justify-between items-center px-1 font-poppins text-lg font-normal leading-6 text-center">
              <Link href="/">Health & Beauty</Link>
            </h1>


          </div>
          {/* left_box */}

          {/* Line */}
          <span className='w-[1px] h-[384px] bg-black mt-[-40px] ml-[-60px]'></span>
          {/* Line */}

          {/* Right Box */}
          <div className="right_box w-[1015px] h-[345px] bg-black flex justify-center relative ">
            <div className="content w-[450px] h-[345px]  flex flex-col px-[64px] py-[55px] gap-[22px] mb-[47px]">
              <span className='flex justify-left items-center gap-6'><Image src="/apple.png" alt='apple' width={40} height={40}></Image><h1 className="font-poppins text-lg font-normal leading-6 text-center text-white">
                iPhone 14 Series
              </h1>
              </span>
              <h1 className="font-inter text-5xl font-semibold leading-[60px] tracking-[0.04em] text-left text-white">
                Up to 10% off Voucher
              </h1>

              <p className='flex  items-center gap-3  '><Link href="/" className='border-b-[1px] border-white text-white'>Shop Now</Link> <FaArrowRight className='text-white' /></p>
            </div>
            <div className="img w-[615px] [345px] bg-slate-600 relative mt-4">
              <Image src="/phone.jpeg" alt="mobile" layout='fill' className='absolute'></Image>
            </div>
          </div>

          {/* Right Box */}


        </div>
        <div className='star mt-[350px] ml-56 absolute '>
          <span className='flex justify-center items-center gap-1'>
            <span className='w-4 h-4 left-12  opacity-30 bg-[#FFFFFF] rounded-full'></span>
            <span className='w-4 h-4 left-12  opacity-30 bg-[#FFFFFF] rounded-full '></span>
            <span className='w-4 h-4 left-12  border-[#939191] bg-[#DB4444] rounded-full'></span>
            <span className='w-4 h-4 left-12  opacity-30 bg-[#FFFFFF] rounded-full'></span>
            <span className='w-4 h-4 left-12  opacity-30 bg-[#FFFFFF] rounded-full'></span>
          </span>

        </div>
        {/* Row1 */}
      </div>
      {/* Hero Section Frame 560 */}

      {/* Todays */}
      <div className='className= w-[1518px] h-[693px]  flex flex-col  items-center mb-[80px]'>
        {/* Time Section */}
        <div className="row1 w-[1300px] h-[105px] flex justify-between items-center mb-[40px] ">

          <div className="left w-[600px] h-[103px] flex flex-col gap-4">
            <div className='w-[100px] h-10 flex justify-between gap-4 items-center'>
              <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
              <h1 className="font-poppins text-lg font-semibold leading-5 text-left text-[#DB4444]">Today’s</h1>
            </div>
            <div className='w-[600px] h-12 flex justify-between gap-4 items-center'>
              <h1 className="font-inter text-3xl font-semibold leading-[48px] tracking-[0.04em] mt-4 text-left">
                Flash Sales
              </h1>
              <div>
                <div className="flex space-x-4 justify-center items-center">
                  <div className="text-center">
                    <span className="block text-sm font-medium">Days</span>
                    <span className="text-3xl font-semibold">03</span>
                  </div>
                  <span className="text-red-400 text-3xl">:</span>
                  <div className="text-center">
                    <span className="block text-sm font-medium">Hours</span>
                    <span className="text-3xl font-semibold">23</span>
                  </div>
                  <span className="text-red-400 text-3xl">:</span>
                  <div className="text-center">
                    <span className="block text-sm font-medium">Minutes</span>
                    <span className="text-3xl font-semibold">19</span>
                  </div>
                  <span className="text-red-400 text-3xl">:</span>
                  <div className="text-center">
                    <span className="block text-sm font-medium">Seconds</span>
                    <span className="text-3xl font-semibold">56</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="right flex gap-2">
            <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'><FaArrowLeft className='w-6 h-6' /></span>
            <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'><FaArrowRight className='w-6 h-6' /></span>
          </div>
        </div>
        {/* Time Section */}

        {/* Pics */}
        <div className="row2  w-[1300px] h-[355px] flex justify-between items-center mb-[60px] ">
          <div className="row2 w-[1300px] h-[350px] flex items-center justify-between gap-[30px]  ">

            {/* laptop */}
            <div className="bag w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -40%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/gamepad.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  HAVIT HV-G92 Gamepad
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$120</h1>
                  <h1 className="line-through">$160</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* laptop */}

            {/* Led */}
            <div className="speaker w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/keybord.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  AK-900 Wired Keyboard
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$960</h1>
                  <h1 className="line-through">$1160</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* led */}

            {/* GamePad */}
            <div className="game w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>

                  <Image src="/led.png" alt='bag' width={320} height={320} className='w-[172px] h-[182px]'></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  IPS LCD Gaming Monitor
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$370</h1>
                  <h1 className="line-through">$400</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* GamePad */}

            {/* keyboard */}
            <div className="jacket w-[290px] h-[350px] ">
              <div className="cart w-[290px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -25%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-60px] relative'>
                  <Image src="/chair.png" alt='bag' width={178} height={90} className='w-[160px] mt-5 h-[200px]'></Image> <span className='w-[34px] h-[34px] ml-[240px] mt-[-50px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[290px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>

              <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  S-Series Comfort Chair
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$375</h1>
                  <h1 className="line-through">$400</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* Keybord */}
          </div>
        </div>
        {/* Pics */}

        {/* Btn */}
        <div className='row3  w-[1300px] h-[60px] flex justify-center items-center mb-[60px]'>
          <div className="btn w-[254px] h-[56px] rounded px-12 py-4 text-white bg-[#DB4444]">
            <h1 className="font-poppins text-lg font-medium leading-6 text-left">
              View All Products
            </h1>
          </div>
        </div>
        {/* Btn */}

        {/* Line */}
        <div className="w-[1330px] h-0.5 border-t border-black opacity-30 transform rotate-180">

        </div>
        {/* Line */}
      </div>
      {/* Todays */}


      {/* Categories */}
      <div className='className= w-[1518px] h-[403px]  flex flex-col  items-center mb-[70px]'>
        {/* Time Section */}
        <div className="row1 w-[1300px] h-[105px] flex justify-between items-center mb-[80px] ">

          <div className="left w-[600px] h-[103px] flex flex-col gap-4">
            <div className='w-[150px] h-10 flex justify-between gap-4 items-center mt-[4vh]'>
              <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
              <h1 className="font-poppins text-lg font-semibold leading-5 text-left text-[#DB4444]">Categories</h1>
            </div>
            <div className='w-[600px] h-12 flex justify-between gap-4 items-center'>
              <h1 className="font-inter text-3xl font-semibold leading-[48px] tracking-[0.04em] mt- text-left">
                Browse By Category
              </h1>

            </div>
          </div>

          <div className="right flex gap-2 mt-[120px]">
            <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'><FaArrowLeft className='w-6 h-6' /></span>
            <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'><FaArrowRight className='w-6 h-6' /></span>
          </div>
        </div>
        {/* Time Section */}

        {/* Pics */}
        <div className="row2  w-[1300px] h-[145px] flex justify-between items-center mb-[70px] ">
          <span className='w-[170px] h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center'><IoIosPhonePortrait className='w-14 h-14' /><h1 className="font-poppins text-lg font-normal leading-6 text-left">
            Phones
          </h1></span>
          <span className='w-[170px] h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center'><HiOutlineComputerDesktop className='w-14 h-14' /><h1 className="font-poppins text-lg font-normal leading-6 text-left">
            Computers
          </h1></span>
          <span className='w-[170px] h-[145px] rounded border-[1px] border-black flex  flex-col gap-4 justify-center items-center'><TbDeviceWatchStats className='w-14 h-14' /> <h1 className="font-poppins text-lg font-normal leading-6 text-left">
            SmartWatch
          </h1></span>
          <span className='w-[170px] h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center bg-[#DB4444] text-white'><LuCamera className='w-14 h-14 text-white' />
            <h1 className="font-poppins text-lg font-normal leading-6 text-left">
              Camera
            </h1>

          </span>
          <span className='w-[170px] h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center'><FiHeadphones className='w-14 h-14' /><h1 className="font-poppins text-lg font-normal leading-6 text-left">
            HeadPhones
          </h1>
          </span>
          <span className='w-[170px] h-[145px] rounded border-[1px] border-black flex flex-col gap-4 justify-center items-center'>
            <LuGamepad className='w-14 h-14' /><h1 className="font-poppins text-lg font-normal leading-6 text-left">
              Gaming
            </h1>
          </span>
        </div>
        {/* Pics */}


        {/* Line */}
        <div className="w-[1330px] h-0.5 border-t border-black opacity-30 transform rotate-180">

        </div>
        {/* Line */}
      </div>
      {/* Categories */}



      {/* This Month */}
      <div className='className= w-[1518px] h-[533px]  flex flex-col  items-center mb-[80px] bgte-400'>
        {/* Time Section */}
        <div className="row1 w-[1300px] h-[105px] flex justify-between items-center mb-[40px] ">

          <div className="left w-[600px] h-[103px] flex flex-col gap-4">
            <div className='w-[140px] h-10 flex justify-between gap-4 items-center'>
              <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
              <h1 className="font-poppins text-lg font-semibold leading-5 text-left text-[#DB4444]">This Month</h1>
            </div>
            <div className='w-[600px] h-12 flex justify-between gap-4 items-center'>
              <h1 className="font-inter text-3xl font-semibold leading-[48px] tracking-[0.04em] mt-4 text-left">
                Best Selling Products
              </h1>

            </div>
          </div>

          <div className="right mt-8">
            <span className='w-[160px] h-[56px] rounded bg-[#DB4444] flex justify-center items-center text-white'>View All</span>
          </div>
        </div>
        {/* Time Section */}

        {/* Pics */}
        <div className="row2  w-[1300px] h-[355px] flex justify-between items-center mb-[60px] ">
          <div className="row2 w-[1300px] h-[350px] flex items-center justify-between gap-[30px]  ">

            {/* laptop */}
            <div className="bag w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -40%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/gamepad.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  HAVIT HV-G92 Gamepad
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$120</h1>
                  <h1 className="line-through">$160</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* laptop */}

            {/* Led */}
            <div className="speaker w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/keybord.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  AK-900 Wired Keyboard
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$960</h1>
                  <h1 className="line-through">$1160</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* led */}

            {/* GamePad */}
            <div className="game w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>

                  <Image src="/led.png" alt='bag' width={320} height={320} className='w-[172px] h-[182px]'></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  IPS LCD Gaming Monitor
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$370</h1>
                  <h1 className="line-through">$400</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* GamePad */}

            {/* keyboard */}
            <div className="jacket w-[290px] h-[350px] ">
              <div className="cart w-[290px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -25%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-60px] relative'>
                  <Image src="/chair.png" alt='bag' width={178} height={90} className='w-[160px] mt-5 h-[200px]'></Image> <span className='w-[34px] h-[34px] ml-[240px] mt-[-50px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[290px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>

              <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  S-Series Comfort Chair
                </h1>
                <span className='flex justify-left items-center gap-3'>
                  <h1 className='text-[#DB4444] font-[16px]'>$375</h1>
                  <h1 className="line-through">$400</h1>
                </span>
                <span className='flex justify-left items-center gap-2'>
                  <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                  (65)
                </span>
              </div>
            </div>
            {/* Keybord */}
          </div>
        </div>
        {/* Pics */}


      </div>
      {/* This Month */}


      {/* Headset */}
      <div className='className= w-[1518px] h-[500px]  flex justify-center  items-center mb-[80px]'>
        {/* Time Section */}
        <div className="row1 w-[1300px] h-[500px] flex justify-center items-center  bg-black py-[37px] px-[44px] gap-[27px]">
          <div className="text w-[500px] h-[420px] flex flex-col gap-8  py-10 px-5">
            <h4 className="font-poppins text-[16px] font-semibold leading-[20px] text-left text-[#00FF66]">
              Categories
            </h4>
            <h1 className="font-inter text-[48px] font-semibold leading-[60px] tracking-[0.04em] text-left text-[#FAFAFA]">
              Enhance Your Music Experience
            </h1>
            <div className="time flex justify-left items-center gap-6">
              <span className='flex flex-col justify-center items-center  w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'><b className="font-poppins text-[16px] font-semibold leading-[20px] text-left">23</b>
                <b className="font-poppins text-[11px] font-normal leading-[18px] text-left">Hours</b>
              </span>
              <span className='flex flex-col justify-center items-center  w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'><b className="font-poppins text-[16px] font-semibold leading-[20px] text-left">05</b>
                <b className="font-poppins text-[11px] font-normal leading-[18px] text-left">Days</b>
              </span>
              <span className='flex flex-col justify-center items-center  w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'><b className="font-poppins text-[16px] font-semibold leading-[20px] text-left">59</b>
                <b className="font-poppins text-[11px] font-normal leading-[18px] text-left">Minutes</b>
              </span>
              <span className='flex flex-col justify-center items-center  w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'><b className="font-poppins text-[16px] font-semibold leading-[20px] text-left">35</b>
                <b className="font-poppins text-[11px] font-normal leading-[18px] text-left">Seconds</b>
              </span>
            </div>

            <div className="btn w-[165px] bg-[#00FF66] h-[56px] flex justify-center items-center rounded py-4">
              <p className='text-white'>Buy Now!</p>
            </div>
          </div>

          <div className="img w-[700px] h-[420px] flex items-center justify-center relative">
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
      {/* Headset */}


      {/* Our Products*/}
      <div className='className= w-[1518px] h-[1080px]  flex flex-col  items-center mb-[140px] bgte-400'>
        {/* Time Section */}
        <div className="row1 w-[1300px] h-[105px] flex justify-between items-center mb-[40px] ">

          <div className="left w-[600px] h-[103px] flex flex-col gap-4">
            <div className='w-[160px] h-10 flex justify-between gap-4 items-center'>
              <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
              <h1 className="font-poppins text-lg font-semibold leading-5 text-left text-[#DB4444]">Our Products</h1>
            </div>
            <div className='w-[600px] h-12 flex justify-between gap-4 items-center'>
              <h1 className="font-inter text-3xl font-semibold leading-[48px] tracking-[0.04em] mt-4 text-left">
                Explore Our Products
              </h1>

            </div>

          </div>
          <div className="right mt-8 flex gap-3">
            <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'><FaArrowLeft className='w-6 h-6' /></span>
            <span className='w-12 h-12 rounded-full bg-[#F5F5F5] flex justify-center items-center'><FaArrowRight className='w-6 h-6' /></span>
          </div>
        </div>
        {/* Time Section */}

        {/* Pics */}
        <div className="row2  w-[1300px] h-[355px] flex justify-between items-center mb-[60px] ">
          <div className="row2 w-[1300px] h-[350px] flex items-center justify-between gap-[30px]  ">

            {/* laptop */}
            <div className="bag w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-end px-2 mt-3 items-center">
                  {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -40%
                  </span> */}
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/dogfood.jpeg" alt='bag' width={178} height={100} className='w-[140px] h-[180px]'></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] hover:bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  Breed Dry Dog Food
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$120</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar>
                    </span>
                    (35)
                  </span>
                </span>
              </div>
            </div>
            {/* laptop */}

            {/* Led */}
            <div className="speaker w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-end px-2 mt-3 items-center">
                  {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span> */}
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/camera.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  CANON EOS DSLR Camera
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$360</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar>
                    </span>
                    (95)
                  </span>
                </span>
              </div>
            </div>
            {/* led */}

            {/* GamePad */}
            <div className="game w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-end px-2 mt-3 items-center">
                  {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span> */}
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>

                  <Image src="/led.png" alt='bag' width={320} height={320} className='w-[172px] h-[182px]'></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] hover:bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  ASUS FHD Gaming Laptop
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$700</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar>
                    </span>
                    (325)
                  </span>
                </span>
              </div>
            </div>
            {/* GamePad */}

            {/* keyboard */}
            <div className="jacket w-[290px] h-[350px] ">
              <div className="cart w-[290px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-end px-2 mt-3 items-center">
                  {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -25%
                  </span> */}
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-60px] relative'>
                  <Image src="/facewash.png" alt='bag' width={178} height={90} className='w-[160px] mt-5 h-[200px]'></Image> <span className='w-[34px] h-[34px] ml-[240px] mt-[-50px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[290px] h-[41px] hover:bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>

              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  Curology Product Set
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$500</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar>
                    </span>
                    (145)
                  </span>
                </span>
              </div>
            </div>
            {/* Keybord */}
          </div>
        </div>
        {/* Pics */}

        {/* Pics */}
        <div className="row2  w-[1300px] h-[355px] flex justify-between items-center mb-[106px] ">
          <div className="row2 w-[1300px] h-[350px] flex items-center justify-between gap-[30px]  ">

            {/* laptop */}
            <div className="bag w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#00FF66] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    New
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/car.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  Kids Electric Car
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$120</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar>
                    </span>
                    (35)
                  </span>
                </span>
              </div>
            </div>
            {/* laptop */}

            {/* Led */}
            <div className="speaker w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-end px-2 mt-3 items-center">
                  {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span> */}
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>
                  <Image src="/shose.png" alt='bag' width={178} height={130} className=''></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  Jr. Zoom Soccer Cleats
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$1160</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar>
                    </span>
                    (35)
                  </span>
                </span>
              </div>
            </div>
            {/* led */}

            {/* GamePad */}
            <div className="game w-[280px] h-[350px] ">
              <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-between px-2 mt-3 items-center">
                  <span className="w-[55px] h-[26px] bg-[#00FF66] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -35%
                  </span>
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-20px] relative'>

                  <Image src="/gamebox.png" alt='bag' width={320} height={320} className='w-[292px] h-[182px] '></Image>
                  <span className='w-[34px] h-[34px] ml-[230px] mt-[-85px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>
              <div className="price w-[226px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  GP11 Shooter USB Gamepad
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$660</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar>
                    </span>
                    (55)
                  </span>
                </span>
              </div>
            </div>
            {/* gamepad */}

            {/* jecket */}
            <div className="jacket w-[290px] h-[350px] ">
              <div className="cart w-[290px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
                <div className="btns flex justify-end px-2 mt-3 items-center">
                  {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                    -25%
                  </span> */}
                  <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><FaHeart /></span>
                </div>
                <div className='bag_img flex justify-center items-center mt-[-60px] relative'>
                  <Image src="/jacket.png" alt='bag' width={178} height={90} className='w-[160px] mt-5 h-[200px]'></Image> <span className='w-[34px] h-[34px] ml-[240px] mt-[-50px] rounded-full bg-white flex justify-center items-center absolute'><LuEye /></span>
                </div>
                <div className="add_cart w-[290px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                  <FaCartShopping></FaCartShopping>Add To Cart
                </div>
              </div>

              <div className="price w-[206px] h-[84px] mt-[16px]  flex flex-col gap-2">
                <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                  Quilted Satin Jacket
                </h1>
                <span className='flex justify-left items-center gap-3 '>
                  <h1 className='text-[#DB4444] font-[16px]'>$660</h1>
                  <span className='flex justify-left items-center gap-2'>
                    <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#989696]'></FaStar>
                    </span>
                    (35)
                  </span>
                </span>
              </div>
            </div>
            {/* jecket */}
          </div>
        </div>
        {/* Pics */}

        {/* Btn */}
        <div className='row3  w-[1300px] h-[60px] flex justify-center items-center'>
          <div className="btn w-[254px] h-[56px] rounded px-12 py-4 text-white bg-[#DB4444]">
            <h1 className="font-poppins text-lg font-medium leading-6 text-left">
              View All Products
            </h1>
          </div>
        </div>
        {/* Btn */}
      </div>
      {/* Our Products */}


      {/* Featured */}
      <div className='className= w-[1518px] h-[770px]  flex flex-col  items-center mb-[140px] bgte-400 '>
        {/* Time Section */}
        <div className="row1 w-[1300px] h-[105px] flex justify-between items-center mb-[40px] ">

          <div className="left w-[600px] h-[103px] flex flex-col gap-4">
            <div className='w-[120px] h-10 flex justify-between gap-4 items-center'>
              <span className='w-5 h-10 rounded bg-[#DB4444]'></span>
              <h1 className="font-poppins text-lg font-semibold leading-5 text-left text-[#DB4444]">Featured</h1>
            </div>
            <div className='w-[600px] h-12 flex justify-between gap-4 items-center'>
              <h1 className="font-inter text-3xl font-semibold leading-[48px] tracking-[0.04em] mt-4 text-left">
                New Arrival
              </h1>

            </div>

          </div>
        </div>
        {/* Time Section */}

        <div className="  w-[1300px] h-[600px] gap-8 flex justify-between items-end ">
          <div className="leftimg w-[630px] h-[600px] bg-black flex justify-center ">
            <Image src="/playstation.png" alt='playstation' width={611} height={811} className='h-[511px]  mt-[88px] relative' ></Image>
            <span className='absolute text-white w-[292px] h-[122px] mt-[430px] ml-[-180px] flex flex-col gap-4'>
              <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">PlayStation 5</h1>
              <p className="font-poppins text-base font-normal leading-6 text-left">Black and White version of the PS5 coming out on sale.</p>
              <Link href="/"><span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                Shop Now
              </span></Link>
            </span>
          </div>
          <div className="leftimg w-[630px] h-[600px]  flex flex-col justify-between">
            <div className="uper w-[630] h-[288px] bg-black rounded flex">
              <Image
                src="/women.png"
                alt="women"
                width={332}
                height={286}
                className=" ml-[300px]"
              />
              <span className='absolute text-white w-[292px] h-[122px] mt-[140px] ml-[30px] flex flex-col gap-4'>
                <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">
                  Women’s Collections
                </h1><p className="font-poppins text-base font-normal leading-6 text-left">
                  Featured woman collections that give you another vibe.
                </p>
                <Link href="/">
                  <span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                    Shop Now
                  </span>
                </Link>

              </span>
            </div>

            <div className="lower w-[630] h-[284px] flex justify-between">
              <div className="left w-[300px] h-[284px] bg-black rounded relative ">
                <Image src="/speaker.png" alt='speaker' layout='fill' className='absolute mt-4 ml-8'></Image>
                <span className='absolute text-white w-[292px] h-[122px] mt-[175px] ml-[30px] flex flex-col gap-2'>
                  <h1 className="text-white font-semibold text-2xl leading-6 tracking-wider text-left">Speakers</h1>
                  <p className="font-poppins text-base font-normal leading-6 text-left">Amazon wireless speakers</p>
                  <Link href="/"><span className="font-poppins text-lg font-medium leading-6 text-left border-b-[1px] border-white">
                    Shop Now
                  </span></Link>
                </span>

              </div>


              <div className="right w-[300px] h-[284px] bg-black rounded relative">
              <Image src="/perfume.png" alt='speaker' layout='fill' className='absolute mt-4 ml-'></Image>
                <span className='absolute text-white w-[292px] h-[122px] mt-[175px] ml-[30px] flex flex-col gap-2'>
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
      {/* Featured */}


      
    {/* Row5 */}
    <div className="row5 w-[1518px] h-[161px] gap-20 flex justify-center items-center  mb-[140px]">
          <div className="services w-[1000px] h-[161px]  flex justify-between items-center">
             
             {/* box1 */}
              <div className="box1 w-72 h-40 flex flex-col justify-center items-center gap-6">
                <span className='w-20 h-20 rounded-full bg-[#c2c1c2]  relative flex justify-center items-center'>
                  <span className='w-14 h-14 rounded-full bg-[#000000] absolute flex justify-center items-center'>
                    <TbTruckDelivery  className='absolute text-white w-10 h-10 rounded-[20px] bg-black'/></span>
                  </span>
                <span className='flex flex-col justify-center items-center'>
                <h1 className='text-[20px] font-Poppins font-[600] leading-[28px]'>FREE AND FAST DELIVERY</h1>
                <p className='text-[14px] font-Poppins font-[400] leading-[21px]'>Free delivery for all orders over $140</p>
                </span>
              </div>
             {/* box1 */}
             
             {/* box2*/}
              <div className="box1 w-72 h-40 flex flex-col justify-center items-center gap-6">
                <span className='w-20 h-20 rounded-full bg-[#c2c1c2]  relative flex justify-center items-center'>
                  <span className='w-14 h-14 rounded-full bg-black absolute flex justify-center items-center'>
                    <RiCustomerServiceFill  className='absolute text-white w-10 h-10 rounded-[20px]'/></span>
                  </span>
                  <span className='flex flex-col justify-center items-center'>
                <h1 className='text-[20px] font-Poppins font-[600] leading-[28px]'>24/7 CUSTOMER SERVICE</h1>
                <p className='text-[14px] font-Poppins font-[400] leading-[21px]'>Friendly 24/7 customer support</p>
                </span>
              </div>
             {/* box2 */}
             
             {/* box3 */}
              <div className="box1 w-72 h-40 flex flex-col justify-center items-center gap-6">
                <span className='w-20 h-20 rounded-full bg-[#c2c1c2]  relative flex justify-center items-center'>
                  <span className='w-14 h-14 rounded-full bg-black absolute flex justify-center items-center'>
                    <RiSecurePaymentFill  className='absolute text-white w-10 h-10 rounded-[20px]'/></span>

                  </span>
                  <span className='flex flex-col justify-center items-center'>
                <h1 className='text-[20px] font-Poppins font-[600] leading-[28px]'>MONEY BACK GUARANTEE</h1>
                <p className='text-[14px] font-Poppins font-[400] leading-[21px]'>We reurn money within 30 days</p>
                </span>
              </div>
             {/* box3 */}


              
          </div>
    </div>
    {/* Row5 */}
    </>
  )
}
