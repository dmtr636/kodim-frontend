import React from "react";
import style from "./CaseOpenCard.module.scss";

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
        <div className={style.blockGoal}>{props.category}</div>
        <div className={style.blockText}>{props.description}</div>
      </div>
      {imgArray.slice(1)}
    </div>
  );
};
