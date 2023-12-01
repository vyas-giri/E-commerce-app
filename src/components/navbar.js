"use client";

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { hideLoading } from '@/redux/slices/cartSlice';
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';


function Navbar() {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const pathname = usePathname()

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
    <header class="text-gray-400 dark body-font bg-gray-950 sticky z-10">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
      <span class="ml-3 text-2xl hover:text-[#59daff]">StyleSanctum</span>
    </Link>
    <nav class="md:ml-5 flex flex-wrap items-center text-base justify-center text-center md:mr-10 lg:mr-16">
      <Link href={"/men"} className="relative hover:text-[#59daff] text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#59daff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-5">Men</Link>
      <Link href={"/women"} className="relative text-xl hover:text-[#59daff] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#59daff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-5">Women</Link>
      <Link href={"/combos"} className="relative hover:text-[#59daff] text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#59daff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-5">Combos</Link>
      <Link href={"/accessories"} className="relative hover:text-[#59daff] text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#59daff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left mr-5">Accessories</Link>
    </nav>
    <button onClick={toggleCart} class="inline-flex items-center top-4 absolute right-4 bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded-full hover:text-[#59daff] text-base mr-3"><AiOutlineShoppingCart size={'2em'}/></button>
  </div>

  <div ref={ref} className='sidebar w-80 h-[100vh] absolute top-0 right-0 bg-gray-900 p-7 text-white transform transition-transform translate-x-full'>
    <h2 className='font-bold text-xl border-b-2 border-blue-500 p-3 text-center text-[#59daff]'>Your Cart</h2>
    <span onClick={toggleCart} className='absolute top-4 right-3 cursor-pointer hover:text-[#59daff]'><AiFillCloseCircle size={'2em'}/></span>
    <ol className='mt-4 p-2'>
      {loading? (
        <div>Loading...</div>) : cartItems.length === 0 ? (
        <div className='text-white text-lg text-center'>Your cart is empty!</div>
      ) : (
        <>
        <div>
          {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-2 justify-between flex items-center"
              >
                <Link
                  href={`/product/${item.id}`}
                  className="flex items-center p-2"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="p-1"
                  ></Image>
                </Link> {item.name}
                <div className='text-white justify-center items-center text-center flex space-x-2'
                  value={item.qty}
                  onChange={(e) =>
                    addToCartHandler(item, Number(e.target.value))
                  }
                >
                  {item.qty > 1 ?(<AiOutlineMinusCircle onClick={() => {
                    {
                      let newQty = qty
                      if (true) {
                        const existItem = cartItems.find((x) => x.id === item.id)
                        if (existItem) {
                          if (existItem.qty - 1 <= item.countInStock) {
                            newQty = existItem.qty - 1
                          }
                        }
                      }
                      dispatch(addToCart({ ...item, qty: newQty }))
                    }
                  }} className='mr-2 cursor-pointer'/>) : (<AiOutlineMinusCircle className='mr-2 cursor-pointer' onClick={
                    () => removeFromCartHandler(item.id)
                  }/>)}
                  {item.qty}
                  <AiOutlinePlusCircle onClick= {() => {
                    {
                      let newQty = qty
                      if (true) {
                        const existItem = cartItems.find((x) => x.id === item.id)
                        if (existItem) {
                          if (existItem.qty + 1 <= item.countInStock) {
                            newQty = existItem.qty + 1
                          } else {
                            return alert('No more product exist')
                          }
                        }
                      }
                      dispatch(addToCart({ ...item, qty: newQty }))
                    }
                  }} className='cursor-pointer'/>
                </div>
                </div>))}
                <div className='flex items-center text-md mt-7 space-x-3 justify-center text-gray-400 border-b-2 border-blue-500 p-3 mb-1'>
    <button onClick={() => removeFromCartHandler(item.id)} id='clearcartbtn' className='flex py-3 px-2 text-sm border border-blue-500 hover:text-white hover:bg-cyan-950 bg-gray-900 rounded-lg'>Clear Cart</button>
    <Link href={'/checkout'}><button className='flex py-3 px-3 border border-blue-500 hover:bg-[#59daff] bg-gray-900 rounded-lg text-sm hover:text-black'><BsBagCheck className='m-1 mr-1'/> Checkout</button></Link>
    </div>
    <div className='p-2 flex justify-between'>
    <div className='font-bold text-[#59daff] underline underline-offset-2'>Subtotal</div>
    <div className='text-white'>${itemsPrice}</div>
    </div>
    </div>
    </>
      )}
    </ol>
  </div>
</header>
  )
}

{/* <select className='text-black'
                  value={item.qty}
                  onChange={(e) =>
                    addToCartHandler(item, Number(e.target.value))
                  }
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select> */}

export default Navbar