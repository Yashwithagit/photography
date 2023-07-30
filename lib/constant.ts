import styled from "styled-components";

export const AppColors = {
  White: "#ffff",
  Black: "#0000",
  SkyBlue: "#87CEEB",
  LightBlue: "#2691d9",
  LightShadeBlue: "#3498db",
  DarkGrey: "#222",
  LightPurpleBlue:"#c8e8e9"

};

// Image Path
export const ImagePath = {
  BackGroundImage: `/assets/background/bg.jpg`,
};

export const NavbarData = [
  {
    title: "Home",
    path: "/Dashboard",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Feedback",
    path: "/",
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
    path: "/",
  },
  {
    title: "Contact Us",
    path: "/",
  },
];

export const slideList = [
  {
    id: 1,
    image: ImagePath.BackGroundImage,
    title: "The Way of Water",
    subTitle:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    interval: 1500,
    event: false,
  },
  {
    id: 2,
    image: ImagePath.BackGroundImage,
    title: "Black Adam",
    subTitle:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    interval: 500,
    event: false,
  },
  {
    id: 3,
    image: ImagePath.BackGroundImage,
    title: " Wakanda Forever",
    subTitle:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    interval: 2500,
    event: false,
  },
];
