import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    path: "/",
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
        path: "/blog",
      },
      {
        id: 34,
        title: "Design & App Development",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "AI & Data Science",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "LegitLog - Logistics",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "HealthCare",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "Interior Designing.",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 2.24,
    title: "Work",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Spotlight",
    newTab: false,
    submenu: [
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
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Events",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },
  // {
  //   id: 2.3,
  //   title: "HyreLabs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 2.24,
    title: "Careers",
    newTab: false,
    path: "/#features",
  },
];

export default menuData;
