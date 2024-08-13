import { IconType } from "react-icons";

export type T_SidebarItem = {
  Icon: IconType;
  title: string;
  routeToNavigate: string;
};

export type T_Route = {
  path: string;
  Element: React.FunctionComponent;
};

export type T_SidebarType = "small" | "full";
