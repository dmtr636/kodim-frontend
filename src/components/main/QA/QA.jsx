import React from "react";

import style from "./QA.module.scss";
import { QAItem } from "./QAItem";

export const QA = () => {
 
  const QAArray = [
    {
      QAName: "Кто мы?",
      QAText:
        "Мы — небольшая команда единомышленников, которая объединилась в\xA02021 году. Нашей\xA0целью твёрдо стоит желание внести свой вклад в\xA0развитие интернета. Мы\xA0используем современный подход в работе, максимально честны и\xA0открыты перед\xA0друг другом и каждым нашим клиентом.",
    },
    {
      QAName: "Чем отличается сайт от веб-приложения?",
      QAText:
        "Под сайтом мы подразумеваем привычный для многих образ: при переходах между\xA0разделами идут долгие прогрузки страниц. Веб-приложение же максимально приближено к мобильным приложениям, которые есть у\xA0всех нас на телефоне.\n В качестве примера — наш сайт.",
    },
    {
      QAName: "О какой скорости сайта мы говорим?",
      QAText:
        "Ваши посетители, переходя на сайт, должны получать максимально быстрый отклик, чтобы сайт  загружался у них на устройствах в миг и они не закрыли его преждевременно. Для замера скорости мы\xA0пользуемся сервисом от\xA0Google\xA0-\xA0PageSpeed\xA0Insights. Мы\xA0ценим ваше время и время ваших клиентов.",
    },
    {
      QAName: "Как я смогу управлять сайтом?",
      QAText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quidem. Sunt et, quis aspernatur explicabo adipisci quaerat repellendus, quod quas quasi doloremque voluptatem tempora obcaecati recusandae quam deleniti vitae! At!",
    },
    {
      QAName: "Почему выбирать нас выгодно?",
      QAText:
        "В отличие от многих веб-студий, мы используем онлайн-формат офиса, чем значительно экономим на  аренде и\xA0оборудовании. Также наша команда работает на\xA0основе проектной деятельности, а\xA0не\xA0на\xA0окладной части. Всё это позволило сделать цены более лояльными для клиентов.",
    },
    {
      QAName: "Как происходит оплата?",
      QAText:
        "В два этапа. Сначала клиенту отправляется счёт на предоплату, в\xA0стоимость которой входит работа UX/UI-дизайнера и\xA0копирайтера при необходимости,готовится визуальный макет проекта и коммерческий текст для него. После согласования макета с\xA0клиентом,мы отправляем второй счёт, где\xA0включены выбранные им услуги и\xA0оставшиеся работы над проектом.",
    },
  ];
  const [currentItem, setCurrentItem] = React.useState("");
  const changeCurrentItem=(item)=>{
    if(currentItem!=item){
      setCurrentItem(item)
    }
    else{
      setCurrentItem("")
    }
  }
  const QAList = QAArray.map((el) => (
    <QAItem
      onClick={() => changeCurrentItem(el.QAName)}
      currentItem={currentItem}
      key={el.QAName}
      QAName={el.QAName}
      QAText={el.QAText}
    />
  ));
  console.log(currentItem)
  return (
    <div className={style.wrapper} id={"faq"}>
      <div className={style.body}>
        <div className={style.header}>Ответы на популярные вопросы</div>
        {QAList}
      </div>
    </div>
  );
};
