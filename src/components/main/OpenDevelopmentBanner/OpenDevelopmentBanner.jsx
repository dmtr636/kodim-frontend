import React from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Button from "../../common/Button/Button";
import bgpc from "./box_pc.webp"
import bgmob from "./box_mobile.webp"
import style from "./OpenDevelopmentBanner.module.scss"
export const OpenDevelopmentBanner = () => {
  const navigate = useNavigate()
  const { width } = useWindowDimensions()
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.text}>
          <h1 className={style.h1}>{"Работаем в\xA0открытую"}</h1>
          <h2 className={style.h2}>
            Наблюдайте за ходом разработки проекта через персональную ссылку
          </h2>
        </div>
        <div className={style.button}><Button onClick={() => navigate("/open-development")}>Узнать подробнее</Button></div>
      </div>
      <div className={style.imgBlock}><img className={style.img} src={bgpc} alt="" /></div>
    </div>
  );
};
