import React from "react";
import style from "./CaseCard.module.scss";
import axios from "axios";

export const CaseCard = ({image,name,description,category}) => {
  const domain = "https://kodim.space";
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <img className={style.leftImg} src={domain + image} alt="" />
      </div>
      <div className={style.right}>
        <div className={style.rightHeader}>{name}</div>
        <div className={style.rightText}>{description}</div>
        <div className={style.rightCategory}>{category}</div>
      </div>
      </div>
    
  );
};
