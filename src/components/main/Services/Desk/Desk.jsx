import React from "react";
import Button from "../../../common/Button/Button";
import style from "./Desk.module.scss";
import ServiceButton from "./ServiceButton/ServiceButton";
import { useNavigate } from "react-router-dom";

export const Desk = () => {
  const [activeService,SetActiveService]=React.useState(0)
  let activeButton=false
  const navigate = useNavigate();
  const services = [
    {
      serviceName: "UX/UI-дизайн",
      serviceText:
        "Все уведомления, связанные с сайтом: заявки, данные для обратной связи или покупка товара, будут приходить на ваш телеграм круглосуточно, с помощью бота . Вы всегда будете в курсе появился ли у вас новый клиент или покупатель, поэтому сможете оперативно среагировать.",
      imgUrl: "",
    },
    {
      serviceName: "Копирайтинг",
      serviceText:
        "Написание грамотных коммерческих текстов с целью создания привлекательного информационного содержания на сайте. Продуманный текст поможет привлечь внимание покупателя, ответить на первичные вопросы и сподвигнуть совершить целевое действие",
      imgUrl: "",
    },
    {
      serviceName: "SEO",
      serviceText:
        "СЕО-оптимизация позволяет сайтам быть понятными для поисковых систем. Качественное СЕО делает ваш сайт выше и предпочтительнее в поисковой выдачи. В таком случае при запросе, пользователь с большей долей вероятности попадёт в первую очередь именно к вам.",
      imgUrl: "",
    },
    {
      serviceName: "Логотип",
      serviceText:
        "Для того, чтобы ваш проект был запоминающимся, ему необходим логотип. Он помогает пользователю быстрее ориентироваться и запоминать ваш сайт. Также логотип даёт общее представление бренда, компании и проекта в целом. Пользователю будет гораздо легче узнать вас в будущем.",
      imgUrl: "",
    },
    {
      serviceName: "Вёрстка",
      serviceText:
        "После создания визуального макета проект переходит в стадию разработки. Команда разработчиков на основании макета выполняет вёрстку сайта, используя специальные языки, такие как HTML и CSS. В результате получается быстрый и адаптивный сайт, который может быть открыт на любом устройстве.",
      imgUrl: "",
    },
    {
      serviceName: "Программирование",
      serviceText:
        "При реализации сложного функционала не обойтись без использования специальных инструментов. Наши разработчики используют для этого самые современные технологии. С помощью языков программирования прописывается логика работы сайта. Все элементы становятся интерактивными.",
      imgUrl: "",
    },
    {
      serviceName: "Телеграм-бот",
      serviceText:
        "Все уведомления, связанные с сайтом: заявки, данные для обратной связи или покупка товара, будут приходить на ваш телеграм круглосуточно, с помощью бота . Вы всегда будете в курсе появился ли у вас новый клиент или покупатель, поэтому сможете оперативно среагировать.",
      imgUrl: "",
    },
    {
      serviceName: "Запуск рекламы",
      serviceText:
        "После завершения проекта, мы осуществляем гибкую и точную настройку рекламной компании в Яндекс Директ. Вы сможете получить первых посетителей в ближайшие сутки. Полученные данные и статистика позволят провести анализ для дальнейшего успешного развития своего проекта.",
      imgUrl: "",
    },
  ];
  const serviceOnClick=(i)=>{
    console.log(`i=${i} activeService=${activeService}`)
    SetActiveService(i)
    i===activeService?activeButton=false:activeButton=true;
    
  }
  const serviceArray = services.map((el, i) => (
    
    <ServiceButton activeButton={activeButton} onClick={()=>serviceOnClick(i)} >{el.serviceName}</ServiceButton>
  ));
  return (
    <div className={style.desk}>
      <div className={style.deskHeader}>{serviceArray}</div>
      <div className={style.deskCard}>
        <div className={style.deskCardLeft}>
          <div className={style.deskCardLeftImg}><img src={services[activeService].imgUrl} alt="" /></div>
        </div>
        <div className={style.deskCardRight}>
          <div className={style.deskCardRightHeader}>{services[activeService].serviceName}</div>
          <div className={style.deskCardRightText}>{services[activeService].serviceText}</div>
          <div className={style.buttonPosition}><Button onClick={() => navigate("/calculator")}>
            Рассчитать стоимость
          </Button></div>
          
        </div>
      </div>
    </div>
  );
};
