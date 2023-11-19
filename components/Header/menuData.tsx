import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    path: "/about",
  },

  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Digital Marketing & SEO",
        newTab: false,
        path: "/digital",
      },
      {
        id: 34,
        title: "Design & App Development",
        newTab: false,
        path: "/development",
      },
      {
        id: 35,
        title: "AI & Data Science",
        newTab: false,
        path: "/ai",
      },
      {
        id: 35,
        title: "LegitLog - Logistics",
        newTab: false,
        path: "/logistics",
      },
      {
        id: 35.1,
        title: "HealthCare",
        newTab: false,
        path: "/healthcare",
      },
      {
        id: 36,
        title: "Interior Designing.",
        newTab: false,
        path: "/interior",
      },
      
    ],
  },

  {
    id: 2.24,
    title: "HyreLabs",
    newTab: false,
    path: "/hyrelab",
  },
  {
    id: 2.1,
    title: "Spotlight",
    newTab: false,
    submenu: [
      {
        id: 35,
        title: "Events",
        newTab: false,
        path: "/events",
      },
      {
        id: 31,
        title: "Blogs",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Podcasts",
        newTab: false,
        path: "/podcast",
      },
    ],
  },
  {
    id: 2.24,
    title: "Careers",
    newTab: false,
    path: "/careers",
  },
];

export default menuData;
