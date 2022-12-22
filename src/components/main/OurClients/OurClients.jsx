import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import style from "./OurClients.module.scss";

export const OurClients = () => {
  const {width} = useWindowDimensions()
  return (
    <div className={style.wrapper}>
      <h2 className={style.left}>
        {width < 700 ?<OurClientsMob/>:"Наши клиенты это\xA0—\xA0малый бизнес,\nи все те, кому нужен реально\n быстрый сайт"}
      </h2>
      <div className={style.right}>Скорость вашего <br /> будущего <br /> сайта</div>
    </div>
  );
};

export const OurClientsMob = () => {
  return (
    <h2>Наши клиенты <span style={{ whiteSpace: 'nowrap' }}>это — малый бизнес</span>, <span style={{ whiteSpace: 'nowrap' }}>и все те</span>, кому нужен реально
    быстрый сайт</h2>
  )
}


