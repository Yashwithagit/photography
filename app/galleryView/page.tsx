'use client';

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { gallerySlides, galleryViewPhotoList } from '@/lib/constant';
import GallerySwiper from '@/components/GallerySwiper';
import { BackArrowContainer, PageTitle } from '@/styles/globalStyles';
import { useRouter, useSearchParams } from 'next/navigation'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PageWithAuth from '@/context/auth';
import axios from 'axios';
import { API_BASE_PATH, galleryList } from '@/lib/apiPath';
import Swal from 'sweetalert2';

const GalleryView: NextPage = () => {
  const searchParams = useSearchParams()
  const [imageList, setImageList] = useState<any>([]);
  const search = searchParams.get('id')
  console.log(search)
  const router = useRouter()
  const getImageList = async () => {
    await axios
      .get(API_BASE_PATH + galleryList, {
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
            setImageList(newData.filter((item: { type: number; }) => item.type === Number(search)));
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
    getImageList();
  }, [search]);
  return (
    <><NavBar />


      <GalleryViewContainer >
        <BackArrowContainer>
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "4rem", color: "#17cf97", display: 'flex', justifyContent: "flex-start", cursor: "pointer" }} onClick={() => router.push('/gallery')} />

        </BackArrowContainer>
        {/* <PageTitle>{photoList.title}</PageTitle> */}

        <PhotoListContainer>
          {
            imageList.map((imageList: { url: string | undefined; }, index: React.Key | null | undefined) => (

              <PhotoImage src={imageList?.url} key={index} />

            ))
          }
        </PhotoListContainer>
      </GalleryViewContainer>


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
margin: 2rem 0rem;
border-radius: 1.5rem;

  grid-template-columns: repeat(4, 1fr);
  background-color: #657582;
   box-shadow: 5px 4px 5px rgba(173, 148, 148, 0.4);
  grid-gap: 2rem;
  height: 25%;
  width: 90%;

  overflow-y: scroll;
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(3, 1fr);
    height: 26rem;
    margin: 2.5rem 0rem;
  }
  @media screen and (max-width: 465px){
    grid-template-columns: repeat(2, 1fr);
    height: 26rem;
    margin: 2.5rem 0rem;
  }


`
const PhotoImage = styled.img`
 width: 20rem;
  cursor: pointer;
  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.4);
  height: 20rem;
  border-radius: 2rem;
  object-fit: cover;
`