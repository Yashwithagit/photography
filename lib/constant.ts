import styled from "styled-components";

export const AppColors = {
  White: "#ffff",
  Black: "#0000",
  SkyBlue: "#87CEEB",
  LightBlue: "#2691d9",
  LightShadeBlue: "#3498db",
  DarkGrey: "#222",
  LightPurpleBlue: "#c8e8e9",
};

// Image Path
export const ImagePath = {
  BackGroundImage: `/assets/background/bg.jpg`,
  wedding: `/assets/wedding.jpg`,
  Portrait: `/assets/potrait.jpg`,
  Beauty: `/assets/beauty.jpg`,
  Corporate: `/assets/corperate.jpg`,
  Event: `/assets/event.jpg`,
  Engagement: `/assets/engagement.jpg`,
};

export const NavbarData = [
  {
    title: "Home",
    path: "/dashBoard",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Feedback",
    path: "/feedback",
  },
  {
    title: "Contact Us",
    path: "/contactus",
  },
  {
    title: "Logout",
    path: "/",
  },
];

export const FooterLinkList = [
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Feedback",
    path: "/feedback",
  },
  {
    title: "Contact Us",
    path: "/contactus",
  },
];

export const slideList = [
  {
    id: 1,
    image: ImagePath.BackGroundImage,
    title: "The Way of Water",
    link: "https://www.digitalcameraworld.com/",

    event: false,
  },
  {
    id: 2,
    image: ImagePath.BackGroundImage,
    title: "Black Adam swin",
    link: "https://www.digitalcameraworld.com/",

    event: false,
  },
  {
    id: 3,
    image: ImagePath.BackGroundImage,
    title: " Wakanda Forever",
    link: "https://www.digitalcameraworld.com/",
    event: false,
  },
  {
    id: 4,
    image: ImagePath.BackGroundImage,
    title: " Wakanda Forever",
    link: "https://www.digitalcameraworld.com/",
    event: false,
  },
  {
    id: 5,
    image: ImagePath.BackGroundImage,
    title: " Wakanda Forever",
    link: "https://www.digitalcameraworld.com/",
    event: false,
  },
  {
    id: 6,
    image: ImagePath.BackGroundImage,
    title: " Wakanda Forever",
    link: "https://www.digitalcameraworld.com/",
    event: false,
  },
];

//wedding gallery
export const gallerySlides = [
  {
    id: 1,
    title: "Wedding Photography",
    image: ImagePath.wedding,
  },
  {
    id: 2,
    title: "Portrait Photography",
    image: ImagePath.Portrait,
  },
  {
    id: 3,
    title: "Event Photography",
    image: ImagePath.Event,
  },
  {
    id: 4,
    title: "Engagement Photography",
    image: ImagePath.Engagement,
  },
  {
    id: 5,
    title: "Beauty and Fashion",
    image: ImagePath.Beauty,
  },
  {
    id: 6,
    title: "Corporate Photography",
    image: ImagePath.Corporate,
  },
];
