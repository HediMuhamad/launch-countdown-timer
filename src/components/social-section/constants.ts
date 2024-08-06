export type Social = {
  name: "facebook" | "pinterest" | "instagram";
  url: string;
  icon: string;
};

export const socials: Array<Social> = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: "/icon-facebook.svg",
  },
  {
    name: "pinterest",
    url: "https://www.pinterest.com/",
    icon: "/icon-pinterest.svg",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: "/icon-instagram.svg",
  },
];
