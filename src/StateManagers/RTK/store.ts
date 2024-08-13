// RTK
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// RTK

// Slices
import { loadingSlice } from "./Slices/loadingSlice/loadingSlice";
import { commonSlice } from "./Slices/CommonSlice/commonSlice";
import { competitionsSlice } from "./Slices/CompetitonsSlice/CompetitionsSliceSlice";
// Slices

const ngProgressMiddleware: Middleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    if (action.type.endsWith("/pending")) {
      dispatch(loadingSlice.actions.setLoadingTrue());
    } else if (
      action.type.endsWith("/fulfilled") ||
      action.type.endsWith("/rejected")
    ) {
      dispatch(loadingSlice.actions.setLoadingFalse());
    }

    return next(action);
  };

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    competitions: competitionsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ngProgressMiddleware),
});

// CUSTOM STORE HOOKS FOR BETTER NAME CONVENTION ;)
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
// CUSTOM STORE HOOKS FOR BETTER NAME CONVENTION (;
