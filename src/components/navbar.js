"use client";

import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs';


function Navbar() {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
      <span class="ml-3 text-xl">StyleSanctum</span>
    </Link>
    <nav class="md:ml-5 flex flex-wrap items-center text-base justify-center text-center md:mr-10 lg:mr-16">
      <Link href={"/cargos"} className='mr-5 hover:text-white hover:border-b-2 border-blue-500 font-semibold'>Cargos</Link>
      <Link href={"/tees"} className='mr-5 hover:text-white hover:border-b-2 border-blue-500 font-semibold'>Tees</Link>
      <Link href={"/hoodies"} className='mr-5 hover:text-white hover:border-b-2 border-blue-500 font-semibold'>Hoodies</Link>
      <Link href={"/accessories"} className='mr-5 hover:text-white hover:border-b-2 border-blue-500 font-semibold'>Accessories</Link>
    </nav>
    <button onClick={toggleCart} class="inline-flex items-center top-4 absolute right-4 bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded-full hover:text-white text-base mr-3"><AiOutlineShoppingCart size={'2em'}/></button>
  </div>

  <div ref={ref} className='sidebar w-80 h-full absolute top-0 right-0 bg-gray-800 p-7 text-white z-10 transform transition-transform translate-x-full'>
    <h2 className='font-bold text-xl border-b-2 border-blue-500 p-3 text-center'>Your Cart</h2>
    <span onClick={toggleCart} className='absolute top-4 right-3 cursor-pointer'><AiFillCloseCircle size={'2em'}/></span>
    <ol className='mt-4 p-2'>
      <li className='flex'>
        <div className='w-2/3 font-semibold'>T-shirt : dragon design</div>
        <div className='flex font-semibold items-center justify-between w-1/3 text-xl'>
          <AiOutlineMinusCircle className='cursor-pointer text-blue-500'/> 1 <AiOutlinePlusCircle className='cursor-pointer text-blue-500'/>
          </div>
      </li>
    </ol>
    <div className='flex items-center justify-center text-lg border-2 border-blue-500 bg-gray-900 mt-10 text-gray-400 hover:text-white rounded-md'>
    <button className='flex px-5 py-3'><BsBagCheck className='m-1 mr-2'/> Checkout</button>
    </div>
  </div>
</header>
  )
}

export default Navbar