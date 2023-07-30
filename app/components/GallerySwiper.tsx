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
import { ImagePath } from '@/lib/constant';
import { type } from 'os';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { SwiperContainer, SwiperMobileContainer } from '@/styles/globalStyles';

type SlideType = {
  image?: string;
  id: number;
}
interface GallerySwiperProps {
  slides: SlideType[]
}
const GallerySwiper: React.FC<GallerySwiperProps> = ({
  slides
}) => {
  const router = useRouter()
  return (
    <>
      <SwiperContainer>
        <Swiper
          keyboard={{
            enabled: true,
          }}
          effect={'coverflow'}
          grabCursor={true}
          loop={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{

            769: {
              slidesPerView: 2,


            },
          }}
          // mousewheel={true}
          autoplay={{
            // delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            // clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
          className="swiper_container"
        >
          {
            slides?.map((slide: any, index: number) => (
              <SwiperSlide key={index} >
                <SwiperImage >
                  <img src={slide?.image} alt="slide_image" onClick={() => { router.push(`/galleryView?id=${slide.id}`) }} /></SwiperImage>

                <ContentContainer onClick={() => { alert('clicked'), router.push(`/galleryView?id=${slide.id}`) }}>
                  <FieldTitle> {slide?.title}</FieldTitle>
                </ContentContainer>
              </SwiperSlide>
            ))
          }






          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow" >
              <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: "#17cf97" }} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: "#17cf97" }} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </SwiperContainer>
      <SwiperMobileContainer>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mobile-swiper"
        >

          {
            slides?.map((slide: any, index: number) => (
              <SwiperSlide key={index} >
                <SwiperImage >
                  <img src={slide?.image} alt="slide_image" onClick={() => { router.push(`/galleryView?id=${slide.id}`) }} /></SwiperImage>

                <ContentContainer onClick={() => { router.push(`/galleryView?id=${slide.id}`) }}>
                  <FieldTitle> {slide?.title}</FieldTitle>
                </ContentContainer>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </SwiperMobileContainer>
    </>


  )
}

export default GallerySwiper
const ContentContainer = styled.div`
position: absolute;
top: 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
left: 24%;
gap:1rem;
height: 70%;
  @media screen and (max-width:768px) {
  width: 55%;
  margin-top: 4rem;
  
}

`
const FieldTitle = styled.h1`
  font-size: 3rem;
  color: white;
   text-shadow: 2px 2px #ff0000;
  font-weight: bold;
  
`
const SwiperImage = styled.div`
height: 25rem;
@media screen and (max-width:768px) {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
}


`