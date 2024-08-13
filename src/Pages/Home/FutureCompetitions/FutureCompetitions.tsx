// React
import React, { useCallback, useEffect } from "react";
// React

// CSS
import styles from "./FutureCompetitions.module.css";
// CSS

// Components
import CompetitionItem from "./CompetitionItem/CompetitionItem";
// Components

// Redux
import {
  useAppDispatch,
  useAppSelector,
} from "../../../StateManagers/RTK/store";
import { getAsyncCompetitions } from "../../../StateManagers/RTK/Slices/CompetitonsSlice/CompetitionsSliceSlice";
// Redux

// Utils
import PendingAndErrorManager from "../../../Utils/PendingAndErrorManager/PendingAndErrorManager";
// Utils

type FutureCompetitionsProps = {
  containerClassName?: string;
};

const FutureCompetitions: React.FunctionComponent<FutureCompetitionsProps> = ({
  containerClassName,
}) => {
  const dispatch = useAppDispatch();
  const { data, isDone, isError, isPending } = useAppSelector(
    (state) => state.competitions.competitions
  );

  const dataGetter = useCallback(() => {
    dispatch(getAsyncCompetitions());
  }, [dispatch]);

  useEffect(() => {
    const timeOut = setTimeout(dataGetter, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dataGetter]);

  return (
    <div
      className={`${styles.futureCompetitionsContainer} 
w-full
        ${containerClassName}
        `}
    >
      <PendingAndErrorManager
        isDone={isDone}
        isError={isError}
        isPending={isPending}
        onError={dataGetter}
        showAfterDone={
          <div
            className={`
        w-full flex flex-row items-center justify-between flex-wrap gap-x-2 gap-y-4
          `}
          >
            {data.map((item) => (
              <CompetitionItem key={item.id} data={item} />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default FutureCompetitions;
