'use client';
import React from 'react'
import { CardContainer, CardHeader, FormContainer, FormField, FormFieldIcon, FormFieldInput, LinkContainer, LinkText, PhotoGraphyBgContainer } from '@/styles/globalStyles'
import Link from 'next/link'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'


const Login = () => {
  const onClickLogin = () => {
    console.log("login clicked")
  }
  return (
    <><PhotoGraphyBgContainer />
      <CardContainer>
        <CardHeader>Login</CardHeader>
        <FormContainer action="#">
          <FormField>
            <FormFieldIcon><MdIcons.MdEmail /></FormFieldIcon>
            <FormFieldInput type="text" required placeholder="Email" />
          </FormField>
          <FormField>
            <FormFieldIcon><RiIcons.RiLockPasswordFill /></FormFieldIcon>
            <FormFieldInput type="password" required placeholder="Password" />
          </FormField>

          <FormField>

            <FormFieldInput type="submit" value="LOGIN" onClick={() => onClickLogin()} />
          </FormField>
        </FormContainer>

        <LinkContainer>
          Don&#x27;t have account?
          <Link href={'/signUp'}><LinkText>Signup </LinkText></Link>
        </LinkContainer>
      </CardContainer ></>

  )
}

export default Login





