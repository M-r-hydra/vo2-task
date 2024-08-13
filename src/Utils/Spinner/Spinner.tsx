// React
import React from "react";
// React
// CSS
import styles from "./Spinner.module.css";
import { constants } from "../../Constants/constants";
// CSS

// Themes
// Themes

type SpinnerProps = {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  spanClass?: string;
};

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  className,
  color,
  style,
}) => {
  return (
    <span
      className={`${styles.spinnerContianer} `}
      style={{
        background: color || constants.red,
        ...style,
      }}
    >
      <span
        className={`${styles.loader} ${className}  flex align-items-center justify-content-center`}
      ></span>
    </span>
  );
};

export default Spinner;
