/* eslint-disable @next/next/no-img-element */
'use-client';

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ImagePath, slideList } from "@/lib/constant";
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperContainer, SwiperMobileContainer } from '@/styles/globalStyles';
import Link from 'next/link';

interface ContentProps {
  show?: boolean;
}

const SwiperComp: React.FC = () => {
  const [list, setList] = useState(slideList);
  const buttonRef = useRef<HTMLButtonElement>(null);


  const onMouseEvent = (id: number, event: boolean) => {

    const data = list.filter((item) => {
      console.log(item.id, item.event)
      if (item.id === id) {
        item['event'] = !item.event
      }
      return item
    })

    setList(data);


  }
  console.log(buttonRef)
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
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            // clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard, Autoplay]}
          className="swiper_container"
        >
          {list.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <SwiperImage >
                <img src={slide.image} alt={slide.title} onMouseOver={() => onMouseEvent(slide?.id, true)} onMouseOut={() => onMouseEvent(slide?.id, false)} />
              </SwiperImage>

              <ContentContainer show={slide?.event} >
                <FieldTitle>Name: {slide?.title}</FieldTitle>
                <a target="_blank" href={slide?.link} > <Button ref={buttonRef}>Go to website</Button></a>
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
          {list.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <SwiperImage >

                <img src={slide.image} alt={slide.title} onMouseOver={() => onMouseEvent(slide?.id, true)} onMouseOut={() => onMouseEvent(slide?.id, false)} />
              </SwiperImage>

              <ContentContainer show={slide?.event} >
                <FieldTitle>Name: {slide?.title}</FieldTitle>
                <a target="_blank" href={slide?.link} > <Button ref={buttonRef}>Go to website</Button></a>
              </ContentContainer>



            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperMobileContainer >
    </>
  )

}
export default React.memo(SwiperComp)
const SwiperImage = styled.div`
      width: 100%;
      height: 25rem;
      :hover {
        filter: blur(0.1rem);
      border: 4px solid white;
}
@media screen and (max-width:768px) {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  
}
      `

const ContentContainer = styled.div<ContentProps>`
        position: absolute;
        top: 1rem;
        display: ${(props) => props.show ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        flex-direction: column;
        left: 15%;
        gap:1rem;
        height: 70%;
        @media screen and (max-width:768px) {
  width: 70%;
  display: ${(props) => props.show ? 'flex' : 'none'};
  margin-top: 4rem;
  
}

        `
const FieldTitle = styled.h1`
        font-size: 1.5rem;
        color: white;

        `

const Button = styled.button`
          padding: 1rem;
          background-color: #d72fee;
          outline: none;
          border: none;
          border-radius: 1.5rem;
          color: white;

        `