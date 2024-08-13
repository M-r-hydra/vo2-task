// React
import React from "react";
// React

// CSS
import styles from "./CompetitionItem.module.css";
// CSS

// Models
import { I_Competition } from "../../../../Models/interfaces/Competitions/CompetitionsInterfaces";
import { customizedToast } from "../../../../Utils/CustomizedToast/customizedToast";
// Models

type CompetitionItemProps = {
  data: I_Competition;
};

const CompetitionItem: React.FunctionComponent<CompetitionItemProps> = ({
  data,
}) => {
  return (
    <div
      className={`${styles.competitionItemContainer} cursor-pointer w-48p py-2 flex flex-row items-center justify-start gap-x-4`}
      onClick={() => {
        navigator.clipboard
          .writeText(`${data.name} - ${data.eventDate}`)
          .then(() => {
            customizedToast("اطلاعات مسابقه در کلیپ بورد کپی شد", "success");
          })
          .catch((err) => {
            customizedToast("عدم دسترسی به کلیپ بورد", "warning");
          });
      }}
    >
      <span>{data.name}</span>
      <span className="ltr">{data.eventDate.replace("T", " ")}</span>
    </div>
  );
};

export default CompetitionItem;
