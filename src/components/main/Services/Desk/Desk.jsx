import React, { useEffect } from "react";
import Button from "../../../common/Button/Button";
import style from "./Desk.module.scss";
import ServiceButton from "./ServiceButton/ServiceButton";
import { useNavigate } from "react-router-dom";
import HTMLcoding from "../Desk/img/HTMLcoding.gif";
import UXUI from "../Desk/img/UXUI.gif";
import LOGO from "../Desk/img/LOGO.gif";
import SEO from "../Desk/img/SEO.gif";
import TGBOT from "../Desk/img/TGBOT.gif";
import COPY from "../Desk/img/COPY.gif";
import CODING from "../Desk/img/CODING.gif";
import MARKETING from "../Desk/img/MARKETING.gif";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

export const Desk = () => {
  const {width} = useWindowDimensions()
  console.log(width)
  let serviceNameMob=  width < 700 ? "UX‑XUI" : "UX/UI-дизайн"
  const [activeService, SetActiveService] = React.useState(0);
  const navigate = useNavigate();
  const services = [
    {
      serviceName: serviceNameMob,
      serviceText:
        "Визуальная разработка будущего сайта. Составление макета с\xA0учётом особенностей аудитории проекта. Продуманный дизайн позволит вашим клиентам удобно и\xA0комфортно пользоваться продуктом, что благоприятно повлияет на конверсию и общее качество сайта.",
      imgUrl: UXUI,
    },
    {
      serviceName: "Копирайтинг",
      serviceText:
        "Написание грамотных коммерческих текстов с целью создания привлекательного информационного содержания на сайте. Продуманный текст поможет привлечь внимание покупателя, ответить на первичные вопросы и сподвигнуть совершить целевое действие",
      imgUrl: COPY,
    },
    {
      serviceName: "SEO",
      serviceText:
        "СЕО-оптимизация позволяет сайтам быть  понятными для\xA0поисковых систем. Качественное СЕО делает ваш сайт выше и\xA0предпочтительнее в поисковой выдачи. В\xA0таком случае при запросе, пользователь с\xA0большей долей вероятности попадёт в\xA0первую очередь именно к вам.",
      imgUrl: SEO,
    },
    {
      serviceName: "Логотип",
      serviceText:
        "Для того, чтобы ваш проект был запоминающимся, ему необходим логотип. Он помогает пользователю быстрее ориентироваться и\xA0запоминать ваш сайт. Также логотип даёт общее представление бренда, компании и проекта в целом. Пользователю будет гораздо легче узнать вас в будущем.",
      imgUrl: LOGO,
    },
    {
      serviceName: "Вёрстка",
      serviceText:
        "После создания визуального макета проект переходит в стадию разработки. Команда разработчиков на основании макета выполняет вёрстку сайта, используя специальные языки, такие как HTML и CSS. В\xA0результате получается быстрый и\xA0адаптивный сайт, который может быть открыт на любом устройстве.",
      imgUrl: HTMLcoding,
    },
    {
      serviceName: "Программирование",
      serviceText:
        "При реализации сложного функционала не обойтись без использования специальных инструментов. Наши разработчики используют для этого самые современные технологии. С\xA0помощью языков программирования прописывается логика работы сайта. Все элементы становятся интерактивными.",
      imgUrl: CODING,
    },
    {
      serviceName: "Телеграм‑бот",
      serviceText:
        "Все уведомления, связанные с сайтом: заявки, данные для обратной связи или покупка товара, будут приходить на ваш телеграм круглосуточно, с\xA0помощью бота . Вы всегда будете в\xA0курсе появился ли у\xA0вас новый клиент или покупатель, поэтому сможете оперативно среагировать.",
      imgUrl: TGBOT,
    },
    {
      serviceName: "Запуск рекламы",
      serviceText:
        "После завершения проекта, мы осуществляем гибкую и точную настройку рекламной компании в\xA0Яндекс Директ. Вы сможете получить первых посетителей в\xA0ближайшие сутки. Полученные данные и статистика позволят провести анализ для дальнейшего успешного развития своего проекта.",
      imgUrl: MARKETING,
    },
  ];
  const serviceOnClick = (i) => {
    SetActiveService(i);
  };
  const serviceArray = services.map((el, i) => (
    <ServiceButton
      key={el.serviceText}
      activeButton={activeService === i}
      onClick={() => serviceOnClick(i)}
    >
      {el.serviceName}
    </ServiceButton>
  ));
  return (
    <div className={style.desk}>
      <div className={style.deskHeader}>
        <div className={style.deskwrapper}>{serviceArray}</div>
      </div>
      <div className={style.deskCard}>
        <div className={style.deskCardLeft}>
          <div className={style.deskCardLeftImg}>
            {<img src={services[activeService].imgUrl} alt="" />}
          </div>
        </div>
        <div className={style.deskCardRight}>
          <div className={style.deskCardRightHeader}>
            {services[activeService].serviceName}
          </div>
          <div className={style.deskCardRightText}>
            {services[activeService].serviceText}
          </div>
          <div className={style.buttonPosition}>
            <Button onClick={() => navigate("/calculator")}>
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
