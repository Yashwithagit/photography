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
import { makePostRequest } from "@/api/apiServices";
import { API_BASE_PATH, userLogin } from "@/lib/apiPath";
import axios from "axios";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    const formData = {
      path: userLogin,
      email: login?.email,
      password: login?.password,
    };

    await axios
      .post(API_BASE_PATH + userLogin, formData, {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .then(
        (response) => {
          if (response.data.responseCode === 100001) {
            localStorage.setItem("token", "1");
            router.push("/DashBoard");
          } else {
            alert("Invalid User Name and Password");
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
        <CardHeader>Login</CardHeader>
        <FormContainer onSubmit={handleSubmit}>
          <FormField>
            <FormFieldIcon>
              <MdIcons.MdEmail />
            </FormFieldIcon>
            <FormFieldInput
              type="text"
              required
              placeholder="Email"
              name="email"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </FormField>
          <FormField>
            <FormFieldIcon>
              <RiIcons.RiLockPasswordFill />
            </FormFieldIcon>
            <FormFieldInput
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </FormField>

          <FormField>
            <FormFieldInput type="submit" value="LOGIN" />
          </FormField>
        </FormContainer>

        <LinkContainer>
          Don&#x27;t have account?
          <Link href={"/signUp"}>
            <LinkText>Signup </LinkText>
          </Link>
        </LinkContainer>
      </CardContainer>
    </>
  );
};

export default Login;

