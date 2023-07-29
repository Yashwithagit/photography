import NavBar from '@/components/NavBar'
import PageWithAuth from '@/context/auth'
import { NextPage } from 'next'
import React from 'react'

const ContactUs: NextPage = () => {
  return (
    <><NavBar /><div>hello</div></>
  )
}

export default PageWithAuth(ContactUs)