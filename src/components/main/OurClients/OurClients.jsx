import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import style from "./OurClients.module.scss";

export const OurClients = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={style.wrapper}>
      <h2 className={style.left}>
        Разработка сайтов для&nbsp;малого бизнеса и&nbsp;самозанятых
      </h2>
      <div className={style.right}>
        <div className={style.rightText}>
          Скорость вашего <br /> будущего <br /> сайта
        </div>
      </div>
    </div>
  );
};
