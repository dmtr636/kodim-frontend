import React from "react";
import style from "./CaseOpenCard.module.scss";

export const CaseOpenCard = (props: any) => {
  const domain = "https://kodim.space/";
  console.log(props);
  console.log(props.project_images);
  return (
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
      <div className={style.imgBlock}>
        <img
          className={style.headerImg}
          src={domain + props.project_images[1].image}
          alt="тут должна быть картинка"
        />
      </div>
      <div className={style.LastImgBlock}>
        <img
          className={style.headerImg}
          src={domain + props.project_images[2].image}
          alt="тут должна быть картинка"
        />
      </div>
    </div>
  );
};
