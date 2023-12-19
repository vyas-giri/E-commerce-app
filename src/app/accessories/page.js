import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProductItem3 } from '@/components/ProductItem'

function Accessories() {
  return (
    <section className="text-gray-400 bg-gray-950 dark body-font">
    <div class="container px-5 py-24 mx-auto">
          <ProductItem3 />
    </div>
  </section>
  )
}

export default Accessories