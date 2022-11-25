import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './TickerLinks.module.scss'


export const TickerLinks  = (props) => {
    const navigate = useNavigate()
  return (

    <div className={style.body} onClick={()=>navigate(`${props.link}`)}>{props.caseName}</div>
  )
}
