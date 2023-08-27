"use client";

import { AppColors, ImagePath } from "lib/constant";
import styled from "styled-components";
interface BgContainerProps {
  filter?: string;
}
export const PhotoGraphyBgContainer = styled.main<BgContainerProps>`
  background: url(${ImagePath.BackGroundImage});
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: ${(props) =>
    props.filter ? `blur(${props.filter})` : `blur(0.25rem)`};
`;
export const CardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  text-align: center;
  padding: 3rem;
  width: 25rem;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media screen and (max-width: 768px) and (min-width: 400px) {
    width: 20rem;
    padding: 2.5rem;
  }
  @media screen and (max-width: 400px) {
    width: 19rem;
    padding: 2rem;
  }
`;

export const CardHeader = styled.header`
  color: ${AppColors.White};
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 2.5rem 0;
  font-family: "Montserrat", sans-serif;
`;

export const FormField = styled.main`
  position: relative;
  height: 3rem;
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.94);
`;

export const FormFieldIcon = styled.span`
  color: ${AppColors.DarkGrey};
  width: 3rem;
  line-height: 3.2rem;
`;

export const FormFieldInput = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${AppColors.DarkGrey};
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  &[type="submit"] {
    background: ${AppColors.LightShadeBlue};
    border: 1px solid ${AppColors.LightBlue};
    color: white;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
  }
  :hover {
    background: ${AppColors.LightBlue};
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinkContainer = styled.div`
  font-size: 1rem;
  color: white;
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

export const LinkText = styled.span`
  color: ${AppColors.SkyBlue};
`;

export const ErrorMessage = styled.p`
  color: #bf1650;

  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const PageTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin: 1rem 0rem;
  padding: 0;
`;

export const BackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  padding-top: 2rem;
  padding-left: 5rem;
  @media screen and (max-width: 768px) {
    padding-left: 3rem;
  }
`;

export const SwiperContainer = styled.div`
  max-width: 124rem;
  padding: 4rem;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SwiperMobileContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: none;
  padding-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: block;
    padding-bottom: 1rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 1.2rem;
  background-color: #d72fee;
  outline: none;
  border: none;
  border-radius: 1.5rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.4);
`;

export const OuterContainer = styled.div`
  margin: 2rem 1rem;
  @media screen and (max-width: 680px) {
    margin: 1rem;
  }
`;
interface gridProps {
  row?: number;
}
export const GalleryContainer = styled.div<gridProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${(props) =>
    props.row ? `repeat(${props.row}, 1fr)` : `repeat(2, 1fr)`};
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
  }
`;
