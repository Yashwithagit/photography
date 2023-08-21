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
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_BASE_PATH, photographerList } from '@/lib/apiPath';

interface ContentProps {
  show?: boolean;
}


const SwiperComp: React.FC = () => {


  const [photoList, sePhotoList] = useState([])
  const getPhotographerList = async () => {
    await axios
      .get(API_BASE_PATH + photographerList, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .then(
        (response) => {
          if (response.data.responseCode === 100001) {
            const newData = response?.data?.responseData?.map(
              (item: any, index: number) => {
                item["index"] = index + 1;
                return item;
              }
            );
            sePhotoList(newData);
          } else {
            Swal.fire({
              icon: "error",
              title: `Something went wrong`,
              showConfirmButton: true,
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: `${error}`,
            showConfirmButton: true,
          });
        }
      );
  };
  useEffect(() => {
    getPhotographerList()
  }, [])

  const onMouseEvent = (id: number) => {

    const data = photoList.filter((item: any) => {
      if (item.pid === id) {

        item['event'] = !item.event
      }
      return item
    })

    sePhotoList(data);


  }

  return (
    <>
      <SwiperContainer>

        <Swiper
          keyboard={{
            enabled: true,
          }}
          effect={'coverflow'}
          grabCursor={true}
          // loop={true}
          slidesPerView={1}
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
          {photoList.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <SwiperImage onMouseOver={() => onMouseEvent(slide?.pid)} onMouseOut={() => onMouseEvent(slide?.pid)}>
                <LinkContainer target="_blank" href={slide?.website_link} >
                  <img src={slide.url} alt={''} /></LinkContainer>
              </SwiperImage>
              {
                slide?.event &&
                <ContentContainer  >
                  <FieldTitle>Name: {slide?.first_name + slide?.last_name}</FieldTitle>
                  <Button >Go to website</Button>
                </ContentContainer>
              }




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
      </SwiperContainer >
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
          {photoList.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <SwiperImage onMouseOver={() => onMouseEvent(slide?.pid)} onMouseOut={() => onMouseEvent(slide?.pid)}>
                <LinkContainer target="_blank" href={slide?.website_link} >
                  <img src={slide.url} alt={''} /></LinkContainer>
              </SwiperImage>
              {
                slide?.event &&
                <ContentContainer  >
                  <FieldTitle>Name: {slide?.first_name + slide?.last_name}</FieldTitle>
                  <Button>Go to website</Button>
                </ContentContainer>
              }




            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperMobileContainer >
    </>
  )

}
export default React.memo(SwiperComp)
const SwiperImage = styled.div`
      width: 20rem;
      height: 25rem;
      
        :hover {
           border-radius: 2rem;
        filter: blur(0.1rem);
      border: 4px solid white ;
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
       
         border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        left: 10rem;
        gap:1rem;
        height: 17rem;
        
        @media screen and (max-width:768px) {
  
  display: ${(props) => props.show ? 'flex' : 'none'};
  margin-top: 4rem;
  
}

        `
const FieldTitle = styled.h1`
        font-size: 1.5rem;
  color: white;
   text-shadow: 2px 2px #ff0000;
  font-weight: bold;

        `

const Button = styled.button`
          padding: 1rem 1.2rem;
          background-color: #d72fee;
          outline: none;
          border: none;
          border-radius: 1.5rem;
          color: white;
font-size: 1.2rem;
        `


const LinkContainer = styled.a`
 width: 30rem;
 display: block;
 border-radius:2rem;
      height: 25rem;
`