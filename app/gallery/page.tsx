'use client';

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ImagePath, gallerySlides } from '@/lib/constant';
import GallerySwiper from '@/components/GallerySwiper';

const Gallery: NextPage = () => {

  return (
    <><NavBar />
      <GallerySwiper slides={gallerySlides} />
      <Footer /></>
  )
}

export default Gallery