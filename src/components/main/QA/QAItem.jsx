import React from 'react'
import style from "./QA.module.scss";
import iconClose from "../QA/icon/iconClose.svg";
import iconOpen from "../QA/icon/iconOpen.svg";

export const QAItem = ({QAName,QAText,currentItem,onClick}) => {
      console.log(currentItem)
      console.log(QAName)
  return (
    <><div className={style.qaheader}>
    <div className={style.qaHeaderText}>{QAName}</div>
    <div className={style.qaHeaderIcon}>
      <img onClick={onClick} src={QAName==currentItem?iconOpen:iconClose} alt="" />
    </div>
  </div>
  <div className={QAName==currentItem?style.qatextactive:style.qatext}>{QAText}</div>
  <div className={style.qablock}></div>
  </>
  )
}
