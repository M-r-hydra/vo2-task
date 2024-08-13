import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCompetitionsService } from "../../../../Services/Competitions/get/getAllCompetitionsService";
import { I_Competition } from "../../../../Models/interfaces/Competitions/CompetitionsInterfaces";
import { resetReferenceOfObject } from "../../../../Utils/resetReferenceOfObject";

const initialState: {
  competitions: {
    data: I_Competition[];
    isPending: boolean;
    isDone: boolean;
    isError: boolean;
  };
} = {
  competitions: {
    data: [],
    isDone: false,
    isError: false,
    isPending: true,
  },
};

export const getAsyncCompetitions = createAsyncThunk(
  "competitions/getCompetitions",
  async () => {
    try {
      const { data } = await getAllCompetitionsService();
      return data;
    } catch (err) {
      // Error Handling =>
      // here because i don't know witch status code will arrive , just throwing it .
      // but when error reaches from server i can handle it .
      throw err;
    }
  }
);

export const competitionsSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    resetCompetitions: (state) => {
      state.competitions = resetReferenceOfObject(initialState.competitions);
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
    builder.addCase(getAsyncCompetitions.pending, (state, action) => {
      state.competitions.isPending = true;
      state.competitions.isDone = false;
      state.competitions.isError = false;
    });
    builder.addCase(getAsyncCompetitions.fulfilled, (state, action) => {
      state.competitions.isDone = true;
      state.competitions.isPending = false;
      state.competitions.isError = false;

      state.competitions.data = action.payload;
    });
    builder.addCase(getAsyncCompetitions.rejected, (state, action) => {
      state.competitions.isError = true;
      state.competitions.isDone = false;
      state.competitions.isPending = false;
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
