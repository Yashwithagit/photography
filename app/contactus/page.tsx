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
import { useReducer, useState } from "react";
import axios from "axios";
import { API_BASE_PATH, userContactUs } from "@/lib/apiPath";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
interface FormDataProps {
  email?: string;
  subject?: string;
  contact?: string;
  name?: string;
  message?: string;
}
const ContactUs: NextPage = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact: "",
  });
  const router = useRouter();
  const onSignUpFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault();
    const formRequestData = {
      email: formData.email,
      subject: formData?.subject,
      contact: formData?.contact,
      message: formData?.message,
      name: formData?.name,
      user_id:Number(localStorage.getItem('token'))
    };

    await axios
      .post(API_BASE_PATH + userContactUs, formRequestData, {
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
                  name:"",
                  contact:"",
                  message:"",
                  subject:"",
                  email:" "

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
          console.log(error);
        }
      );
  };
  return (
    <>
      <NavBar />
      <section>
        <ContactUsBody>
          <ContactUsContainer>
            <SectionHeaderContainer>
              <SectionHeading>CONTACT THIS USER</SectionHeading>
              <Heading>
                Don&apos;t Be Shy To Contact The<Element>Photographer</Element>
              </Heading>
            </SectionHeaderContainer>
            <CardSection>
              <CardContainer>
                <div>
                  <ImageContainer>
                    <Image src="/assets/icons/phone.png" alt="mail" />
                  </ImageContainer>
                  <div>
                    <Text>Phone Numbers</Text>
                  </div>
                  <div>
                    <StyledSpan>
                      <a href="#">010-020-0340</a>
                      <br />
                      <a href="#">090-080-0760</a>
                    </StyledSpan>
                  </div>
                </div>
              </CardContainer>

              <CardContainer>
                <div>
                  <ImageContainer>
                    <Image src="/assets/icons/envelope.png" alt="mail" />
                  </ImageContainer>
                  <div>
                    <Text>Email Address</Text>
                  </div>
                  <div>
                    <StyledSpan>
                      <a href="#">info@company.com</a>
                      <br />
                      <a href="#">abc@gmail.com</a>
                    </StyledSpan>
                  </div>
                </div>
              </CardContainer>
              <CardContainer>
                <div>
                  <ImageContainer>
                    <Image src="/assets/icons/map.png" alt="mail" />
                  </ImageContainer>
                  <div>
                    <Text>Office Location</Text>
                  </div>
                  <div>
                    <StyledSpan>
                      <a href="#">155 Michigan Ave, Chicago,</a>
                      <br />
                      <a href="#">IL 60601, United States</a>
                    </StyledSpan>
                  </div>
                </div>
              </CardContainer>
            </CardSection>
            <FormContainer onSubmit={onSignUpFormSubmit}>
              <FlexContainer>
                <FlexItem>
                  <InputField
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    name="name"
                    value={formData.name}
                    type="text"
                    placeholder="Your Name..."
                  />
                </FlexItem>
                <FlexItem>
                  <InputField
                   onChange={(e)=>setFormData({...formData,contact:e.target.value})}
                    name="contact"
                    type="tel"
                    value={formData.contact}
                    pattern="[0-9]{10}"
                    title="10 numeric characters only"
                    required
                    placeholder="Your Telephone..."
                  />
                </FlexItem>
              </FlexContainer>
              <FlexContainer>
                <FlexItem>
                  <InputField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                    title="xyz@something.com"
                    required
                    placeholder="Your Email..."
                  />
                </FlexItem>
                <FlexItem>
                  <InputField
                    name="subject"
                    value={formData.subject}
                    onChange={(e)=>setFormData({...formData,subject:e.target.value})}
                    type="text"
                    placeholder="Your Subject..."
                  />
                </FlexItem>
              </FlexContainer>
              <FlexContainer>
                <FlexItem>
                  <InputField
                    as="textarea"
                    value={formData.message}
                    onChange={(e)=>setFormData({...formData,message:e.target.value})}
                    name="message"
                    placeholder="Your Message"
                  />
                </FlexItem>
              </FlexContainer>
              <FlexContainer>
                <FlexItem>
                  <FormField>
                    <FormFieldInput type="submit" value="Send Message Now" />
                  </FormField>
                </FlexItem>
              </FlexContainer>
            </FormContainer>
          </ContactUsContainer>
        </ContactUsBody>
      </section>
      <Footer />
    </>
  );
};

export default PageWithAuth(ContactUs);
const ContactUsBody = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #c8e8e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactUsContainer = styled.div`
  width: 85%;
  background: ${AppColors.LightPurpleBlue};
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;
const SectionHeaderContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;
const SectionHeading = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  color: #00bdfe;
  font-weight: 400;
  text-align: center;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 180px;
  margin: 10px;
  padding-top: 2rem;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: row; /* By default, display in a column */
  width: 100%;
  padding-left: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem; /* On mobile (screen width <= 768px), display in a row */
  }
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
  padding-left: 2rem;
`;
const InputField = styled(FormFieldInput)`
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  color: #2a2a2a;
  border-radius: 5px;
  border: none;
  padding: 0px 15px;
  font-size: 14px;
  outline: none;
  margin-bottom: 30px;
  transition: all 0.3s;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 2rem;
  color: ${AppColors.SkyBlue};
`;
const Heading = styled.h4`
  margin-top: 10px;
  line-height: 36px;
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  color: #212741;
`;
const StyledSpan = styled.h4`
  color: initial; /* Set the initial color here */
  text-align: center;
  &:hover {
    color: ${AppColors.LightBlue}; /* Change the color to your desired color value on hover */
  }
`;
const Element = styled.em`
  color: ${AppColors.LightBlue};
`;
const Text = styled.h3`
  text-align: center;
  padding: 0.3rem 0rem;
`;
