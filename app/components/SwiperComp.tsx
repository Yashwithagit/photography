/* eslint-disable @next/next/no-img-element */
'use-client';

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ImagePath, slideList } from "@/lib/constant";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

interface ContentProps {
  show?: boolean;
}

const SwiperComp: React.FC = () => {
  useEffect(() => {
    console.log(slideList)
  }, [slideList])

  const onMouseEvent = (id: number, event: boolean) => {
    slideList.map((item) => {
      if (item.id === id && event === true) {
        item['event'] = true;
        return item
      }
      if (item.id === id && event === false) {
        item['event'] = false;
        return item
      }

    })
    console.log(id)


  }
  return (
    <div className="container">

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slideList.map((slide: any, index: number) => (
          <SwiperSlide key={index}>
            <SwiperImage onMouseOver={() => onMouseEvent(slide?.id, true)} onMouseOut={() => onMouseEvent(slide?.id, false)}>
              <img src={slide.image} alt={slide.title} />
            </SwiperImage>
            <ContentContainer show={true} key={index}>
              <FieldTitle>Name: {slide?.title}</FieldTitle>
              <FieldTitle>Website: {slide?.title}</FieldTitle>
            </ContentContainer>

          </SwiperSlide>
        ))}



        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color: "#17cf97" }} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color: "#17cf97" }} />
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </div>
  )

}
export default React.memo(SwiperComp)
const SwiperImage = styled.div`
width: 100%;
height: 30rem;
:hover {
  filter: blur(0.25rem);
}
`

const ContentContainer = styled.div<ContentProps>`
position: absolute;
top: 1rem;
display: ${(props) => props.show ? 'flex' : 'none'};
justify-content: center;
align-items: center;
flex-direction: column;
left: 6rem;
gap:1rem;
height: 50%;

`
const FieldTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
  
`