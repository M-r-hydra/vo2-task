// React
import React from "react";
// React

// CSS
import "./global.css";
import styles from "./App.module.css";
// CSS

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
// Components

// Routers
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
// Routers

// Toasts
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Toasts

const App = () => {
  return (
    <div
      className={`${styles.appContainer} w-full h-screen rtl flex flex-row items-start justify-between`}
    >
      <ToastContainer
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          width: "max-content",
        }}
        hideProgressBar={true}
        closeButton={window.innerWidth > 600 ? true : false}
        position="top-center"
      />
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
      <div className={`w-full pt-2p`}>
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={<item.Element />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
