import React from "react";
import style from "./QA.module.scss";
import iconClose from "../QA/icon/iconClose.svg";
import iconOpen from "../QA/icon/iconOpen.svg";
import MobileIconClose from "../QA/icon/MobileIconClose.svg";
import MobileIconOpen from "../QA/icon/MobileIconOpen.svg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export const QAItem = ({ QAName, QAText, currentItem, onClick }) => {
  const {width} = useWindowDimensions()
  return (
    <>
      <div onClick={onClick} className={style.qaheader}>
        <div className={style.qaHeaderText}>{QAName}</div>
        <div className={style.qaHeaderIcon}>
          {width < 700 ? <img
            /* onClick={onClick} */
            src={QAName == currentItem ? MobileIconOpen : MobileIconClose}
            alt=""
          /> : 
            <img
              /* onClick={onClick} */
              src={QAName == currentItem ? iconOpen : iconClose}
              alt=""
            />
          }
        </div>
      </div>
      <div
        className={QAName == currentItem ? style.qatextactive : style.qatext}
      >
        {QAText}
      </div>
      <div className={style.qablock}></div>
    </>
  );
};
