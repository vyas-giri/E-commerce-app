import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductRate from './ProductRate'
import { data } from '@/utils/data'

function ProductItem() {
  const { products } = data;
  return (
    <div class="flex flex-wrap -m-4">
    {products.map((product) => {
      if (product.id < 5) {
      return (
      <div key={product.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link class="block relative h-48 rounded overflow-hidden" href={`/products/${product.id}`}>
            <Image
            alt={products.name} 
            class="object-cover object-center w-full h-full block" 
            width={420} 
            height={260} 
            src={product.image}/>
          </Link>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Men&apos;s Fashion</h3>
            <Link class="text-white title-font text-lg font-medium cursor-pointer" href={`/products/${product.id}`}>{product.name}</Link>
            <ProductRate rate={product.rating} count={product.numReviews} />
            <h2>${product.price}</h2>
          </div>
        </div>
    )}
    else {
      return null;
    }
    })}
    </div>
  )
}

export default ProductItem


export const ProductItem2 = () => {
  const { products } = data;
  return (
    <div class="flex flex-wrap -m-4">
    {products.map((product) => {
      if (product.id > 4 && product.id < 8) {
      return (
      <div key={product.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link class="block relative h-48 rounded overflow-hidden" href={`/products/${product.id}`}>
            <Image
            alt={products.name} 
            class="object-cover object-center w-full h-full block" 
            width={420} 
            height={260} 
            src={product.image}/>
          </Link>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Men&apos;s Fashion</h3>
            <Link class="text-white title-font text-lg font-medium cursor-pointer" href={`/products/${product.id}`}>{product.name}</Link>
            <ProductRate rate={product.rating} count={product.numReviews} />
            <h2>${product.price}</h2>
          </div>
        </div>
    )}
    else {
      return null;
    }
    })}
    </div>
  )
}


export const ProductItem3 = () => {
  const { products } = data;
  return (
    <div class="flex flex-wrap -m-4">
    {products.map((product) => {
      if (product.id >= 8) {
      return (
      <div key={product.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link class="block relative h-48 rounded overflow-hidden" href={`/products/${product.id}`}>
            <Image
            alt={products.name} 
            class="object-cover object-center w-full h-full block" 
            width={420} 
            height={260} 
            src={product.image}/>
          </Link>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Men&apos;s Fashion</h3>
            <Link class="text-white title-font text-lg font-medium cursor-pointer" href={`/products/${product.id}`}>{product.name}</Link>
            <ProductRate rate={product.rating} count={product.numReviews} />
            <h2>${product.price}</h2>
          </div>
        </div>
    )}
    else {
      return null;
    }
    })}
    </div>
  )
}