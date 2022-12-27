import React from "react";
import style from "./QA.module.scss";
import iconClose from "../QA/icon/iconClose.svg";
import iconOpen from "../QA/icon/iconOpen.svg";
import MobileIconClose from "../QA/icon/MobileIconClose.svg";
import MobileIconOpen from "../QA/icon/MobileIconOpen.svg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import classNames from "classnames";

export const QAItem = ({ QAName, QAText, currentItem, onClick }) => {
  const {width} = useWindowDimensions()
  return (
    <>
      <div onClick={onClick} className={style.qaheader}>
        <div className={style.qaHeaderText}>{QAName}</div>
        <div className={style.qaHeaderIcon}>
          {width < 700 ? <img
          className={classNames(
            style.qaicon,
            {[style.qaiconactive]: QAName == currentItem}
        )}
            /* onClick={onClick} */
            src={MobileIconClose}
            alt=""
          /> : 
            <img 
            className={classNames(
              style.qaicon,
              {[style.qaiconactive]: QAName == currentItem}
          )}
              src={iconClose}
              alt=""
            />
          }
        </div>
      </div>
      <div
        className={classNames(
          style.qatext,
          {[style.qatextactive]: QAName == currentItem}
      )}
         
      >
        {QAText}
      </div>
      <div className={style.qablock}></div>
    </>
  );
};
