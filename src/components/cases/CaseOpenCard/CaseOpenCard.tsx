import React from 'react'
import style from "./CaseOpenCard.module.scss"

export const CaseOpenCard = (props:any) => {
  const domain = "https://kodim.space";
  console.log(props)
  console.log(props.project_images)
  return (
    <div className={style.wrapper}>
      <div className={style.headerImg}><img src={domain+props.project_images[0].image} alt="" /></div>
    </div>
  )
}
