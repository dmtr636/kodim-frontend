import React from "react";
import style from "./Ticker.module.scss";
import Marquee from "react-fast-marquee";
import { TickerLinks } from "./tickerLinks/TickerLinks";
import { observer } from "mobx-react-lite";
import { projectsStore } from "../../../stores/projectsStore";

export const Ticker = observer(() => {
  const cases = projectsStore.cases.filter((item) => item.in_marquee);
  /* console.log(cases); */
  /* const casesNew=cases.filter(case => case.in_marquee) */
  const caseElement = [...cases, ...cases].map((el, i) => (
    <TickerLinks
      key={i + el.marquee_name}
      link={"/cases/" + el.id}
      caseName={el.marquee_name}
    />
  ));
  return (
    <div className={style.wrapper}>
      {cases.length > 0 ? (
        <Marquee gradient={false}>{caseElement}</Marquee>
      ) : (
        <></>
      )}
      {/* <Marquee gradient={false}  >
       {caseElement}
      </Marquee> */}
    </div>
  );
});
