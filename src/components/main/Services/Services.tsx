import React from "react";
import { Desk } from "./Desk/Desk";
import style from "./Services.module.scss";
export const Services = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>
        Широкий выбор услуг под ключ для любого проекта
      </h2>
      <Desk/>
    </div>
  );
};
