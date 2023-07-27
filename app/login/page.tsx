'use client';
import React, { useState } from 'react'
import { CardContainer, CardHeader, FormContainer, FormField, FormFieldIcon, FormFieldInput, LinkContainer, LinkText, PhotoGraphyBgContainer } from '@/styles/globalStyles'
import Link from 'next/link'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import { makePostRequest } from '@/api/apiServices';
import { userLogin } from '@/lib/apiPath';



const Login = () => {
  const [login,setLogin]=useState({
    email:"",
    password:""
  })
  const onClickLogin = () => {
    const formData={
      path:userLogin,
      email:login?.email,
      password:login?.password
    }
    
    makePostRequest(formData).then((data)=>{
        console.log(data)
    })
    
  }
  const handleSubmit = async (event:any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    const formData={
      path:userLogin,
      email:login?.email,
      password:login?.password
    }
    
    makePostRequest(formData).then((data)=>{
        console.log(data)
    })
 
   
  }
  return (
    <><PhotoGraphyBgContainer />
      <CardContainer>
        <CardHeader>Login</CardHeader>
        <FormContainer onSubmit={handleSubmit}>
          <FormField>
            <FormFieldIcon><MdIcons.MdEmail /></FormFieldIcon>
            <FormFieldInput type="text" required placeholder="Email" name="email" onChange={(e)=>setLogin({...login,email:e.target.value})} />
          </FormField>
          <FormField>
            <FormFieldIcon><RiIcons.RiLockPasswordFill /></FormFieldIcon>
            <FormFieldInput type="password" name="password" required placeholder="Password" onChange={(e)=>setLogin({...login,password:e.target.value})} />
          </FormField>

          <FormField>

            <FormFieldInput type="submit" value="LOGIN"  />
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





