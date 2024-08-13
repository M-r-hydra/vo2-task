// React
import React from "react";
// React

// CSS
import styles from "./SidebarItem.module.css";
// CSS

// Models
import { T_SidebarItem } from "../../../Models/types/types";
import { NavLink } from "react-router-dom";
// Models

type SidebarItemProps = {
  data: T_SidebarItem;
};
const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({ data }) => {
  return (
    <NavLink
      to={data.routeToNavigate}
      className={({ isActive }) =>
        `${
          styles.sidebarItem
        } flex flex-row items-center w-full justify-end py-2 mt-2 first-of-type::mt-0 rounded-lg px-2 ${
          isActive ? styles.activeItem : ""
        }`
      }
    >
      <span className="mr-2">{data.title}</span>
      <data.Icon />
    </NavLink>
  );
};

export default SidebarItem;
