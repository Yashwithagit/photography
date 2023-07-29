"use client";
import React, { useState } from "react";
import {
  CardContainer,
  CardHeader,
  FormContainer,
  FormField,
  FormFieldIcon,
  FormFieldInput,
  LinkContainer,
  LinkText,
  PhotoGraphyBgContainer,
} from "@/styles/globalStyles";
import Link from "next/link";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import { API_BASE_PATH, userSignup } from "@/lib/apiPath";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface FormDataProps {
  email?: string;
  password?: string;
  contact?: string;
  username?: string;
  address?: string;
}
const SignUp: React.FC<FormDataProps> = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataProps>({
    username: "",
    email: "",
    password: "",
    address: "",
    contact:""
  });

  // handle Sign Up form submit
  const onSignUpFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault();
    const formRequestData = {
      email: formData.email,
      password: formData?.password,
      contact: formData?.contact,
      address: formData?.address,
      username: formData?.username,
    };

    await axios
      .post(API_BASE_PATH + userSignup, formRequestData, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .then(
        (response) => {
          if (response.data.responseCode === 100001) {
            Swal.fire({
              icon: 'success',
              title: 'Thanks for SignUp',
              showConfirmButton: false,
              timer: 2000
            }).then((result) => {
              if(result.isDismissed){
            localStorage.setItem("token", "1");
            router.push("/login");
              }
              })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              showConfirmButton: false,
              timer: 1500
            })
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <>
      <PhotoGraphyBgContainer />
      <CardContainer>
        <CardHeader>Sign Up</CardHeader>
        <FormContainer onSubmit={onSignUpFormSubmit}>
          <FormField>
            <FormFieldIcon>
              <MdIcons.MdEmail />
            </FormFieldIcon>
            <FormFieldInput
              name={formData.email}
              value={formData.email}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" title="xyz@something.com"
              required
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: String(e.target.value) })
              }
            />
          </FormField>
          <FormField>
            <FormFieldIcon>
              <RiIcons.RiUser3Fill />
            </FormFieldIcon>
            <FormFieldInput
              name={formData.username}
              value={formData.username}
              type="text"
              required
              placeholder="User Name"
              onChange={(e) =>
                setFormData({ ...formData, username: String(e.target.value) })
              }
            />
          </FormField>
          <FormField>
            <FormFieldIcon>
              <MdIcons.MdPhone />
            </FormFieldIcon>
            <FormFieldInput
              name={String(formData.contact)}
              value={String(formData.contact)}
              type="tel" pattern="[0-9]{10}" title="10 numeric characters only"
              required
              placeholder="Contact"
              onChange={(e) =>
                setFormData({ ...formData, contact: (e.target.value) })
              }
            />
          </FormField>
          <FormField>
            <FormFieldIcon>
              <RiIcons.RiLockPasswordFill />
            </FormFieldIcon>
            <FormFieldInput
              name={formData.password}
              value={formData.password}
              type="password"
              required
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: String(e.target.value) })
              }
            />
          </FormField>
          
         
          <FormField>
            <FormFieldInput
              type="submit"
              value="SIGN UP"
            />
          </FormField>
        </FormContainer>

        <LinkContainer>
          Already have account?
          <Link href={"/login"}>
            <LinkText>Login</LinkText>
          </Link>
        </LinkContainer>
      </CardContainer>
    </>
  );
};

export default React.memo(SignUp);

