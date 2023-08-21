"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SwiperComp from "@/components/SwiperComp";
import PageWithAuth from "@/context/auth";
import { NextPage } from "next";
import React from "react";
import Swal from "sweetalert2";

const DashBoard: NextPage = () => {

  return (
    <>
      <NavBar />

      <SwiperComp />
      <Footer />
    </>
  );
};

export default PageWithAuth(DashBoard);
