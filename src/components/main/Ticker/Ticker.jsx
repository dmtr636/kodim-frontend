import React from "react";
import style from "./Ticker.module.scss";
import Marquee from "react-fast-marquee";
import { TickerLinks } from "./tickerLinks/TickerLinks";

export const Ticker = () => {
  const cases = [
    { caseName: "Кафе", link: "/projects" },
    { caseName: "Агенство недвижимости", link: "/projects" },
    { caseName: "Водитель газели", link: "/projects" },
    { caseName: "Строительная компания", link: "/projects" },
    { caseName: "Дизайнер", link: "/projects" },
    { caseName: "Продажа дома", link: "/projects" },
    { caseName: "Кафе", link: "/projects" },
    { caseName: "Агенство недвижимости", link: "/projects" },
    { caseName: "Водитель газели", link: "/projects" },
    { caseName: "Строительная компания", link: "/projects" },
    { caseName: "Дизайнер", link: "/projects" },
    { caseName: "Продажа дома", link: "/projects" },
  ];
  const caseElement= cases.map(el=><TickerLinks link={el.link} caseName={el.caseName}/>)
  return (
    <div className={style.wrapper}>
      <Marquee gradient={false}  >
      {caseElement}
      </Marquee>
    </div>
  );
};
