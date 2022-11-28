import React from 'react'
import style from "./QA.module.scss";
import iconClose from "../QA/icon/iconClose.svg";
import iconOpen from "../QA/icon/iconOpen.svg";

export const QAItem = ({QAName,QAText}) => {
    const[isActive, setIsActive]=React.useState(true)
    const QAClick=()=>{
        setIsActive(!isActive)
      }
  return (
    <><div className={style.qaheader}>
    <div className={style.qaHeaderText}>{QAName}</div>
    <div onClick={QAClick} className={style.qaHeaderIcon}>
      <img src={isActive?iconClose:iconOpen} alt="" />
    </div>
  </div>
  <div className={isActive?style.qatext:style.qatextactive}>{QAText}</div>
  <div className={style.qablock}></div>
  </>
  )
}
