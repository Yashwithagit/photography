'use client';

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { gallerySlides, galleryViewPhotoList } from '@/lib/constant';
import GallerySwiper from '@/components/GallerySwiper';
import { BackArrowContainer, PageTitle } from '@/styles/globalStyles';
import { useRouter, useSearchParams } from 'next/navigation'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PageWithAuth from '@/context/auth';

const GalleryView: NextPage = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get('id')
  console.log(search)
  const router = useRouter()
  useEffect(() => {

  }, [search])
  return (
    <><NavBar />

      {
        galleryViewPhotoList.map((photoList, index: number) => (
          photoList.id === Number(search) && (
            <GalleryViewContainer key={index}>
              <BackArrowContainer>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "4rem", color: "#17cf97", display: 'flex', justifyContent: "flex-start", cursor: "pointer" }} onClick={() => router.push('/gallery')} />

              </BackArrowContainer>
              <PageTitle>{photoList.title}</PageTitle>
              <GalleryViewImage>
                <Image src={photoList.mainImage} />
              </GalleryViewImage>
              <PhotoListContainer>
                {
                  photoList.subImageList.map((imageList, index) => (

                    <PhotoImage src={imageList.image} key={index} />

                  ))
                }
              </PhotoListContainer>
            </GalleryViewContainer>
          )

        )

        )
      }


      <Footer /></>
  )
}

export default PageWithAuth(GalleryView)

const GalleryViewImage = styled.div`
  width: 25rem;
  height: 20rem;
  
`
const Image = styled.img`
  width: 25rem;
  border: 3px solid white;
  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.4);
  height: 20rem;
  border-radius: 2rem;
  object-fit: cover;
`
const GalleryViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

const PhotoListContainer = styled.div`
display: grid;
padding: 2rem;
margin: 1.5rem 0rem;
border-radius: 1.5rem;

  grid-template-columns: repeat(5, 1fr);
  background-color: #657582;
   box-shadow: 5px 4px 5px rgba(173, 148, 148, 0.4);
  grid-gap: 2rem;
  height: 14rem;
  overflow-y: scroll;


`
const PhotoImage = styled.img`
 width: 10rem;
  cursor: pointer;
  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.4);
  height: 10rem;
  border-radius: 2rem;
  object-fit: cover;
`