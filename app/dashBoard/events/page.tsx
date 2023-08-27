"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PageWithAuth from "@/context/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BackArrowContainer, Button, GalleryContainer, OuterContainer, PageTitle } from "@/styles/globalStyles";
import { useRouter, useSearchParams } from 'next/navigation'
import { NextPage } from "next";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Swal from "sweetalert2";
import { API_BASE_PATH, eventList } from "@/lib/apiPath";
import axios from "axios";

const Events: NextPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [eventLists, setEventList] = useState<any>([]);
  const id = searchParams.get('id')
  const getEventList = async () => {
    await axios
      .get(API_BASE_PATH + eventList, {
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
            setEventList(newData.filter((item: { p_id: number; }) => item.p_id === Number(id)));
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
    getEventList();
  }, [id]);

  return (
    <>
      <NavBar />
      <BackArrowContainer>
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "4rem", color: "#17cf97", display: 'flex', justifyContent: "flex-start", cursor: "pointer" }} onClick={() => router.push('/gallery')} />
        <PageTitleContainer> <h1>Events</h1></PageTitleContainer>
      </BackArrowContainer>


      <OuterContainer>
        <ButtonContainer>  <Button>Go to Website</Button></ButtonContainer>
        <GalleryContainer row={eventList ? Math.ceil(eventLists.length / 3) : 1}>
          {
            eventLists.map((item: any, index: number) => (
              <HoverContainer key={index}>
                <Image src={item?.url} alt="Avatar" />
                <OverLay>
                  <TextContainer>
                    <label>Event Title: {item?.title}</label>
                    <label>Event Description:  {item?.description}</label>
                    <label>Event Location:  {item?.location}</label>
                  </TextContainer>
                </OverLay>
              </HoverContainer>
            ))}
        </GalleryContainer>
      </OuterContainer>
      <Footer />
    </>
  );
};

export default PageWithAuth(Events);
const Container = styled.div`
 position: relative;
  width: 100%;
  @media screen and (max-width:682px){
    width:80%;
  }
  
  
`
const OverLay = styled.div`
   position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
   border-radius: 1.5rem;

   
  
`
const HoverContainer = styled(Container)`
  &:hover ${OverLay} {
    bottom: 0;
    
    height: 100%;
  }
`;

const Image = styled.img`
display: block;
  width: 100%;
   border-radius: 1.5rem;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.4);
  height: auto;`

const TextContainer = styled.div`
     color: white;
     line-height: 2rem;
  font-size: 1rem;
  position: absolute;
  white-space: nowrap;
  top: 50%;
  display: flex;
  flex-direction: column;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  `

const ButtonContainer = styled.div`
  width:100%;
  justify-content:flex-end;
  display:flex;
  margin:1rem 0rem;`

const PageTitleContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;`