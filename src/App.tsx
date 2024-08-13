// React
import React from "react";
// React

// CSS
import "./global.css";
import styles from "./App.module.css";
// CSS

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
// Components

const App = () => {
  return (
    <div
      className={`${styles.appContainer} w-full h-screen flex flex-row-reverse items-start justify-between`}
    >
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Sidebar />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={<item.Element />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
