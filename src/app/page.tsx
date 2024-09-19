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
import HeroSection from '@/components/HeroSection';
import Todays from '@/components/Todays';
import Categories from '@/components/Categories';
import ThisMonth from '@/components/ThisMonth';
import Headset from '@/components/Headset';
import OurProducts from '@/components/OurProducts';
import Featured from '@/components/Featured';
import Services from '@/components/Services';


export default function page() {
  return (
    <>
      {/* Hero Section Frame 560 */}
      <HeroSection/>
      {/* Hero Section Frame 560 */}

      {/* Todays */}
        <Todays/>
      {/* Todays */}


      {/* Categories */}
      <Categories/>
      {/* Categories */}



      {/* This Month */}
      <ThisMonth/>
      {/* This Month */}


      {/* Headset */}
        <Headset/>
      {/* Headset */}


      {/* Our Products*/}
        <OurProducts/>
      {/* Our Products */}


      {/* Featured */}
        <Featured/>
      {/* Featured */}


      
    {/* Services */}
    <Services/>
    {/* Services */}
    </>
  )
}
