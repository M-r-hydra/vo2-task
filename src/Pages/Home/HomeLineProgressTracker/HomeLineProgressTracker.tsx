// React
import React, { useCallback, useEffect } from "react";
// React

// CSS
import styles from "./HomeLineProgressTracker.module.css";
// CSS

// Components
import CurvedProgressTracker from "../../../Components/CurvedProgressTracker/CurvedProgressTracker";
// Components

// Redux
import {
  useAppDispatch,
  useAppSelector,
} from "../../../StateManagers/RTK/store";
import {
  getAsyncHomePageChartData,
  HomePageDataSlice,
} from "../../../StateManagers/RTK/Slices/HomePageDataSlice/HomePageDataSlice";
import CurvedProgressTracker2 from "../../../Components/CurvedProgressTracker2/CurvedProgressTracker2";
import PendingAndErrorManager from "../../../Utils/PendingAndErrorManager/PendingAndErrorManager";
import { constants } from "../../../Constants/constants";
// Redux

// ReChart

// ReChart

const HomeLineProgressTracker = () => {
  const dispatch = useAppDispatch();
  const { data, isDone, isError, isPending } = useAppSelector(
    (state) => state.homePageData.homePageChartData
  );

  const dataGetter = useCallback(() => {
    dispatch(getAsyncHomePageChartData());
  }, [dispatch]);

  useEffect(() => {
    const timeOut = setTimeout(dataGetter, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dataGetter]);

  useEffect(() => {
    return () => {
      dispatch(HomePageDataSlice.actions.resetHomePageChartData());
    };
  }, [dispatch]);

  return (
    <div
      className={`${styles.homeLineProgressTrackerContainer} w-full flex flex-col items-center`}
    >
      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={dataGetter}
        showAfterDone={
          <>
            <CurvedProgressTracker
              totalDays={14}
              milestones={data.map((item, index) => ({
                date: item.workoutDay,
                day: index,
                label: "ctl : " + item.ctl,
              }))}
            />

            <CurvedProgressTracker2
              data={data.slice(0, 10)}
              keys={[
                {
                  dataKey: "ctl",
                  stroke: constants.red,
                  strokeWidth: 1,
                  type: "monotone",
                },
                {
                  dataKey: "atl",
                  stroke: constants.red,
                  strokeWidth: 1,
                  type: "monotone",
                },
              ]}
            />

            <CurvedProgressTracker2
              data={data}
              keys={[
                {
                  dataKey: "ctl",
                  stroke: constants.red,
                  strokeWidth: 1,
                  type: "monotone",
                },
                {
                  dataKey: "atl",
                  stroke: constants.red,
                  strokeWidth: 1,
                  type: "monotone",
                },
              ]}
            />
          </>
        }
      />
    </div>
  );
};

export default HomeLineProgressTracker;
