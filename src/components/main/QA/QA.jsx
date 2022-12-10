import React from "react";

import style from "./QA.module.scss";
import { QAItem } from "./QAItem";

export const QA = () => {
 
  const QAArray = [
    {
      QAName: "Кто мы?",
      QAText:
        "Мы — небольшая команда единомышленников, которая объединилась в 2021 году.\n Нашей целью твёрдо стоит желание внести свой вклад в развитие интернета.\nМы используем современный подход в работе, максимально честны\n и открыты перед друг другом и каждым нашим клиентом.",
    },
    {
      QAName: "Чем отличается сайт от веб-приложения?",
      QAText:
        "Под сайтом мы подразумеваем привычный для многих образ: при переходах между разделами идут \n долгие прогрузки страниц. Веб-приложение же максимально приближено к мобильным приложениям,\n которые есть у всех нас на телефоне.\n В качестве примера — наш сайт.",
    },
    {
      QAName: "О какой скорости сайта мы говорим?",
      QAText:
        "Ваши посетители, переходя на сайт, должны получать максимально быстрый отклик, чтобы сайт \n загружался у них на устройствах в миг и они не закрыли его преждевременно. Для замера скорости \n мы пользуемся сервисом от Google - PageSpeed Insights. Мы ценим ваше время и время ваших\n клиентов.",
    },
    {
      QAName: "Как я смогу управлять сайтом?",
      QAText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quidem. Sunt et, quis aspernatur explicabo adipisci quaerat repellendus, quod quas quasi doloremque voluptatem tempora obcaecati recusandae quam deleniti vitae! At!",
    },
    {
      QAName: "Почему выбирать нас выгодно?",
      QAText:
        "В отличие от многих веб-студий, мы используем онлайн-формат офиса, чем значительно экономим на \n аренде и оборудовании. Также наша команда работает на основе проектной деятельности, а не на \n окладной части. Всё это позволило сделать цены более лояльными для клиентов.",
    },
    {
      QAName: "Как происходит оплата?",
      QAText:
        "В два этапа. Сначала клиенту отправляется счёт на предоплату, в стоимость которой входит работа \n UX/UI-дизайнера и копирайтера при необходимости,готовится визуальный макет проекта и \n коммерческий текст для него. После согласования макета с клиентом,мы отправляем второй счёт, где \n включены выбранные им услуги и оставшиеся работы над проектом.",
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
