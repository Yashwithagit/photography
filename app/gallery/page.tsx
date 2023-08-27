'use client';

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { NextPage } from 'next'
import React from 'react'
import { gallerySlides } from '@/lib/constant';
import { GalleryContainer, OuterContainer, PageTitle } from '@/styles/globalStyles';
import PageWithAuth from '@/context/auth';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Gallery: NextPage = () => {
  const router = useRouter()
  return (
    <><NavBar /><PageTitle>Gallery</PageTitle>
      <OuterContainer>
        <GalleryContainer>
          {
            gallerySlides.map((item: any, index) => (
              <GalleryImgContainer key={index} onClick={() => router.push(`/galleryView?id=${item.id}`)}>
                <GalleryImg src={item.image}></GalleryImg>
                <GalleryImgBottom>
                  {item.title}

                </GalleryImgBottom>
              </GalleryImgContainer>
            ))}
        </GalleryContainer>
      </OuterContainer>
      {/* <GallerySwiper slides={gallerySlides} /> */}
      <Footer /></>
  )
}

export default PageWithAuth(Gallery)



const GalleryImg = styled.img`
  display: grid;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;
const GalleryImgContainer = styled.figure`
  width: 23rem;
  height: 23rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;
  position: relative;
  cursor: pointer;
   @media screen and (max-width:680px) {
  width: 18rem;
  height: 18rem;
  
}
`;
const GalleryImgBottom = styled.figcaption`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0rem;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  display: flex;
  width: 100%;
  height: 3rem;
  border-radius: 0rem 0rem 1.5rem 1.5rem;
  font-size: 1.5rem;
  color: white;
   text-shadow: 2px 2px #ff0000;
  font-weight: bold;
`;
