'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!name || !email || !password) {
      setMessage('All fields are required');
      return false;
    }
    if (!validateEmail(email)) {
      setMessage('Invalid email format');
      return false;
    }
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://e-commerce-apis-task3.vercel.app/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration Error:', errorData); // Log the error response
        throw new Error(errorData.message || 'Failed to register');
      }

      // const data = await response.json();
      // const token = data.token; 

      // // Store the token in local storage
      // localStorage.setItem('authToken', token);

      setMessage('Registration successful! Please login.'); 
      setName('');
      setEmail('');
      setPassword('');
    } catch (error: any) {
      setMessage(`Error during registration: ${error.message}`); 
    }
  };

  return (
    <>
      <div className='w-full max-w-[1518px] min-h-screen mt-[60px] flex flex-col lg:flex-row gap-8 lg:gap-[149px] px-4 sm:px-8 lg:px-12'>
        <div className='w-full lg:w-[770px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] bg-slate-400 relative'>
          <Image
            src="/signup.jpeg"
            alt='signup'
            layout='fill'
            objectFit='cover'
            className='absolute top-0 left-0'
          />
        </div>

        <div className=' w-full max-w-[450px] h-auto lg:h-[500px] mt-6 lg:mt-12 p-4'>
          <span className='block mb-4'>
            <h2 className='text-[24px] sm:text-[28px] lg:text-[36px] font-medium mb-2 leading-[30px] tracking-[0.04em] text-left text-black'>
              Create an account
            </h2>
            <p className='text-black'>
              Enter your details below
            </p>
          </span>
          <form onSubmit={handleSignUp}>
            <div className='mb-2'>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className='w-full border-b-2 border-[#000000] p-2'
                onChange={(e) => setName(e.target.value)}  
                placeholder='Name' 
              />
            </div>
            <br />

            <div className='mb-2'>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className='w-full border-b-2 border-[#000000] p-2' 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' 
              />
            </div>
            <br />
            <div className='mb-4'>
              <input 
                type="password" 
                id="password" 
                name="password" 
                className='w-full border-b-2 border-[#000000] p-2' 
                placeholder='Password'     
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type='submit' className='w-full bg-[#DB4444] text-white h-[56px] rounded mb-2'>
              Create Account
            </button>
            <div className="flex justify-center items-center gap-0 h-[56px] rounded border-2 border-gray-300">
              <button className="w-full py-2 rounded flex justify-center items-center gap-2 bg-white text-black">
                <FaGoogle />
                Sign up with Google
              </button>
            </div>
          </form>
          <p className='mt-4 text-center text-sm'>
            Already have an account? <Link href='/login' className='border-b-2 text-blue-500'>Log in</Link>
          </p>
          {message && <p className={`mt-4 text-center text-sm ${message.startsWith('Registration') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        </div>
      </div>
    </>
  );
}
