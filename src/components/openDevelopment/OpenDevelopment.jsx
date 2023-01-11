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
        <h1 className={style.h1}>У нас открытая разработка.<br/> Что это значит?</h1>
        <div className={style.text}>
          <div className={style.textBlock}>
           {"Если клиент хочет наблюдать за процессом разработки проекта, то мы предоставляем ему персональную ссылку, где он сможет смотреть за\xA0ходом работы. Это абсолютно бесплатно."}
          </div>
          <div className={style.textBlock}>
            {"Мы стремимся быть прозрачными. Нам очень важно, чтобы наше сотрудничество было плодотворным. Вы сможете видеть ежедневную отчётность от\xA0нашей команды в\xA0каждом этапе разработки. Спасибо за\xA0уделённое время!"}
          </div>
        </div>
      </div>
    </div>
  );
};
