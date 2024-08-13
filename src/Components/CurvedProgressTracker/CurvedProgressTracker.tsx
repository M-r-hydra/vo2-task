// React
import React, { useRef, useEffect, useState } from "react";
// React

// CSS
import styles from "./CurvedProgressTracker.module.css";
// CSS

// Constants
import { constants } from "../../Constants/constants";
// Constants

type milestone = {
  day: number;
  date: string;
  label: string;
  x?: number;
  y?: number;
};

type CurvedProgressTrackerProps = {
  totalDays: number;
  milestones: milestone[];
};
const CurvedProgressTracker: React.FunctionComponent<
  CurvedProgressTrackerProps
> = ({ totalDays, milestones }) => {
  const pathRef = useRef<any>(null);
  const [positions, setPositions] = useState<milestone[]>([]);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const newPositions = milestones.map((milestone) => {
        const point = pathRef.current.getPointAtLength(
          (milestone.day / totalDays) * pathLength
        );
        return { x: point.x, y: point.y, ...milestone };
      });
      setPositions(newPositions);
    }
  }, [totalDays, milestones]);

  useEffect(() => {
    // function to reset and remove the selected Day ...
    const timeOut = setTimeout(() => {
      if (typeof hoveredDay === "number") {
        setHoveredDay(null);
      }
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [hoveredDay]);

  return (
    <div
      className="relative w-[450px] h-[100px] mt-4"
      // style={{ position: "relative", width: "450px", height: "100px" }}
    >
      <div className={`${styles.curvedProgressTracker} absolute left-0 z-10`}>
        {hoveredDay}
      </div>
      <svg width="100%" height="100" viewBox="0 0 450 100">
        {/* Complete Path */}
        <path
          ref={pathRef}
          d="M 10 50 Q 100 10, 200 50 T 400 50" // Example curved path
          stroke="#ccc"
          strokeWidth="2"
          fill="transparent"
        />
        {/* Complete Path */}

        {/* Solid Part of Path */}
        {hoveredDay !== null && (
          <path
            d={pathRef.current?.getAttribute("d")}
            stroke={constants.red}
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={`${
              (hoveredDay / totalDays) * pathRef.current.getTotalLength()
            }, ${pathRef.current.getTotalLength()}`}
          />
        )}
        {/* Solid Part of Path */}

        {/* Milestones */}
        {positions.map((position, index) => (
          <circle
            key={index}
            cx={position.x}
            cy={position.y}
            r="5"
            fill={constants.meloRed}
            className="cursor-pointer"
            // onMouseOver={() => setHoveredDay(position.day)}
            // onMouseOut={() => setHoveredDay(null)}
            onClick={() => {
              setHoveredDay((prevState) =>
                typeof prevState === "number"
                  ? prevState === position.day
                    ? null
                    : position.day
                  : position.day
              );
            }}
          />
        ))}
        {/* Milestones */}
      </svg>

      {/* Tooltip Elements */}
      {positions.map((position, index) => (
        <div
          key={index}
          id={`tooltip-${index}`}
          style={{
            position: "absolute",
            left: `${Number(position.x) + 10}px`,
            top: `${Number(position.y) - 10}px`,
            display: hoveredDay === position.day ? "block" : "none",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            fontSize: "12px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            transition: "0.3s ease all",
          }}
        >
          <div>{position.date}</div>
          <div>{position.label}</div>
        </div>
      ))}
      {/* Tooltip Elements */}
    </div>
  );
};

export default CurvedProgressTracker;
