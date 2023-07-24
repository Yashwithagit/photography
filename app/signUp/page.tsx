'use client';
import React, { useState } from 'react'
import { CardContainer, CardHeader, FormContainer, FormField, FormFieldIcon, FormFieldInput, LinkContainer, LinkText, PhotoGraphyBgContainer } from '@/styles/globalStyles'
import Link from 'next/link'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'

interface FormDataProps {
  email?: string;
  password?: string;
  contact?: number;
  username?: string;


}
const SignUp: React.FC<FormDataProps> = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    username: '',
    email: '',
    password: ''

  })

  // handle Sign Up form submit
  const onSignUpFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   try {
    
   } catch (error) {
    
   }
  }
  return (
    <><PhotoGraphyBgContainer />
      <CardContainer>
        <CardHeader>Sign Up</CardHeader>
        <FormContainer action="#">
          <FormField>
            <FormFieldIcon><MdIcons.MdEmail /></FormFieldIcon>
            <FormFieldInput name={formData.email} value={formData.email} type="text" required placeholder="Email" onChange={(e) => setFormData({ ...formData, email: String(e.target.value) })} />
          </FormField>
          <FormField>
            <FormFieldIcon><RiIcons.RiUser3Fill /></FormFieldIcon>
            <FormFieldInput name={formData.username} value={formData.username} type="text" required placeholder="User Name" onChange={(e) => setFormData({ ...formData, username: String(e.target.value) })} />
          </FormField>
          <FormField>
            <FormFieldIcon><MdIcons.MdPhone /></FormFieldIcon>
            <FormFieldInput name={String(formData.contact)} value={String(formData.contact)} type="number" required placeholder="Contact" onChange={(e) => setFormData({ ...formData, contact: parseInt(e.target.value) })} />
          </FormField>
          <FormField>
            <FormFieldIcon><RiIcons.RiLockPasswordFill /></FormFieldIcon>
            <FormFieldInput name={formData.password} value={formData.password} type="password" required placeholder="Password" onChange={(e) => setFormData({ ...formData, password: String(e.target.value) })} />
          </FormField>

          <FormField>
            <FormFieldInput type="submit" value="SIGN UP" onClick={(e: any) => onSignUpFormSubmit(e)} />
          </FormField>
        </FormContainer>

        <LinkContainer>
          Already have account?
          <Link href={'/login'}><LinkText>Login</LinkText></Link>
        </LinkContainer>
      </CardContainer ></>

  )
}

export default React.memo(SignUp)





