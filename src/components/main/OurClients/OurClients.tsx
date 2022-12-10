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
      <div className={style.leftMobSmall}>
        Наши клиенты <br /> это — малый бизнес, <br />
        и все те, кому нужен<br /> реально 
        быстрый сайт
      </div>
      <div className={style.leftMobBig}>
        Наши клиенты это — малый <br /> бизнес, 
        и все те, кому нужен<br /> реально 
        быстрый сайт
      </div>
      <div className={style.right}>Скорость вашего <br /> будущего <br /> сайта</div>
    </div>
  );
};
