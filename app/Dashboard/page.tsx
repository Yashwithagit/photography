"use client"

import NavBar from "@/components/NavBar"
import PageWithAuth from "@/context/auth"
import { NextPage } from "next"

const Dummy: NextPage = () => {
  
    return (<>
      <NavBar />
    </>)
  }
  
export default PageWithAuth(Dummy)