// CSS
import styles from "./Sidebar.module.css";
// CSS

// Icons
import { AiFillHome } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LuTestTube } from "react-icons/lu";
// Icons

// Models
import { T_SidebarItem } from "../../Models/types/types";
// Models

// Components
import SidebarItem from "./SidebarItem/SidebarItem";
// Components

// Images
import { logo } from "../../Images/images";
// Images

// Redux
import { useAppDispatch, useAppSelector } from "../../StateManagers/RTK/store";
import { commonSlice } from "../../StateManagers/RTK/Slices/CommonSlice/commonSlice";
// Redux

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
  {
    title: "مسیر تست",
    Icon: LuTestTube,
    routeToNavigate: "/route",
  },
  {
    title: " مسیر تست 2",
    Icon: LuTestTube,
    routeToNavigate: "/route-x",
  },
  {
    title: " مسیر تست 3",
    Icon: LuTestTube,
    routeToNavigate: "/route-a",
  },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { sidebarStatus } = useAppSelector((state) => state.common);

  return (
    <div
      className={`${styles.sidebarContainer} ${
        sidebarStatus === "full" ? styles.full : ""
      } flex flex-col h-98p mt-1.5p box-border items-center px-2 pt-10`}
    >
      <img
        src={logo}
        alt=""
        className="w-12 h-8 mb-4 cursor-pointer"
        onClick={() => {
          dispatch(commonSlice.actions.changeSidebarStatus());
        }}
      />
      {sidebarItems.map((item) => (
        <SidebarItem key={item.routeToNavigate} data={item} />
      ))}
    </div>
  );
};

export default Sidebar;
