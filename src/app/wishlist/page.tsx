import Link from 'next/link';
import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

export default function page() {
  return (
    <div className=' w-[1518px] h-[1020px]  flex justify-center items-center mt-[80px] mb-[150px]'>
      <div className='w-[1300px] h-{1020px} flex flex-col gap-[60px]  '>

        {/* Row1 */}
        <div className="row1 w-[1300px] h-[56px] flex items-center justify-between ">
          <h1>
            <Link href="/wishlist" className='font-poppins text-base font-medium leading-6 text-left'>Wishlist (4)</Link>
          </h1>
          <div className="w-[223px] h-[56px] px-[48px] py-[16px] flex gap-2.5 rounded-md border-2 border-black ">
            <p className="font-poppins text-base font-medium leading-6 text-left">
              Move All To Bag
            </p>
          </div>
        </div>
        {/* Row1 */}


        {/* Row2 */}
        <div className="row2 w-[1300px] h-[322px] flex items-center justify-between gap-[30px]">

          {/* bag */}
          <div className="bag w-[280px] h-[322px] ">
            <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
              <div className="btns flex justify-between px-2 mt-3 items-center">
                <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span>
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><RiDeleteBinLine /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/bag.png" alt='bag' width={178} height={130} className=''></Image>
              </div>
              <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link> 
              </div>
            </div>
            <div className="price w-[133px] h-[56px] mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                Gucci duffle bag
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$960</h1>
                <h1 className="line-through">$1160</h1>

              </span>
            </div>
          </div>
          {/* bag */}

          {/* CPU */}
          <div className="speaker w-[280px] h-[322px] ">
            <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
              <div className="btns flex justify-end px-2 mt-3 items-center">
                {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span> */}
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><RiDeleteBinLine /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/cpu.png" alt='bag' width={178} height={130} className=''></Image>
              </div>
              <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link>
              </div>
            </div>
            <div className="price w-[176px] h-[56px]  mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                RGB liquid CPU Cooler
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$1960</h1>
                {/* <h1 className="line-through">$1160</h1> */}

              </span>
            </div>
          </div>
          {/* CPU */}

          {/* GamePad */}
          <div className="game w-[280px] h-[322px] ">
            <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
              <div className="btns flex justify-end px-2 mt-3 items-center">
                {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span> */}
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><RiDeleteBinLine /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/gamebox.png" alt='bag' width={320} height={320} className='w-[300px] h-[178px]'></Image>
              </div>
              <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link> 
              </div>
            </div>
            <div className="price w-[221px] h-[56px]mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                GP11 Shooter USB Gamepad
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$550</h1>
                {/* <h1 className="line-through">$1160</h1> */}

              </span>
            </div>
          </div>
          {/* GamePad */}

          {/* jacket */}
          <div className="jacket w-[290px] h-[322px] ">
            <div className="cart w-[290px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
              <div className="btns flex justify-end px-2 mt-3 items-center">
                {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span> */}
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><RiDeleteBinLine /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/jacket.png" alt='bag' width={178} height={130} className=''></Image>
              </div>
              <div className="add_cart w-[290px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link> 
              </div>
            </div>
            <div className="price w-[163px] h-[56px]  mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                Quilted Satin Jacket
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$750</h1>
                {/* <h1 className="line-through">$1160</h1> */}

              </span>
            </div>
          </div>
          {/* jacket */}
        </div>
        {/* Row2 */}

        {/* Row3 */}
        <div className="row1 w-[1300px] h-[56px] flex items-center justify-between">
          <h1>
            <Link href="/wishlist" className='font-poppins text-base font-medium leading-6 text-left flex justify-center items-center gap-[7px]'><span className='w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]' ></span>Just For You</Link>
          </h1>
          <div className="w-[160px] h-[56px] px-[48px] py-[16px] flex  rounded-md border-2 border-black ">
            <p className="font-poppins text-base font-medium leading-6">
            <Link href={"/"}>  See All</Link>
            </p>
          </div>
        </div>
        {/* Row3 */}

        {/* Row4 */}
        <div className="row2 w-[1300px] h-[350px] flex items-center justify-between gap-[30px] ">

          {/* laptop */}
          <div className="bag w-[280px] h-[350px] ">
            <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
              <div className="btns flex justify-between px-2 mt-3 items-center">
                <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span>
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><LuEye /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/laptop.png" alt='bag' width={178} height={130} className=''></Image>
              </div>
              <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link> 
              </div>
            </div>
            <div className="price w-[206px] h-[84px] mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
                ASUS FHD Gaming Laptop
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
          {/* laptop */}

          {/* Led */}
          <div className="speaker w-[280px] h-[350px] ">
            <div className="cart w-[280px] h-[250px] bg-[#F5F5F5] rounded-[4px] flex flex-col ">
              <div className="btns flex justify-end px-2 mt-3 items-center">
                {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span> */}
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><LuEye /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/led.png" alt='bag' width={178} height={130} className=''></Image>
              </div>
              <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link> 
              </div>
            </div>
            <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
              IPS LCD Gaming Monitor
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$1160</h1>
                {/* <h1 className="line-through">$1160</h1> */}
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
                <span className="w-[55px] h-[26px] bg-[#00FF66] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center text-white">
                  New
                </span>
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><LuEye /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/gamepad.png" alt='bag' width={320} height={320} className='w-[172px] h-[182px]'></Image>
              </div>
              <div className="add_cart w-[280px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link>
              </div>
            </div>
            <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
              HAVIT HV-G92 Gamepad
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$560</h1>
                {/* <h1 className="line-through">$1160</h1> */}
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
              <div className="btns flex justify-end px-2 mt-3 items-center">
                {/* <span className="w-[55px] h-[26px] bg-[#DB4444] rounded pl-4 pr-4 pt-1 pb-1 flex justify-center items-center">
                  -35%
                </span> */}
                <span className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'><LuEye /></span>
              </div>
              <div className='bag_img flex justify-center items-center mt-[-20px]'>
                <Image src="/keybord.png" alt='bag' width={178} height={130} className=''></Image>
              </div>
              <div className="add_cart w-[290px] h-[41px] bg-black mt-[6px] rounded-bl-[4px] rounded-br-[4px] text-white flex justify-center items-center gap-2">
                <FaCartShopping></FaCartShopping><Link href={"/cart"}>Add To Cart</Link>
              </div>
            </div>
          
            <div className="price w-[206px] h-[84px]  mt-[16px] flex flex-col justify-between">
              <h1 className="font-poppins text-16px font-medium leading-6 text-left">
              AK-900 Wired Keyboard
              </h1>
              <span className='flex justify-left items-center gap-3'>
                <h1 className='text-[#DB4444] font-[16px]'>$200</h1>
                {/* <h1 className="line-through">$1160</h1> */}
              </span>
              <span className='flex justify-left items-center gap-2'>
                <span className='flex'><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar><FaStar className='w-[20px] h-[20px] text-[#FFAD33]'></FaStar></span>
                (65)
              </span>
            </div>
          </div>
          {/* Keybord */}
        </div>
        {/* Row4 */}
      </div>
    </div>
  )
}
