import React from "react";
import style from "./OpenDevelopment.module.scss";
import picture from "./infoPicture.webp";
export const OpenDevelopment = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.imgBlock}>
        <img className={style.img} src={picture} alt="" />
      </div>
      <div className={style.textBody}>
        <h1 className={style.h1}>
          У нас открытая разработка.
          <br /> Что это значит?
        </h1>
        <div className={style.text}>
          <div className={style.textBlock}>
            Если клиент хочет наблюдать за&nbsp;процессом разработки проекта,
            то&nbsp;мы&nbsp;предоставляем ему&nbsp;персональную ссылку,
            где&nbsp;он&nbsp;сможет смотреть за&nbsp;ходом работы.
            Это&nbsp;абсолютно бесплатно.
          </div>
          <div className={style.textBlock}>
            Мы&nbsp;стремимся быть прозрачными. Нам очень важно, чтобы наше
            сотрудничество было плодотворным. Вы&nbsp;сможете видеть ежедневную
            отчётность от&nbsp;нашей команды в&nbsp;каждом этапе разработки.
            Спасибо за&nbsp;уделённое время!
          </div>
        </div>
      </div>
    </div>
  );
};
