import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import style from "./OurClients.module.scss";

export const OurClients = () => {
  const {width} = useWindowDimensions()
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        {width < 700 ?<OurClientsMob/>:"Наши клиенты это ‑ малый бизнес,\nи все те, кому нужен реально\n быстрый сайт"}
      </div>
      <div className={style.right}>Скорость вашего <br /> будущего <br /> сайта</div>
    </div>
  );
};

export const OurClientsMob = () => {
  return (
    <>Наши клиенты <span style={{ whiteSpace: 'nowrap' }}>это ‑ малый бизнес</span>, и все те, кому нужен реально <br />
    быстрый сайт</>
  )
}

