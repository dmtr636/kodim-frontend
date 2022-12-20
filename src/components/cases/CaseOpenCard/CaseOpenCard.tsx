import React from "react";
import style from "./CaseOpenCard.module.scss";
import {Helmet} from "react-helmet";
import {isTablet} from "../../../utils/utils";

export const CaseOpenCard = (props: any) => {
  const domain = "https://kodim.space/";
  console.log(props);
  console.log(props.project_images);
  const imgArray=props.project_images.map((el:any,i:number)=>(
    <div key={i+el} className={style.imgBlock}>
    <img
      className={style.headerImg}
      src={domain + el.image}
      alt="тут должна быть картинка"
    />
  </div>
  ))
  return (
    <>
      <Helmet>
        <title>{props.name}</title>
      </Helmet>
      <div className={style.wrapper}>
        <div>
          <img
              className={style.headerImg}
              src={domain + props.project_images[0].image}
              alt="тут должна быть картинка"
          />
        </div>
        <div className={style.date}>{props.date}</div>
        <h1 className={style.header}>{props.name}</h1>
        <div className={style.block}>
          <div className={style.blockGoal}>Цель проекта</div>
          <div className={style.blockText}>{props.purpose}</div>
        </div>
        {imgArray.slice(1)}
        {/* <di className={style.imgBlock}>
        <img
          className={style.headerImg}
          src={domain + props.project_images[1].image}
          alt="тут должна быть картинка"
        />
      </di>
      <di className={style.LastImgBlock}>
        <img
          className={style.headerImg}
          src={domain + props.project_images[2].image}
          alt="тут должна быть картинка"
        />
      </di> */}
      </div>
    </>
  );
};
