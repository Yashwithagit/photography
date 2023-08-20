"use client";
import NavBar from "@/components/NavBar";
import PageWithAuth from "@/context/auth";
import { AppColors } from "@/lib/constant";
import {
  FormContainer,
  FormField,
  FormFieldInput,
} from "@/styles/globalStyles";
import { NextPage } from "next";
import styled from "styled-components";
import Footer from "@/components/Footer";
import { useState } from "react";
import axios from "axios";
import { API_BASE_PATH, userFeedback } from "@/lib/apiPath";
import Swal from "sweetalert2";

interface FormDataProps {
  feedback?: string
}
const Feedback: NextPage = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    feedback: ""
  });

  const onSignUpFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault();
    const formRequestData = {
      feedback: formData.feedback,
      user_id: Number(localStorage.getItem('user_id'))
    };

    await axios
      .post(API_BASE_PATH + userFeedback, formRequestData, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .then(
        (response) => {
          if (response.data.responseCode === 100001) {
            Swal.fire({
              icon: "success",
              title: "FeedBack sent Successfully",
              showConfirmButton: false,
              timer: 2000,
            }).then((result) => {
              if (result.isDismissed) {
                setFormData({
                  feedback: ''

                })
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: `${error}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <>
      <NavBar />
      <section>
        <FeedbackOuterContainer>
          <FeedbackContainer>
            <SectionHeaderContainer>
              <Heading>TAKE A TIME TO GIVE A FEEDBACK</Heading>

            </SectionHeaderContainer>

            <FormContainer onSubmit={onSignUpFormSubmit}>


              <FlexItem>
                <TextAreaField
                  rows={10}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  name="feedback"
                  placeholder="Enter Your Feedback"
                />
              </FlexItem>

              <FlexContainer>
                <FlexItem>
                  <FormField>
                    <FormFieldInput type="submit" value="Send Feedback Now" />
                  </FormField>
                </FlexItem>
              </FlexContainer>
            </FormContainer>
          </FeedbackContainer>
        </FeedbackOuterContainer>
      </section >
      <Footer />
    </>
  );
};

export default PageWithAuth(Feedback);
const FeedbackOuterContainer = styled.div`
 padding: 2rem auto;
  width: 100%;
  background: #c8e8e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FeedbackContainer = styled.div`
  width: 85%;
  margin: 3rem 0rem;
  background: ${AppColors.LightPurpleBlue};
  border-radius: 6px;
  padding: 1rem 4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  @media screen  and (max-width:768px){
    padding: 1rem 2rem;
  }
`;
const SectionHeaderContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;




const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to the next row if the screen is too narrow */

  @media (max-width: 768px) {
    flex-direction: column; /* On mobile (screen width <= 768px), display in a column */
  }
`;

const FlexItem = styled.div`
  flex: 1; /* Each item takes equal width */
  margin-bottom: 0.3rem; /* Optional, to add spacing between input fields in mobile view */
`;

const TextAreaField = styled.textarea`
width: 100%;
  background-color: #f7f7f7;
  color: #2a2a2a;
  border-radius: 5px;
  border: none;
  padding: 1rem;
  font-size: 14px;
  outline: none;
  margin-bottom: 30px;
  transition: all 0.3s;
`

const Heading = styled.h4`
  margin: 2rem 0rem;
  line-height: 36px;
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  color: #212741;
`;

