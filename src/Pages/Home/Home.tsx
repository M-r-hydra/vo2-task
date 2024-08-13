// React
import React from "react";
// React

// CSS
import styles from "./Home.module.css";
// CSS

// Components
import MyAthlete from "./MyAthlete/MyAthlete";
import FutureCompetitions from "./FutureCompetitions/FutureCompetitions";
import HomeLineProgressTracker from "./HomeLineProgressTracker/HomeLineProgressTracker";
// Components

const Home = () => {
  return (
    <div
      className={`${styles.homeContainer} w-70p flex flex-col items-start pr-4p`}
    >
      <p className="text-2xl">ورزشکاران من</p>
      <MyAthlete />

      <HomeLineProgressTracker />
      <p className="my-4 text-sm text-black2">مسابقات آینده</p>
      <FutureCompetitions />
    </div>
  );
};

export default Home;
