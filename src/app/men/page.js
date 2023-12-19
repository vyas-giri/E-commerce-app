"use client";
import React, { useEffect } from 'react'
import { data } from '@/utils/data';
import ProductItem from '@/components/ProductItem';

function Men() {
  return (
    <section className="text-gray-400 bg-gray-950 dark body-font">
    <div class="container px-5 py-24 mx-auto">
          <ProductItem />
    </div>
  </section>
  )
}

export default Men