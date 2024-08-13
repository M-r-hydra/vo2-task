// React
import React from "react";
// React

// CSS
import styles from "./Home.module.css";
// CSS

// Components
import MyAthlete from "./MyAthlete/MyAthlete";
import FutureCompetitions from "./FutureCompetitions/FutureCompetitions";
import CurvedProgressTracker from "../../Components/CurvedProgressTracker/CurvedProgressTracker";
// Components

const Home = () => {
  return (
    <div
      className={`${styles.homeContainer} w-70p flex flex-col items-start pr-4p`}
    >
      <p className="text-2xl">ورزشکاران من</p>
      <MyAthlete />

      <CurvedProgressTracker
        totalDays={14}
        milestones={[
          { day: 0, date: "یه تاریخ دلحواه", label: "شروع" },
          { day: 3, date: "تاریخ علی", label: "تازه استارت زدم" },
          { day: 7, date: "تاریخ علی", label: "وسط" },
          { day: 8, date: "تاریخ علی", label: "روز 8" },
          { day: 10, date: "تاریخ علی", label: "روز 10" },
          { day: 14, date: "روز تولدم", label: "روز 14" },
        ]}
      />

      <p className="my-4 text-sm text-black2">مسابقات آینده</p>
      {/* <FutureCompetitions /> */}
    </div>
  );
};

export default Home;
