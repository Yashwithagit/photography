'use client';

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { NextPage } from 'next'
import React from 'react'
import { gallerySlides } from '@/lib/constant';
import GallerySwiper from '@/components/GallerySwiper';
import { PageTitle } from '@/styles/globalStyles';

const Gallery: NextPage = () => {

  return (
    <><NavBar /><PageTitle>Gallery</PageTitle>

      <GallerySwiper slides={gallerySlides} />
      <Footer /></>
  )
}

export default Gallery
