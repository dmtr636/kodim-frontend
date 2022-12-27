import React from "react";

import style from "./QA.module.scss";
import { QAItem } from "./QAItem";

export const QA = () => {

  const QAArray = [
    {
      QAName: "Кто мы?",
      QAText:
        "Мы — небольшая команда единомышленников, которая объединилась в\xA02021 году. Наша цель⁠⁠\xA0⁠⁠-⁠\xA0внести свой вклад в\xA0развитие интернета. Наша команда использует современный подход в\xA0работе, мы максимально честны и\xA0открыты перед\xA0каждым из\xA0нас и нашим клиентом.",
    },
    {
      QAName: "Чем отличается сайт от веб-приложения?",
      QAText:
        "Под сайтом мы подразумеваем привычный для\xA0многих образ: при\xA0переходах между разделами идут долгие прогрузки страниц. Веб‑приложение же максимально приближено к\xA0мобильным приложениям, которые есть у\xA0всех на\xA0телефоне. В\xA0качестве\xA0примера\xA0—\xA0наш сайт.",
    },
    {
      QAName: "О какой скорости сайта мы говорим?",
      QAText: (
        <>
          {
            "Ваши посетители, переходя на\xA0сайт, должны получать максимально быстрый отклик, чтобы сайт загружался у\xA0них на\xA0устройствах моментально и\xA0они не закрыли его\xA0преждевременно. Для\xA0замера скорости мы пользуемся сервисом от\xA0"
          }
          <a style={{
              whiteSpace: "nowrap",
              textDecoration: "none",
              color: "#52AEFF",
              fontWeight:"SemiBold",
            }}
            href="https://pagespeed.web.dev" target="_blank">Google — PageSpeed</a> 
          <a style={{
              textDecoration: "none",
              color: "#52AEFF",
              fontWeight:"600",
            }}
            href="https://pagespeed.web.dev"
            target="_blank"
          > Insights. </a>
          Мы ценим ваше время и время ваших клиентов.
        </>
      ),
      /* "Ваши посетители, переходя на\xA0сайт, должны получать максимально быстрый отклик, чтобы сайт загружался у\xA0них на\xA0устройствах моментально и\xA0они не закрыли его преждевременно. Для\xA0замера скорости мы пользуемся сервисом от\xA0Google\xA0-\xA0PageSpeed Insights. Мы ценим ваше время и время ваших клиентов." */
    },
    {
      QAName: "Как я буду управлять сайтом?",
      QAText:
        "Вы сможете управлять своим сайтом с\xA0помощью специальной админ‑панели, либо доверить это нам за\xA0дополнительную плату. На\xA0выбор предоставляется два варианта админ‑панели: бесплатный, с\xA0базовым функционалом, и\xA0платный, разработанный под\xA0определённую специфику вашего сайта.",
    },
    {
      QAName: "Почему выбирать нас выгодно?",
      QAText:
        "В отличие от\xA0многих веб-студий, мы используем онлайн‑формат офиса, чем\xA0значительно экономим на\xA0аренде помещения и оборудовании. Также наша команда работает на\xA0основе проектной деятельности, а не на\xA0окладной части. Всё\xA0это\xA0позволило сделать цены более лояльными для\xA0клиентов.",
    },
    {
      QAName: "Как происходит оплата?",
      QAText:
        "В два этапа. Сначала клиенту отправляется счёт на\xA0предоплату, в\xA0стоимость которого входит работа UX/UI‑дизайнера и\xA0копирайтера. При\xA0необходимости, готовится визуальный макет проекта и\xA0коммерческий текст для\xA0него. После согласования макета с\xA0клиентом, мы отправляем второй счёт, где включены выбранные им услуги и\xA0оставшиеся работы над\xA0проектом.",
    },
  ];
  const [currentItem, setCurrentItem] = React.useState("");
  const changeCurrentItem = (item) => {
    if (currentItem != item) {
      setCurrentItem(item);
    } else {
      setCurrentItem("");
    }
  };
  const QAList = QAArray.map((el) => (
    <QAItem
      onClick={() => changeCurrentItem(el.QAName)}
      currentItem={currentItem}
      key={el.QAName}
      QAName={el.QAName}
      QAText={el.QAText}
    />
  ));
/*   console.log(currentItem); */
  return (
    <div className={style.wrapper} id={"faq"}>
      <div className={style.body}>
        <div className={style.header}>Ответы на популярные вопросы</div>
        {QAList}
      </div>
    </div>
  );
};
