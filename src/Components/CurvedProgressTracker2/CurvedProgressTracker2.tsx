// React
import React, { useRef, useEffect, useState } from "react";
// React

// CSS
import styles from "./CurvedProgressTracker2.module.css";
// CSS

// Constants
import { constants } from "../../Constants/constants";
// Constants

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Customized,
  Legend,
  CurveProps,
} from "recharts";
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
    <div className="!w-full flex flex-row items-center justify-center">
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
