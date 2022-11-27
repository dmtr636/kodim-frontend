import React from 'react'
import style from "./Banner.module.scss"
import Button from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
export const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className={style.wrapper}>
        <div className={style.body}>
    <h1 className={style.h1}>Делаем не просто сайты<br />
     а веб-приложения</h1>
     <div className={style.text}>Скоростные.</div>
     <div className={style.button}>
                <Button onClick={() => navigate("/calculator")}>
                Рассчитать стоимость онлайн
                </Button></div>
    </div>
    </div>
    
  )
}

