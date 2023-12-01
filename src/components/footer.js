import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer class="text-gray-400 bg-gray-950 body-font ">
  <div class="container px-5 py-10 mx-auto ">
    <div class="flex flex-wrap md:text-left text-center order-first justify-center items-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font underline underline-offset-2 tracking-widest text-sm mb-3 text-[#59daff] font-bold">Newly Added</h2>
        <nav class="list-none mb-5 py-2 px-3">
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Trousers</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Torso</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Jackets</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Footwear</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font underline underline-offset-2 tracking-widest text-sm mb-3 text-[#59daff] font-bold">On Sale</h2>
        <nav class="list-none mb-5 py-2">
        <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Trousers</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Shirts</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Hoodies</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Accessories</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font underline underline-offset-2 tracking-widest text-sm mb-3 text-[#59daff] font-bold">Trending</h2>
        <nav class="list-none mb-5 py-2 px-1">
        <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Cargos</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Oversized</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Sweatshirts</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-[#59daff] cursor-pointer">Accessories</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="text" id="footer-field" name="footer-field" placeholder='Email' class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black hover:text-white bg-[#59daff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
        </div>
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Subscribe to recieve updates
          <br class="lg:block hidden"/> 
          about our new products.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-950 bg-opacity-75">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2023 StyleSanctum
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
        <a class="ml-3 text-gray-400" href='https://twitter.com/VyasGiri3'>
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className='ml-2' href='https://github.com/vyas-giri'>
        <Image 
        className='rounded-full'
        src="/icons8-github.gif" 
        alt="github"
        width={32}
        height={32}
        />
        </a>
        <a class="ml-3 text-gray-400" href='https://www.instagram.com/vyas_kun/'>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 mr-4 text-gray-400" href='https://www.linkedin.com/in/vyas-giri/'>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer