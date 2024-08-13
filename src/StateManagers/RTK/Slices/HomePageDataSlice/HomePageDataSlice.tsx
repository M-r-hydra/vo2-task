import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomePageChartDataService } from "../../../../Services/HomePageData/get/getHomePageChartDataService";
import { I_HomePageChart } from "../../../../Models/interfaces/HomePageData/HomePageDataInterfaces";
import { resetReferenceOfObject } from "../../../../Utils/resetReferenceOfObject";

const initialState: {
  homePageChartData: {
    data: I_HomePageChart[];
    isPending: boolean;
    isDone: boolean;
    isError: boolean;
  };
} = {
  homePageChartData: {
    data: [],
    isDone: false,
    isError: false,
    isPending: true,
  },
};

export const getAsyncHomePageChartData = createAsyncThunk(
  "homePageData/getHomePageChart",
  async () => {
    try {
      const { data } = await getHomePageChartDataService();
      return data;
    } catch (err) {
      // Error Handling =>
      // here because i don't know witch status code will arrive , just throwing it .
      // but when error reaches from server i can handle it .
      throw err;
    }
  }
);

export const HomePageDataSlice = createSlice({
  name: "homePageData",
  initialState,
  reducers: {
    resetHomePageChartData: (state) => {
      state.homePageChartData = resetReferenceOfObject(
        initialState.homePageChartData
      );
    },
  },
  extraReducers: (builder) => {
    //
    //
    //
    //
    //
    //
    //
    //
    builder.addCase(getAsyncHomePageChartData.pending, (state, action) => {
      state.homePageChartData.isPending = true;
      state.homePageChartData.isDone = false;
      state.homePageChartData.isError = false;
    });
    builder.addCase(getAsyncHomePageChartData.fulfilled, (state, action) => {
      state.homePageChartData.isDone = true;
      state.homePageChartData.isPending = false;
      state.homePageChartData.isError = false;

      state.homePageChartData.data = action.payload;
    });
    builder.addCase(getAsyncHomePageChartData.rejected, (state, action) => {
      state.homePageChartData.isError = true;
      state.homePageChartData.isDone = false;
      state.homePageChartData.isPending = false;
    });
    //
    //
    //
    //
    //
    //
    //
    //
  },
});
