'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for displaying success or error messages
  const router = useRouter(); // Initialize useRouter hook from 'next/navigation'

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      const response = await fetch('https://e-commerce-apis-task3.vercel.app/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      const token = data.token; // Assuming the token is in the response under the 'token' key

      // Store the token in local storage
      localStorage.setItem('authToken', token);

      setMessage('Login successful! Redirecting...'); // Display success message

      // Redirect to the home page after a short delay
      setTimeout(() => {
        router.push('/'); // Use router.push for navigation
      }, 1500);

      console.log('Login successful:', data);
    } catch (error: any) {
      setMessage('Error during login: ' + error.message); // Display error message
    }
  };

  return (
    <>
      <div className='w-full min-h-screen h-auto mt-16 flex flex-col lg:flex-row gap-8 lg:gap-[149px] px-4 sm:px-8 lg:px-12'>
        <div className='w-full lg:w-[770px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] relative'>
          <Image
            src="/signup.jpeg"
            alt='signup'
            layout='fill'
            objectFit='cover'
            className='absolute top-0 left-0'
          />
        </div>

        <div className='w-full max-w-md mx-auto lg:max-w-[450px] h-auto lg:h-[500px] mt-6 lg:mt-20 p-4 rounded-lg shadow-md'>
          <h2 className='text-[24px] sm:text-[28px] lg:text-[36px] font-medium mb-2 leading-[30px] tracking-[0.04em] text-left text-black'>
            Enter your details below
          </h2>
          <br />
          <p className='mb-4 text-black'>
            Please enter your email and password to login.
          </p>
          <br />
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <input
                type="email"
                id="email"
                name="email"
                className='w-full border-b-2 border-[#000000] p-2 rounded-lg'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className='mb-4'>
              <input
                type="password"
                id="password"
                name="password"
                className='w-full border-b-2 border-[#000000] p-2 rounded-lg'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button type='submit' className='w-full bg-[#DB4444] text-white h-[56px] rounded-lg mb-4 flex items-center justify-center'>
              Login
            </button>

            <div className='flex items-center justify-between'>
              <br />
              <Link href='/forgot-password'>
                <br />
                <p className='text-[#DB4444] text-[14px] sm:text-[16px]'>
                  Forget Password?
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
