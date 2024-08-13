// React
import React, { useCallback, useEffect, useState } from "react";
// React

// CSS
import styles from "./DropDown.module.css";
// CSS

// Icons
import { IoIosArrowDown } from "react-icons/io";
// Icons

type DropDownProps = {
  data: { title: string; value: string }[];
  initialValues: {
    initialValue: string | number;
    initialTitle: string;
  };
  getSelectedOption: (data: string) => void;
};

const DropDown: React.FunctionComponent<DropDownProps> = ({
  data,
  initialValues,
  getSelectedOption,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<{
    initialValue: string | number;
    initialTitle: string;
  }>(initialValues);

  const closeDropDown = useCallback(() => {
    setIsDropDownOpen(false);
  }, []);

  useEffect(() => {
    if (isDropDownOpen) {
      setTimeout(() => {
        document.addEventListener("click", closeDropDown);
      }, 10);
      return;
    } else {
      document.removeEventListener("click", closeDropDown);
    }
  }, [isDropDownOpen, closeDropDown]);
  return (
    <div
      className={`${styles.dropDownContainer_Master} `}
      onClick={() => {
        setIsDropDownOpen(true);
      }}
    >
      <p className={`${styles.selectedItem}`}>
        {selectedItem.initialTitle}
        <IoIosArrowDown
          style={{
            transform: isDropDownOpen ? "rotate(180deg)" : "",
          }}
        />
      </p>
      {isDropDownOpen ? (
        <div className={`${styles.dropDownContainer} `}>
          {data.length === 0 ? (
            <p className={`${styles.optionItem}  `}>موردی وجود ندارد </p>
          ) : (
            <>
              {data.map((item) => (
                <p
                  className={`${styles.optionItem}  `}
                  key={item.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem({
                      initialTitle: item.title,
                      initialValue: item.value,
                    });
                    getSelectedOption(item.value);
                    setIsDropDownOpen(false);
                  }}
                >
                  {item.title}
                </p>
              ))}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
