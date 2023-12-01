"use client";

import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const Slideshow = () => {

  return (

    <Carousel showThumbs={false} autoPlay infiniteLoop interval={5000} emulateTouch>
      <Image
        src={'/slideshow/hangingclothes1.jpg'}
        className='brightness-75'
        alt='home1'
        width={1920}
        height={800}
        />
        <Image
        src={'/slideshow/banner-1.jpg'}
        className='brightness-75'
        alt='home2'
        width={1920}
        height={800}/>
        <Image
        src={'/slideshow/banner-2.jpg'}
        className='brightness-75'
        alt='home2'
        width={1920}
        height={800}/>
        <Image
        src={'/slideshow/banner-3.jpg'}
        className='brightness-75'
        alt='home2'
        width={1920}
        height={800}/>

    </Carousel>
  )
}

export default Slideshow