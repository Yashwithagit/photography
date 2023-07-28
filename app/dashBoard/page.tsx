import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { PhotoGraphyBgContainer } from "@/styles/globalStyles";
import { NextPage } from "next";
import React from "react";

const DashBoard: NextPage = () => {
  return (
    <>
      <NavBar />
      <PhotoGraphyBgContainer filter="0rem" />
      <Footer />
    </>
  );
};

export default DashBoard;
