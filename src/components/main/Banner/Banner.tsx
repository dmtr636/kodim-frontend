import React from "react";
import style from "./Banner.module.scss";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";





export const Banner = () => {
  const navigate = useNavigate();
  const words = ["Скоростные.", "Без загрузок.", "Для всех."]
  const [currentWord,setCurrentWord] =React.useState(words[0])
  const [wordCount, setWordCount] =React.useState(0)
  const changeWordFunc =()=>{
    if(wordCount<2){
      setCurrentWord(words[wordCount])
      setWordCount(wordCount+1)
    }
    else{
      setWordCount(0)
      setCurrentWord(words[wordCount])
    }
  }
  setTimeout(changeWordFunc,1000)

  return (
    <div className={style.wrapper}>
      <div className={style.bodybanner}>
        <div className={style.body}>
          <h1 className={style.h1}>
            Делаем не просто сайты
            <br />а веб-приложения
          </h1>
          <div className={style.text}>{currentWord}</div>
          <div className={style.button}>
            <Button onClick={() => navigate("/calculator")}>
              Рассчитать стоимость онлайн
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
