"use client"

import NavBar from "@/components/NavBar"
import PageWithAuth from "@/context/auth"
import { NextPage } from "next"

const DashBoard: NextPage = () => {

  return (<>
    <NavBar />
  </>)
}

export default PageWithAuth(DashBoard)