import { T_Route } from "../Models/types/types";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

export const routes: T_Route[] = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "*",
    Element: NotFound,
  },
];
