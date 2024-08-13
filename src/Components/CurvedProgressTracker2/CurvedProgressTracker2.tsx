// React
import React from "react";
// React

// CSS
import styles from "./CurvedProgressTracker2.module.css";
// CSS

import { LineChart, Line, Tooltip, Legend } from "recharts";
import { I_HomePageChart } from "../../Models/interfaces/HomePageData/HomePageDataInterfaces";
import { CurveType } from "recharts/types/shape/Curve";

type CurvedProgressTrackerProps = {
  data: I_HomePageChart[];
  keys: {
    dataKey: string;
    stroke: string;
    strokeWidth: number;
    type: CurveType;
  }[];
};

const CurvedProgressTracker2: React.FunctionComponent<
  CurvedProgressTrackerProps
> = ({ data, keys }) => {
  console.clear();
  console.log(data);
  return (
    <div className={`${styles.curvedProgressTracker}`}>
      <LineChart width={500} height={100} data={data}>
        {keys.map((item) => (
          <Line key={item.dataKey} {...item} />
        ))}
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default CurvedProgressTracker2;
