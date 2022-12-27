import React from "react"
import style from "./Page404/Page404.module.scss"
import { Link } from "react-router-dom"

export const Page404 = () => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.h1}>Предлагаем перейти сюда</h1>
            <Link to={"/"} className={style.link}>Главная</Link>
            <Link to={"/cases"}  className={style.link}>Кейсы</Link>
            <Link to={"/projects"}  className={style.link}>Наши проекты</Link>
            <Link to={"/calculator"} className={style.link}>Калькулятор услуг</Link>
            <Link to={"/#faq"}  className={style.link}>Вопросы</Link>
        </div>
    )
}