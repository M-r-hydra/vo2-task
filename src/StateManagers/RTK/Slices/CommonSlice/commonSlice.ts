// Redux
import { createSlice } from "@reduxjs/toolkit";
// Redux

// Models
import { T_SidebarType } from "../../../../Models/types/types";
// Models

const initialState: {
  sidebarStatus: T_SidebarType;
} = {
  sidebarStatus: "full",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeSidebarStatus: (state) => {
      if (state.sidebarStatus === "full") {
        state.sidebarStatus = "small";
        return;
      }
      state.sidebarStatus = "full";
    },
  },
});
