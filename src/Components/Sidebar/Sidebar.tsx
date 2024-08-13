// React
import React from "react";
// React

// CSS
import styles from "./Sidebar.module.css";
// CSS

// Icons
import { AiFillHome } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
// Icons

// Models
import { T_SidebarItem } from "../../Models/types/types";
import SidebarItem from "./SidebarItem/SidebarItem";
import { logo } from "../../Images/images";
// Models

const sidebarItems: T_SidebarItem[] = [
  {
    title: "خانه",
    Icon: AiFillHome,
    routeToNavigate: "/",
  },
  {
    title: "تقویم",
    Icon: IoCalendarOutline,
    routeToNavigate: "/calender",
  },
];

const Sidebar = () => {
  return (
    <div
      className={`${styles.sidebarContainer} flex flex-col h-97p mt-2p box-border items-center px-2 pt-10`}
    >
      <img src={logo} alt="" className="w-12 h-8 mb-4" />
      {sidebarItems.map((item) => (
        <SidebarItem key={item.routeToNavigate} data={item} />
      ))}
    </div>
  );
};

export default Sidebar;
