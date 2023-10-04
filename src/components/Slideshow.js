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
        src={'/slideshow/hangingclothes(1).jpg'}
        alt='home1'
        width={1200}
        height={1000}
        />
        <Image
        src={'/slideshow/rampwalk.jpg'}
        alt='home2'
        width={1200}
        height={1000}/>

    </Carousel>
  )
}

export default Slideshow