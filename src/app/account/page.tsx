import Link from 'next/link';
import React from 'react';


export default function page() {
  return (
    <>
      {/* row1 */}
      <div className='row1 px-7 ml-[80px] mt-[120px] mb-[80px] flex justify-between items-center'>
        <span><Link href="/">Home</Link> <b>/ My Account</b></span>
        <span className='mr-20 font-poppins text-sm font-normal leading-6 text-left'>
          Welcome! <Link href="/" className='text-[#DB4444]'>Md Rimel</Link>
        </span>
      </div>
      {/* row1 */}

      {/* Row2 */}
      <div className="row2 w-[1518px] h-[630px]  flex justify-center mb-[140px]">
        <div className="main w-[1318px] h-[630px] flex justify-between">

          <div className="left_box w-[250px] h-[300px] flex flex-col justify-center gap-4  ">
            <h1 className="font-poppins text-lg font-medium leading-6 text-left mt-[-6vh]">
              Manage My Account
            </h1>

            <span className='ml-16'>
              <h1 className="font-poppins text-lg font-normal leading-6 text-left text-[#DB4444]">
                My Profile
              </h1>

              <p className=' className="font-poppins text-lg font-normal leading-6 text-left '>Address Book</p>
              <p className=' className="font-poppins text-lg font-normal leading-6 text-left text-[#DB4444]"'>My Payment Options</p>
            </span>
            <h1 className="font-poppins text-lg font-medium leading-6 text-left">My Orders</h1>
            <span className='ml-16'>
              <p className=' className="font-poppins text-lg font-normal leading-6 text-left text-[#DB4444]"'>My Returns</p>
              <p className=' className="font-poppins text-lg font-normal leading-6 text-left text-[#DB4444]"'>My Cancellations</p>
            </span>
            <h1 className="font-poppins text-lg font-medium leading-6 text-left">My WishList</h1>
          </div>

          <div className="right_box w-[1000px] h-[630px] px-20 py-10 flex flex-col gap-6">
            <h1 className="font-poppins text-xl font-medium leading-7 text-left text-[#DB4444]">
              Edit Your Profile
            </h1>

            <div className="row1 w-{710px}  h-[82px] flex justify-between items-center">
              <span className='flex flex-col gap-2'>
                <h1 className="font-poppins text-lg font-normal leading-6 text-left"> First Name</h1>

                <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[370px] h-12' >
                  <input type="text" placeholder='Md' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
                </span>
              </span>
              <span className='flex flex-col gap-2'>
                <h1 className="font-poppins text-lg font-normal leading-6 text-left">Last Name</h1>
                <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[370px] h-12' >
                  <input type="text" placeholder='Rimel' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
                </span>
              </span>
            </div>

            <div className="row2 w-{710px}  h-[82px] flex justify-between items-center">
              <span className='flex flex-col gap-2'>
                <h1 className="font-poppins text-lg font-normal leading-6 text-left"> Email</h1>

                <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[370px] h-12' >
                  <input type="email" placeholder='rimel1111@gmail.com' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
                </span>
              </span>
              <span className='flex flex-col gap-2'>
                <h1 className="font-poppins text-lg font-normal leading-6 text-left">Address</h1>
                <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[370px] h-12' >
                  <input type="text" placeholder='Kingston,5236,United State' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
                </span>
              </span>
            </div>


            <div className="row3 w-[840px]  h-[212px] flex flex-col justify-between">

              <h1 className="font-poppins text-lg font-normal leading-6 text-left"> Password Changes</h1>

              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[840px] h-12' >
                <input type="email" placeholder='Current Passwod' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
              </span>
              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[840px] h-12' >
                <input type="text" placeholder='New Passwod' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
              </span>
              <span className='flex bg-[#F5F5F5] px-2 py-2 rounded-sm w-[840px] h-12' >
                <input type="text" placeholder='Confirm New Passwod' className='px-2 border-0 bg-[#F5F5F5] rounded-sm' />
              </span>

            </div>

            <div className="row4 w-[840px]  h-[60px] flex justify-end">
              <div className="save_btn w-[310] h-14 flex justify-center items-center gap-8">
                <span className="font-poppins text-lg font-normal leading-6 text-left">
                  Cancel
                </span>

                <span className='w- py-4 px-12 gap-2.5 rounded-md bg-[#DB4444] text-white'>Save Changes</span>


              </div>
            </div>


          </div>
        </div>
      </div>
      {/* Row2 */}



    </>
  )
}
