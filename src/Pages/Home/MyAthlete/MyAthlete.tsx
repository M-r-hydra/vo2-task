// React
import React from "react";
// React

// CSS
import styles from "./MyAthlete.module.css";
// CSS

// Image
import { userImage } from "../../../Images/images";
// Image

// Components
import DropDown from "../../../Components/DropDown/DropDown";
// Components

// Icons
import { IoSettingsOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
// Icons

// Utils
import { customizedToast } from "../../../Utils/CustomizedToast/customizedToast";
// Utils

const MyAthlete = () => {
  return (
    <div className={`${styles.myAthleteContainer} w-full mt-6`}>
      <div className={`flex flex-row items-center justify-between`}>
        <div className="flex flex-row items-center">
          <img src={userImage} alt="" className="size-8 rounded-full" />
          <span className="mr-2 text-sm">ماندانا دهقان</span>
          <FaAngleDown
            className="cursor-pointer"
            onClick={() => {
              customizedToast("ورزشکاری موجود نیست", "warning");
            }}
          />
        </div>
        <div className={`flex flex-row items-center justify-center gap-x-2`}>
          <IoCalendarOutline />
          <IoSettingsOutline />
          <DropDown
            data={[]}
            getSelectedOption={() => {}}
            initialValues={{
              initialTitle: "9 هفته تا قهرمانی آسیا",
              initialValue: "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAthlete;
