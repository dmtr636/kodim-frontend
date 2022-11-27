import React from "react";
import style from "./OurClients.module.scss";

export const OurClients = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        Наши клиенты это — малый бизнес, <br />
        и все те, кому нужен реально <br />
        быстрый сайт
      </div>
      <div className={style.right}>Скорость вашего <br /> будущего <br /> сайта</div>
    </div>
  );
};
