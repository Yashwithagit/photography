
'use client';

import { AppColors, NavbarData } from "@/lib/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useRouter } from "next/navigation";
import PageWithAuth from "@/context/auth";


interface NavBarItemProps {
  active?: boolean;
}
const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px 80px;
  background-color: #1b2430;
box-shadow: 0 5px 15px rgba(0,0,0,0.06);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const NavBar = styled.main<NavBarItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
   @media screen and (max-width:768px){
    display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  top: 87px;
  right:${(props) => props.active ? '-300px' : "0px"} ;
  width: 300px;
  height: 100vh;
  background: #2a3239;
  box-shadow: 0 40px 60px rgba(0,0,0,0.1);
  padding: 40px 0 0 10px;
  transition: 0.3s ease-in-out;
  }
`
const NavBarItem = styled.li<NavBarItemProps>`
padding: 0 20px;
position: relative;
font-size: 1.3rem;
font-weight: 600;
color: ${AppColors.White};
list-style: none;
transition: 0.3s ease-in-out;
:hover{
  color:#17cf97 ;
}
:hover::after{
  content:""  ;
  width:30% ;
  height: 2px;
  background:#17cf97  ; 
  position:  absolute;
  bottom: -2px ;
  left:  20px ;
}
 @media screen and (max-width:768px){
  margin-bottom: 20px;
 }
`

const MobileNav = styled.div`
  display: none;
  @media screen and (max-width:768px){
    display: block;
  }
`




const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Link href={"/"}><svg id="logo-16" width="100" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" className="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" className="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" className="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" className="ccustom" fill="#1F84EF"></path> </svg></Link>
      <div>
        <NavBar active={isOpen}>
          {
            NavbarData.map((navItem, index) => {
              return (

                <NavBarItem key={index} >
                  <Link href={navItem.path}>{navItem.title}</Link>
                </NavBarItem>
              )
            })
          }


        </NavBar>
      </div>
      <MobileNav onClick={() => handleToggle()}>

        <FontAwesomeIcon icon={!isOpen ? faXmark : faBars} style={{ color: `${AppColors.White}`, fontSize: "1.5rem", cursor: 'pointer' }} />

      </MobileNav>
    </NavbarContainer>
  );
};

export default PageWithAuth(Navbar);
